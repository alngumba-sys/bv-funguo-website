import { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Save, Lock, RefreshCw } from 'lucide-react';

interface SecretAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (images: any) => void;
  currentImages: any;
}

interface ImageConfig {
  url: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

export function SecretAdminModal({ isOpen, onClose, onSave, currentImages }: SecretAdminModalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<Record<string, ImageConfig>>({});
  const [activeTab, setActiveTab] = useState<'logos' | 'content'>('logos');

  const ADMIN_PASSWORD = 'BVFunguo@2026';

  useEffect(() => {
    if (isOpen) {
      setImages(currentImages);
      setIsAuthenticated(false);
      setPassword('');
      setError('');
    }
  }, [isOpen, currentImages]);

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

  const handleFileUpload = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Create preview URL
    const url = URL.createObjectURL(file);
    setImages(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        url
      }
    }));
  };

  const handleSave = () => {
    onSave(images);
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
    { key: 'logo', label: 'Logo (Blue - Scrolled)', description: 'Logo shown when page is scrolled' },
    { key: 'logoWhite', label: 'Logo (White - Top)', description: 'Logo shown at top of page' },
    { key: 'footerLogo', label: 'Footer Logo', description: 'Logo in footer' },
    { key: 'bvLogo', label: 'BV Logo', description: 'BV brand logo' },
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
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-280px)]">
              <div className="space-y-6">
                {(activeTab === 'logos' ? logoImages : contentImages).map(({ key, label, description }) => (
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
