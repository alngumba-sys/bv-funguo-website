import { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Save, Lock, RefreshCw, Phone, Mail, MapPin } from 'lucide-react';
import { uploadImage } from '@/lib/supabase';

interface SecretAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  currentImages: any;
  currentContact?: ContactInfo;
  currentMessages?: any[];
}

interface ImageConfig {
  url: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export function SecretAdminModal({ isOpen, onClose, onSave, currentImages, currentContact, currentMessages }: SecretAdminModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<Record<string, ImageConfig>>({});
  const [contact, setContact] = useState<ContactInfo>({
    email: 'info@bvfunguo.com',
    phone: '+254 XXX XXX XXX',
    location: 'Nairobi, Kenya'
  });
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'logos' | 'content' | 'contact' | 'messages'>('logos');

  const ADMIN_PASSWORD = 'BVFunguo@2026';

  useEffect(() => {
    if (isOpen) {
      setImages(currentImages);
      if (currentContact) {
        setContact(currentContact);
      }
      if (currentMessages) {
        setMessages(currentMessages);
      }
      setIsAuthenticated(false);
      setPassword('');
      setError('');
    }
  }, [isOpen, currentImages, currentContact, currentMessages]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleImageChange = (key: string, field: keyof ImageConfig, value: string) => {
    setImages(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }));
  };

  const handleFileUpload = async (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB limit');
      return;
    }

    // Check if it's an image
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Upload to Supabase
    const { data, error } = await uploadImage(file);
    if (error) {
      alert('Error uploading image: ' + error.message);
      return;
    }

    // Set the URL in state
    setImages(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        url: data.publicUrl
      }
    }));
  };

  const handleSave = () => {
    onSave({ images, contact, messages });
    onClose();
  };

  const handleReset = (key: string) => {
    setImages(prev => {
      const newImages = { ...prev };
      delete newImages[key];
      return newImages;
    });
  };

  const logoImages = [
    { key: 'logo', label: 'Logo (Blue - Scrolled)', description: 'Logo shown when scrolled' },
    { key: 'logoWhite', label: 'Logo (White - Top)', description: 'Logo shown at top of page' },
    { key: 'footerLogo', label: 'Footer Logo', description: 'Logo in footer' },
    { key: 'bvLogo', label: 'BV Logo', description: 'BV brand logo' },
    { key: 'bvImage', label: 'BV Lady', description: 'BV lady image in services section' },
    { key: 'bvWatermark', label: 'BV Watermark', description: 'Background watermark' },
    { key: 'bgPattern', label: 'Background Pattern', description: 'Background pattern' },
    { key: 'kenyaMap', label: 'Kenya Map', description: 'Kenya map graphic' }
  ];

  const contentImages = [
    { key: 'heroTeam', label: 'Hero Team Image', description: 'Main hero section image' },
    { key: 'personalLady', label: 'Personal Finance Lady', description: 'Woman in personal finance card' },
    { key: 'businessMan', label: 'Business Man', description: 'Man in business finance card' },
    { key: 'jamesMwangi', label: 'James Mwangi', description: 'Testimonial photo' },
    { key: 'graceAkinyi', label: 'Grace Akinyi', description: 'Testimonial photo' },
    { key: 'davidOmondi', label: 'David Omondi', description: 'Testimonial photo' },
    { key: 'ctaImage', label: 'CTA Image', description: 'Call-to-action section image' },
    { key: 'cheetahLandscape', label: 'Cheetah Landscape', description: 'Kenya wildlife landscape' },
    { key: 'kenyaFeatures', label: 'Kenya Features', description: 'Kenya cityscape/features' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {!isAuthenticated ? (
          // Password Screen
          <div className="p-12">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#635BFF] rounded-full flex items-center justify-center">
                  <Lock className="text-white" size={32} />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center mb-2">Admin Access</h2>
              <p className="text-center text-gray-600 mb-8">Enter password to manage site images</p>
              
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                    placeholder="Enter admin password"
                    autoFocus
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#3b82f6] to-[#635BFF] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Access Admin Panel
                </button>
                
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Admin Panel
          <>
            {/* Header */}
            <div className="border-b border-gray-200 bg-gradient-to-r from-[#3b82f6] to-[#635BFF] text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Image Management</h2>
                  <p className="text-white/80 text-sm mt-1">Customize all images and logos on your site</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50 px-6">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab('logos')}
                  className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'logos'
                      ? 'border-[#3b82f6] text-[#3b82f6]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Logos & Graphics
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'content'
                      ? 'border-[#3b82f6] text-[#3b82f6]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Content Images
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'contact'
                      ? 'border-[#3b82f6] text-[#3b82f6]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Contact Information
                </button>
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`px-4 py-3 font-medium border-b-2 transition-colors ${
                    activeTab === 'messages'
                      ? 'border-[#3b82f6] text-[#3b82f6]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Messages
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
              <div className="space-y-6">
                {/* Logos Tab */}
                {activeTab === 'logos' && logoImages.map(({ key, label, description }) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{label}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <button
                        onClick={() => handleReset(key)}
                        className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        <RefreshCw size={14} />
                        Reset
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Preview */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preview
                        </label>
                        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-4 min-h-[150px] flex items-center justify-center">
                          {images[key]?.url ? (
                            <img
                              src={images[key].url}
                              alt={label}
                              className="max-w-full max-h-[200px] object-contain"
                            />
                          ) : (
                            <div className="text-center text-gray-400">
                              <ImageIcon size={48} className="mx-auto mb-2" />
                              <p className="text-sm">No custom image</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="space-y-4">
                        {/* URL Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                          </label>
                          <input
                            type="text"
                            value={images[key]?.url || ''}
                            onChange={(e) => handleImageChange(key, 'url', e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
                          />
                        </div>

                        {/* File Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Or upload file (max 5MB)
                          </label>
                          <label className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <Upload size={16} />
                            <span className="text-sm">Choose file</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(key, e)}
                              className="hidden"
                            />
                          </label>
                        </div>

                        {/* Size Controls */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Max Width
                            </label>
                            <input
                              type="text"
                              value={images[key]?.maxWidth || ''}
                              onChange={(e) => handleImageChange(key, 'maxWidth', e.target.value)}
                              placeholder="e.g., 500px, 100%"
                              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Max Height
                            </label>
                            <input
                              type="text"
                              value={images[key]?.maxHeight || ''}
                              onChange={(e) => handleImageChange(key, 'maxHeight', e.target.value)}
                              placeholder="e.g., 300px, auto"
                              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Content Images Tab */}
                {activeTab === 'content' && contentImages.map(({ key, label, description }) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{label}</h3>
                        <p className="text-sm text-gray-600">{description}</p>
                      </div>
                      <button
                        onClick={() => handleReset(key)}
                        className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                      >
                        <RefreshCw size={14} />
                        Reset
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Preview */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preview
                        </label>
                        <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-4 min-h-[150px] flex items-center justify-center">
                          {images[key]?.url ? (
                            <img
                              src={images[key].url}
                              alt={label}
                              className="max-w-full max-h-[200px] object-contain"
                            />
                          ) : (
                            <div className="text-center text-gray-400">
                              <ImageIcon size={48} className="mx-auto mb-2" />
                              <p className="text-sm">No custom image</p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="space-y-4">
                        {/* URL Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Image URL
                          </label>
                          <input
                            type="text"
                            value={images[key]?.url || ''}
                            onChange={(e) => handleImageChange(key, 'url', e.target.value)}
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
                          />
                        </div>

                        {/* File Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Or upload file (max 5MB)
                          </label>
                          <label className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <Upload size={16} />
                            <span className="text-sm">Choose file</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleFileUpload(key, e)}
                              className="hidden"
                            />
                          </label>
                        </div>

                        {/* Size Controls */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Max Width
                            </label>
                            <input
                              type="text"
                              value={images[key]?.maxWidth || ''}
                              onChange={(e) => handleImageChange(key, 'maxWidth', e.target.value)}
                              placeholder="e.g., 500px, 100%"
                              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Max Height
                            </label>
                            <input
                              type="text"
                              value={images[key]?.maxHeight || ''}
                              onChange={(e) => handleImageChange(key, 'maxHeight', e.target.value)}
                              placeholder="e.g., 300px, auto"
                              className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Contact Information</h3>
                        <p className="text-sm text-gray-600">Update contact details for the site</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={contact.email}
                          onChange={(e) => setContact({ ...contact, email: e.target.value })}
                          placeholder="info@bvfunguo.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="text"
                          value={contact.phone}
                          onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                          placeholder="+254 XXX XXX XXX"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={contact.location}
                          onChange={(e) => setContact({ ...contact, location: e.target.value })}
                          placeholder="Nairobi, Kenya"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'messages' && (
                  <div className="space-y-4">
                    {messages.length === 0 ? (
                      <div className="bg-gray-50 rounded-xl p-12 border border-gray-200 text-center">
                        <Mail size={48} className="mx-auto mb-4 text-gray-400" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">No messages yet</h3>
                        <p className="text-sm text-gray-600">Form submissions will appear here</p>
                      </div>
                    ) : (
                      messages.slice().reverse().map((message) => (
                        <div key={message.id} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#3b82f6] transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${message.read ? 'bg-gray-400' : 'bg-[#3b82f6]'}`} />
                              <div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                  message.type === 'Quick Contact' 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'bg-teal-100 text-teal-700'
                                }`}>
                                  {message.type}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(message.timestamp).toLocaleString('en-KE', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                              })}
                            </span>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                              <p className="text-sm font-medium text-gray-900">{message.name}</p>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                              <p className="text-sm font-medium text-gray-900">{message.email}</p>
                            </div>
                            {message.phone && (
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Phone</label>
                                <p className="text-sm font-medium text-gray-900">{message.phone}</p>
                              </div>
                            )}
                            {message.serviceInterest && (
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Service Interest</label>
                                <p className="text-sm font-medium text-gray-900">{message.serviceInterest}</p>
                              </div>
                            )}
                            {message.message && (
                              <div className="md:col-span-2">
                                <label className="block text-xs font-medium text-gray-500 mb-1">Message</label>
                                <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{message.message}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Changes are saved to browser storage and persist across sessions
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#3b82f6] to-[#635BFF] text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}