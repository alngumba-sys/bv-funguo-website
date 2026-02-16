import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mtfsrlsccbmrekzthvmw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZnNybHNjY2JtcmVrenRodm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc5ODY4NDAsImV4cCI6MjA4MzU2Mjg0MH0.SdYC7G_lxFifJh8VLFpLjOZw5hPm_t0liv4xQJcHHGU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ContactMessage {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Helper function to initialize database tables
export async function initializeDatabase() {
  // Check if the contact_messages table exists by trying to select from it
  const { error } = await supabase
    .from('contact_messages')
    .select('id')
    .limit(1);
  
  if (error) {
    console.log('Database tables may need to be created. Please run the following SQL in your Supabase SQL Editor:');
    console.log(`
      -- Create contact_messages table
      CREATE TABLE IF NOT EXISTS contact_messages (
        id BIGSERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL
      );

      -- Enable Row Level Security
      ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

      -- Allow public inserts (for contact form submissions)
      CREATE POLICY "Allow public inserts" ON contact_messages
        FOR INSERT TO anon
        WITH CHECK (true);

      -- Allow authenticated reads (for admin panel)
      CREATE POLICY "Allow authenticated reads" ON contact_messages
        FOR SELECT TO authenticated
        USING (true);
    `);
  }
}

// Helper function to initialize storage bucket
export async function initializeStorage() {
  const bucketName = 'bv-funguo-images';
  
  // Check if bucket exists
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
  
  if (!bucketExists) {
    // Create bucket
    const { error } = await supabase.storage.createBucket(bucketName, {
      public: true,
      fileSizeLimit: 5242880, // 5MB
    });
    
    if (error) {
      console.log('Please create a storage bucket in your Supabase dashboard:');
      console.log('1. Go to Storage in the Supabase dashboard');
      console.log('2. Create a new bucket called "bv-funguo-images"');
      console.log('3. Make it public');
      console.log('4. Set file size limit to 5MB');
    }
  }
  
  return bucketName;
}

// Save contact message to database
export async function saveContactMessage(message: ContactMessage) {
  const { data, error } = await supabase
    .from('contact_messages')
    .insert([message])
    .select()
    .single();
  
  if (error) {
    console.error('Error saving message to Supabase:', error);
    // Fallback to localStorage
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const newMessage = {
      ...message,
      id: Date.now(),
      created_at: new Date().toISOString(),
    };
    messages.push(newMessage);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    return newMessage;
  }
  
  return data;
}

// Get all contact messages from database
export async function getContactMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from('contact_messages')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching messages from Supabase:', error);
    // Fallback to localStorage
    return JSON.parse(localStorage.getItem('contactMessages') || '[]');
  }
  
  return data || [];
}

// Upload image to Supabase Storage
export async function uploadImage(file: File, path: string): Promise<string | null> {
  const bucketName = await initializeStorage();
  
  // Generate unique filename
  const fileExt = file.name.split('.').pop();
  const fileName = `${path}-${Date.now()}.${fileExt}`;
  
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });
  
  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }
  
  // Get public URL
  const { data: publicUrl } = supabase.storage
    .from(bucketName)
    .getPublicUrl(fileName);
  
  return publicUrl.publicUrl;
}

// Delete image from Supabase Storage
export async function deleteImage(url: string): Promise<boolean> {
  try {
    const bucketName = await initializeStorage();
    // Extract filename from URL
    const fileName = url.split('/').pop();
    if (!fileName) return false;
    
    const { error } = await supabase.storage
      .from(bucketName)
      .remove([fileName]);
    
    if (error) {
      console.error('Error deleting image:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
}
