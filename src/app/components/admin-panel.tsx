import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Upload, Image as ImageIcon, Trash2, ArrowLeft } from 'lucide-react';

interface UploadedImage {
  id: string;
  name: string;
  url: string;
  size: number;
  uploadedAt: Date;
}

export function AdminPanel() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'BVFunguo@2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} exceeds 5MB limit`);
        return;
      }

      // Check if it's an image
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} is not an image file`);
        return;
      }

      // Create preview URL
      const url = URL.createObjectURL(file);
      const newImage: UploadedImage = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        url: url,
        size: file.size,
        uploadedAt: new Date()
      };

      setUploadedImages(prev => [...prev, newImage]);
    });

    // Reset input
    e.target.value = '';
  };

  const handleDeleteImage = (id: string) => {
    setUploadedImages(prev => {
      const image = prev.find(img => img.id === id);
      if (image) {
        URL.revokeObjectURL(image.url);
      }
      return prev.filter(img => img.id !== id);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-teal-600 to-orange-500 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <Lock className="text-white" size={32} />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-2">Admin Panel</h1>
          <p className="text-gray-600 text-center mb-8">BV FUNGUO</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Username</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-blue-600 hover:underline text-sm"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <p className="text-gray-600 text-sm">BV FUNGUO</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <ArrowLeft size={20} />
                Back to Site
              </button>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Upload className="text-blue-600" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Image Upload</h2>
              <p className="text-gray-600 text-sm">Maximum 5MB per file</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <input 
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <ImageIcon className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-lg font-semibold mb-2">Click to upload images</p>
              <p className="text-gray-600 text-sm">PNG, JPG, GIF up to 5MB</p>
            </label>
          </div>
        </div>

        {/* Images Grid */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Uploaded Images ({uploadedImages.length})</h2>
          
          {uploadedImages.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <ImageIcon className="mx-auto mb-4" size={48} />
              <p>No images uploaded yet</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {uploadedImages.map(image => (
                <div key={image.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 relative">
                    <img 
                      src={image.url} 
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-sm mb-1 truncate">{image.name}</p>
                    <p className="text-gray-600 text-xs mb-3">
                      {formatFileSize(image.size)} • {image.uploadedAt.toLocaleDateString()}
                    </p>
                    <button 
                      onClick={() => handleDeleteImage(image.id)}
                      className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
