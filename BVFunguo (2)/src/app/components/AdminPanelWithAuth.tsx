import { useState } from 'react';
import { X, LogIn, Lock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AdminPanel } from './AdminPanel';

interface AdminPanelWithAuthProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminPanelWithAuth({ isOpen, onClose }: AdminPanelWithAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'BVFunguo@2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate a brief loading delay
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Invalid username or password');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setError('');
    onClose();
  };

  // If authenticated, show the admin panel
  if (isAuthenticated) {
    return <AdminPanel isOpen={isOpen} onClose={handleClose} />;
  }

  // Otherwise, show login screen
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Login Panel */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="bg-charcoal border border-emerald/30 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-emerald/20 to-gold/20 border-b border-white/10 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald/20 rounded-lg flex items-center justify-center">
                    <Lock className="text-emerald" size={20} />
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-semibold">Admin Login</h2>
                    <p className="text-white/60 text-sm">Enter your credentials to continue</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="p-6 space-y-6">
                {error && (
                  <motion.div
                    className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}

                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald/50 transition-colors"
                      placeholder="Enter username"
                      required
                      autoFocus
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white/80 text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-emerald/50 transition-colors"
                      placeholder="Enter password"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald to-gold text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Logging in...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={20} />
                      <span>Login to Admin Panel</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Footer */}
              <div className="bg-white/5 border-t border-white/10 p-4">
                <p className="text-white/40 text-xs text-center">
                  🔒 Secure admin access for BV Funguo website management
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
