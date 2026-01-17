import { useState } from 'react';
import { X, Save, Upload, Trash2, Plus, RotateCcw, AlertTriangle, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../context/ContentContext';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  const { content, updateContent, resetContent } = useContent();
  const [activeTab, setActiveTab] = useState('hero');
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [storageWarning, setStorageWarning] = useState(false);

  const tabs = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'services', label: 'Services' },
    { id: 'personal-loans', label: 'Consulting Approach' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'images', label: 'Images' },
  ];

  // Check storage on mount
  useState(() => {
    try {
      const stored = localStorage.getItem('bv-funguo-content');
      if (stored) {
        const sizeInMB = (new Blob([stored]).size / (1024 * 1024)).toFixed(2);
        if (parseFloat(sizeInMB) > 4) {
          setStorageWarning(true);
        }
      }
    } catch (e) {
      console.error('Storage check error:', e);
    }
  });

  const showError = (message: string) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 10000); // Keep visible for 10 seconds instead of 5
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        showError(`Invalid file type. Please upload a valid image file (JPEG, PNG, GIF, or WebP).`);
        e.target.value = ''; // Reset the input
        return;
      }

      // Check file size (limit to 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        showError(`Image is too large (${fileSizeMB}MB). Please use an image smaller than 5MB.`);
        e.target.value = ''; // Reset the input
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          updateContent({ [field]: reader.result as string } as any);
        } catch (error) {
          showError('Storage quota exceeded. Please try a smaller image or clear your browser storage.');
          console.error('Storage error:', error);
          e.target.value = ''; // Reset the input
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHeroImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        showError(`Invalid file type. Please upload a valid image file (JPEG, PNG, GIF, or WebP).`);
        e.target.value = ''; // Reset the input
        return;
      }

      // Check file size (limit to 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        showError(`Image is too large (${fileSizeMB}MB). Please use an image smaller than 5MB.`);
        e.target.value = ''; // Reset the input
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        try {
          updateContent({ hero: { ...content.hero, backgroundImage: reader.result as string } });
        } catch (error) {
          showError('Storage quota exceeded. Please try a smaller image or clear your browser storage.');
          console.error('Storage error:', error);
          e.target.value = ''; // Reset the input
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string, field: string) => {
    updateContent({ [field]: url } as any);
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Content saved successfully!');
    }, 500);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all content to defaults? This cannot be undone.')) {
      resetContent();
      alert('Content reset to defaults!');
    }
  };

  const handleClearStorage = () => {
    if (confirm('⚠️ WARNING: This will clear all uploaded images and reset content to defaults. This cannot be undone. Continue?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Admin Panel */}
          <motion.div
            className="fixed inset-4 md:inset-8 bg-white border border-slate-200 rounded-2xl z-[9999] flex flex-col overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 border-b border-blue-800 p-4 md:p-6 flex items-center justify-between">
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">Admin Panel</h2>
                <p className="text-blue-100 text-sm">Manage your website content</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearStorage}
                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  title="Clear All Storage (fixes quota errors)"
                >
                  <Database size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                  title="Reset to defaults"
                >
                  <RotateCcw size={20} />
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold shadow-lg"
                  disabled={saving}
                >
                  <Save size={20} />
                  <span className="hidden md:inline">{saving ? 'Saving...' : 'Save Changes'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200 p-4 overflow-x-auto bg-slate-50">
              <div className="flex gap-2 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm transition-all font-medium ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
              {/* Hero Section */}
              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Hero Section Content</h3>
                  
                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Title</label>
                    <input
                      type="text"
                      value={content.hero.title || ''}
                      onChange={(e) => updateContent({ hero: { ...content.hero, title: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Subtitle</label>
                    <input
                      type="text"
                      value={content.hero.subtitle || ''}
                      onChange={(e) => updateContent({ hero: { ...content.hero, subtitle: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Description</label>
                    <textarea
                      value={content.hero.description || ''}
                      onChange={(e) => updateContent({ hero: { ...content.hero, description: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 mb-2 text-sm font-medium">Primary CTA Text</label>
                      <input
                        type="text"
                        value={content.hero.ctaText || ''}
                        onChange={(e) => updateContent({ hero: { ...content.hero, ctaText: e.target.value } })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-2 text-sm font-medium">Secondary CTA Text</label>
                      <input
                        type="text"
                        value={content.hero.secondaryCtaText || ''}
                        onChange={(e) => updateContent({ hero: { ...content.hero, secondaryCtaText: e.target.value } })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-4 text-sm font-medium">Stats</label>
                    {content.hero.stats.map((stat, index) => (
                      <div key={index} className="grid md:grid-cols-2 gap-4 mb-3">
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => {
                            const newStats = [...content.hero.stats];
                            newStats[index] = { ...stat, value: e.target.value };
                            updateContent({ hero: { ...content.hero, stats: newStats } });
                          }}
                          placeholder="Value"
                          className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...content.hero.stats];
                            newStats[index] = { ...stat, label: e.target.value };
                            updateContent({ hero: { ...content.hero, stats: newStats } });
                          }}
                          placeholder="Label"
                          className="bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Services Content</h3>
                  
                  {content.services.map((service, index) => (
                    <div key={service.id} className="bg-white border border-slate-200 rounded-lg p-4 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-800 font-semibold">Service {index + 1}</h4>
                        <button
                          onClick={() => {
                            const newServices = content.services.filter((_, i) => i !== index);
                            updateContent({ services: newServices });
                          }}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Title</label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index] = { ...service, title: e.target.value };
                            updateContent({ services: newServices });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Description</label>
                        <textarea
                          value={service.description}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index] = { ...service, description: e.target.value };
                            updateContent({ services: newServices });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Icon Name (lucide-react)</label>
                        <input
                          type="text"
                          value={service.icon}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index] = { ...service, icon: e.target.value };
                            updateContent({ services: newServices });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          placeholder="e.g., Briefcase, TrendingUp"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Color</label>
                        <select
                          value={service.color}
                          onChange={(e) => {
                            const newServices = [...content.services];
                            newServices[index] = { ...service, color: e.target.value as 'emerald' | 'gold' };
                            updateContent({ services: newServices });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        >
                          <option value="emerald">Emerald</option>
                          <option value="gold">Gold</option>
                        </select>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      const newService = {
                        id: Date.now().toString(),
                        icon: 'Star',
                        title: 'New Service',
                        description: 'Description here',
                        color: 'emerald' as const,
                      };
                      updateContent({ services: [...content.services, newService] });
                    }}
                    className="w-full py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Plus size={20} />
                    Add Service
                  </button>
                </div>
              )}

              {/* Personal Loans */}
              {activeTab === 'personal-loans' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Consulting Approach</h3>

                  <div>
                    <label className="block text-slate-700 mb-4 text-sm font-medium">Approach Steps</label>
                    {content.personalLoanUses.map((use, index) => (
                      <div key={index} className="flex items-center gap-3 mb-3">
                        <input
                          type="text"
                          value={use.icon}
                          onChange={(e) => {
                            const newUses = [...content.personalLoanUses];
                            newUses[index] = { ...use, icon: e.target.value };
                            updateContent({ personalLoanUses: newUses });
                          }}
                          placeholder="Icon name"
                          className="w-32 bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                        <input
                          type="text"
                          value={use.text}
                          onChange={(e) => {
                            const newUses = [...content.personalLoanUses];
                            newUses[index] = { ...use, text: e.target.value };
                            updateContent({ personalLoanUses: newUses });
                          }}
                          placeholder="Text"
                          className="flex-1 bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-4 text-sm font-medium">Key Features</label>
                    {content.keyFeatures.map((feature, index) => (
                      <div key={index} className="mb-3">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => {
                            const newFeatures = [...content.keyFeatures];
                            newFeatures[index] = e.target.value;
                            updateContent({ keyFeatures: newFeatures });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonials */}
              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Testimonials</h3>

                  {content.testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="bg-white border border-slate-200 rounded-lg p-4 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-800 font-semibold">Testimonial {index + 1}</h4>
                        <button
                          onClick={() => {
                            const newTestimonials = content.testimonials.filter((_, i) => i !== index);
                            updateContent({ testimonials: newTestimonials });
                          }}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 mb-2 text-sm font-medium">Name</label>
                          <input
                            type="text"
                            value={testimonial.name}
                            onChange={(e) => {
                              const newTestimonials = [...content.testimonials];
                              newTestimonials[index] = { ...testimonial, name: e.target.value };
                              updateContent({ testimonials: newTestimonials });
                            }}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 mb-2 text-sm font-medium">Role</label>
                          <input
                            type="text"
                            value={testimonial.role}
                            onChange={(e) => {
                              const newTestimonials = [...content.testimonials];
                              newTestimonials[index] = { ...testimonial, role: e.target.value };
                              updateContent({ testimonials: newTestimonials });
                            }}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Content</label>
                        <textarea
                          value={testimonial.content}
                          onChange={(e) => {
                            const newTestimonials = [...content.testimonials];
                            newTestimonials[index] = { ...testimonial, content: e.target.value };
                            updateContent({ testimonials: newTestimonials });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Image (Max 5MB)</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              // Check file size (limit to 5MB)
                              const maxSize = 5 * 1024 * 1024;
                              if (file.size > maxSize) {
                                const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                                showError(`Image is too large (${fileSizeMB}MB). Please use an image smaller than 5MB.`);
                                e.target.value = '';
                                return;
                              }
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                try {
                                  const newTestimonials = [...content.testimonials];
                                  newTestimonials[index] = { ...testimonial, image: reader.result as string };
                                  updateContent({ testimonials: newTestimonials });
                                } catch (error) {
                                  showError('Storage quota exceeded. Please try a smaller image.');
                                  e.target.value = '';
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
                        />
                        {testimonial.image && (
                          <img src={testimonial.image} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded-lg" />
                        )}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      const newTestimonial = {
                        id: Date.now().toString(),
                        name: 'New Client',
                        role: 'Role',
                        content: 'Testimonial content here...',
                        rating: 5,
                        image: '',
                      };
                      updateContent({ testimonials: [...content.testimonials, newTestimonial] });
                    }}
                    className="w-full py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Plus size={20} />
                    Add Testimonial
                  </button>
                </div>
              )}

              {/* FAQs */}
              {activeTab === 'faqs' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Frequently Asked Questions</h3>

                  {content.faqs.map((faq, index) => (
                    <div key={faq.id} className="bg-white border border-slate-200 rounded-lg p-4 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-800 font-semibold">FAQ {index + 1}</h4>
                        <button
                          onClick={() => {
                            const newFaqs = content.faqs.filter((_, i) => i !== index);
                            updateContent({ faqs: newFaqs });
                          }}
                          className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 border border-red-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Question</label>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => {
                            const newFaqs = [...content.faqs];
                            newFaqs[index] = { ...faq, question: e.target.value };
                            updateContent({ faqs: newFaqs });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Answer</label>
                        <textarea
                          value={faq.answer}
                          onChange={(e) => {
                            const newFaqs = [...content.faqs];
                            newFaqs[index] = { ...faq, answer: e.target.value };
                            updateContent({ faqs: newFaqs });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      const newFaq = {
                        id: Date.now().toString(),
                        question: 'New question?',
                        answer: 'Answer here...',
                      };
                      updateContent({ faqs: [...content.faqs, newFaq] });
                    }}
                    className="w-full py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Plus size={20} />
                    Add FAQ
                  </button>
                </div>
              )}

              {/* About */}
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">About Section</h3>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Title</label>
                    <input
                      type="text"
                      value={content.about.title}
                      onChange={(e) => updateContent({ about: { ...content.about, title: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Description</label>
                    <textarea
                      value={content.about.description}
                      onChange={(e) => updateContent({ about: { ...content.about, description: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Mission</label>
                    <textarea
                      value={content.about.mission}
                      onChange={(e) => updateContent({ about: { ...content.about, mission: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Vision</label>
                    <textarea
                      value={content.about.vision}
                      onChange={(e) => updateContent({ about: { ...content.about, vision: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-24 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-4 text-sm font-medium">Values</label>
                    {content.about.values.map((value, index) => (
                      <div key={index} className="mb-3">
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => {
                            const newValues = [...content.about.values];
                            newValues[index] = e.target.value;
                            updateContent({ about: { ...content.about, values: newValues } });
                          }}
                          className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contact */}
              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <h3 className="text-slate-800 text-lg font-bold">Contact Information</h3>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Title</label>
                    <input
                      type="text"
                      value={content.contact.title}
                      onChange={(e) => updateContent({ contact: { ...content.contact, title: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Description</label>
                    <textarea
                      value={content.contact.description}
                      onChange={(e) => updateContent({ contact: { ...content.contact, description: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 h-20 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 mb-2 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        value={content.contact.email}
                        onChange={(e) => updateContent({ contact: { ...content.contact, email: e.target.value } })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-2 text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        value={content.contact.phone}
                        onChange={(e) => updateContent({ contact: { ...content.contact, phone: e.target.value } })}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Address</label>
                    <input
                      type="text"
                      value={content.contact.address}
                      onChange={(e) => updateContent({ contact: { ...content.contact, address: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2 text-sm font-medium">Office Hours</label>
                    <input
                      type="text"
                      value={content.contact.hours}
                      onChange={(e) => updateContent({ contact: { ...content.contact, hours: e.target.value } })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Images */}
              {activeTab === 'images' && (
                <div className="space-y-8">
                  <h3 className="text-slate-800 text-lg font-bold">All Website Images</h3>

                  {/* Logo */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-4">
                    <h4 className="text-slate-800 mb-4 flex items-center gap-2 font-semibold">
                      <span className="text-blue-600">🏢</span>
                      Company Logo (Header)
                    </h4>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'logo')}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                      />
                      {content.logo && (
                        <div className="bg-white p-4 rounded-lg inline-block border border-slate-200">
                          <img src={content.logo} alt="Logo Preview" className="h-12 w-auto object-contain" />
                        </div>
                      )}
                      <p className="text-slate-500 text-xs">💡 Max 5MB. Recommended: PNG with transparent background. Appears in the header.</p>
                    </div>
                  </div>

                  {/* Hero Background Image */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <h4 className="text-slate-800 mb-4 font-semibold">Hero Section Background</h4>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleHeroImageUpload}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                      />
                      {content.hero.backgroundImage && (
                        <img src={content.hero.backgroundImage} alt="Hero Background Preview" className="w-full h-48 object-cover rounded-lg border border-slate-200" />
                      )}
                      <p className="text-slate-500 text-xs">💡 Max 5MB. This appears as the hero section background.</p>
                    </div>
                  </div>

                  {/* Consulting Approach Images */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <h4 className="text-slate-800 mb-4 font-semibold">Consulting Approach Images</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Left Side Image</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'personalLoanImage1')}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                          />
                          {content.personalLoanImage1 && (
                            <img src={content.personalLoanImage1} alt="Consulting Image 1 Preview" className="w-full h-48 object-cover rounded-lg border border-slate-200" />
                          )}
                          <p className="text-slate-500 text-xs">💡 Max 5MB</p>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-700 mb-2 text-sm font-medium">Right Side Image</label>
                        <div className="space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(e, 'personalLoanImage2')}
                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                          />
                          {content.personalLoanImage2 && (
                            <img src={content.personalLoanImage2} alt="Consulting Image 2 Preview" className="w-full h-48 object-cover rounded-lg border border-slate-200" />
                          )}
                          <p className="text-slate-500 text-xs">💡 Max 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* About Section Image */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <h4 className="text-slate-800 mb-4 font-semibold">About Section Image</h4>
                    <div className="space-y-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const maxSize = 5 * 1024 * 1024;
                            if (file.size > maxSize) {
                              showError('Image is too large. Please use an image smaller than 5MB.');
                              e.target.value = '';
                              return;
                            }
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              try {
                                updateContent({ about: { ...content.about, image: reader.result as string } });
                              } catch (error) {
                                showError('Storage quota exceeded. Please try a smaller image.');
                                e.target.value = '';
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                      />
                      {content.about.image && (
                        <img src={content.about.image} alt="About Section Preview" className="w-full h-48 object-cover rounded-lg border border-slate-200" />
                      )}
                      <p className="text-slate-500 text-xs">💡 Max 5MB. This appears in the About section.</p>
                    </div>
                  </div>

                  {/* Testimonial Images */}
                  <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                    <h4 className="text-slate-800 mb-4 font-semibold">Testimonial Images</h4>
                    <div className="space-y-4">
                      {content.testimonials.map((testimonial, index) => (
                        <div key={testimonial.id}>
                          <label className="block text-slate-700 mb-2 text-sm font-medium">{testimonial.name} - {testimonial.role}</label>
                          <div className="space-y-2">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const maxSize = 5 * 1024 * 1024;
                                  if (file.size > maxSize) {
                                    showError('Image is too large. Please use an image smaller than 5MB.');
                                    e.target.value = '';
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    try {
                                      const newTestimonials = [...content.testimonials];
                                      newTestimonials[index] = { ...testimonial, image: reader.result as string };
                                      updateContent({ testimonials: newTestimonials });
                                    } catch (error) {
                                      showError('Storage quota exceeded. Please try a smaller image.');
                                      e.target.value = '';
                                    }
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                            />
                            {testimonial.image && (
                              <img src={testimonial.image} alt={`${testimonial.name} Preview`} className="w-20 h-20 object-cover rounded-lg border border-slate-200" />
                            )}
                          </div>
                        </div>
                      ))}
                      {content.testimonials.length === 0 && (
                        <p className="text-slate-500 text-sm">No testimonials yet. Add testimonials in the Testimonials tab first.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Error Popup */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] max-w-md w-full mx-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-red-500 border-2 border-red-600 rounded-xl shadow-2xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">Upload Error</h4>
                    <p className="text-white/90 text-sm leading-relaxed">{errorMessage}</p>
                  </div>
                  <button
                    onClick={() => setErrorMessage(null)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Storage Warning */}
          {storageWarning && (
            <motion.div
              className="fixed top-8 left-1/2 -translate-x-1/2 z-[10000] max-w-md w-full mx-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-yellow-500 border-2 border-yellow-600 rounded-xl shadow-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-1">Storage Warning</h4>
                  <p className="text-white/90 text-sm leading-relaxed">Your storage is almost full. Consider clearing some space to avoid issues.</p>
                </div>
                <button
                  onClick={() => setStorageWarning(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}