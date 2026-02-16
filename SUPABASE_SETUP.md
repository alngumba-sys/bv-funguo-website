# Supabase Setup Guide for BV FUNGUO

Your BV FUNGUO website is now connected to Supabase! Follow these steps to complete the setup.

## ✅ What's Already Done

- ✅ Supabase client installed and configured
- ✅ Contact forms integrated with Supabase
- ✅ Auto-fallback to localStorage if Supabase fails
- ✅ Your credentials are embedded in the code

## 🔧 Database Setup

### Step 1: Create the Contact Messages Table

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/mtfsrlsccbmrekzthvmw
2. Click on **"SQL Editor"** in the left sidebar
3. Click **"New Query"**
4. Copy and paste this SQL code:

```sql
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
```

5. Click **"Run"** to execute the SQL

### Step 2: Create Storage Bucket for Images

1. In your Supabase dashboard, click **"Storage"** in the left sidebar
2. Click **"New bucket"**
3. Set these options:
   - **Name**: `bv-funguo-images`
   - **Public bucket**: ✅ **Enabled** (check this box)
   - **File size limit**: `5MB`
   - **Allowed MIME types**: Leave empty (allows all)
4. Click **"Create bucket"**

### Step 3: Configure Storage Policies

1. After creating the bucket, click on **"bv-funguo-images"**
2. Go to the **"Policies"** tab
3. Click **"New Policy"**
4. Select **"For full customization"**
5. Add these policies:

**Policy 1: Public Read Access**
```sql
-- Policy Name: Public read access
-- Allowed operation: SELECT
-- Policy definition:
(bucket_id = 'bv-funguo-images'::text)
```

**Policy 2: Public Upload Access**
```sql
-- Policy Name: Public upload access
-- Allowed operation: INSERT
-- Policy definition:
(bucket_id = 'bv-funguo-images'::text)
```

## 🎯 How It Works Now

### Contact Form Submissions
- ✅ Both "Quick Contact" and "Send message" forms now save to Supabase
- ✅ Messages are saved to the `contact_messages` table
- ✅ If Supabase fails, messages still save to localStorage as backup

### Image Storage (Admin Panel)
- ⏳ Admin panel can upload images to Supabase Storage
- ⏳ Images are stored permanently in the cloud
- ⏳ No more 5MB browser limit

### Admin Panel
- ✅ View all contact messages
- ✅ Customize images and contact info
- ✅ Access by clicking logo 5 times

## 📊 Viewing Your Data

### View Contact Messages
1. Go to **"Table Editor"** in Supabase dashboard
2. Select **"contact_messages"** table
3. See all form submissions with timestamps

### View Uploaded Images
1. Go to **"Storage"** in Supabase dashboard
2. Click on **"bv-funguo-images"** bucket
3. Browse all uploaded files

## 🔐 Security Notes

- ✅ Public can submit forms (INSERT only)
- ✅ Only authenticated users can read messages
- ✅ Storage bucket is public for image serving
- ✅ Anon key is safe for frontend use

## 🚀 Next Steps

Your site is now fully integrated with Supabase! All new contact form submissions will be saved to your database.

**To test:**
1. Submit a form on your website
2. Check the `contact_messages` table in Supabase
3. You should see the new entry!

---

**Need help?** Check your browser console for any error messages. The app will automatically fall back to localStorage if there are any issues.
