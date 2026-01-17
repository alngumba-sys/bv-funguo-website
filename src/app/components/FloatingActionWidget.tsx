import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Calendar, X, ArrowRight } from "lucide-react";

export function FloatingActionWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show widget after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickActions = [
    {
      icon: Calendar,
      label: "Book Consultation",
      description: "Schedule a free 30-min call",
      color: "from-orange-500 to-orange-600",
      textColor: "text-white"
    },
    {
      icon: Phone,
      label: "Call Now",
      description: "+254 700 123 456",
      color: "from-teal-500 to-teal-600",
      textColor: "text-white"
    },
    {
      icon: MessageCircle,
      label: "Live Chat",
      description: "Get instant answers",
      color: "from-blue-500 to-blue-600",
      textColor: "text-white"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="absolute bottom-20 right-0 bg-white border-2 border-blue-200 rounded-2xl shadow-2xl overflow-hidden mb-2"
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-teal-50">
                  <div>
                    <h3 className="text-slate-900 font-semibold">Need Help?</h3>
                    <p className="text-slate-600 text-xs">Choose an option below</p>
                  </div>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-2 space-y-2 w-72">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={index}
                      className={`w-full bg-gradient-to-r ${action.color} ${action.textColor} p-4 rounded-xl hover:scale-[1.02] transition-all group shadow-md`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <action.icon size={20} className={action.textColor} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className={`${action.textColor} font-semibold text-sm`}>{action.label}</p>
                          <p className="text-white/90 text-xs">{action.description}</p>
                        </div>
                        <ArrowRight size={16} className={`${action.textColor} group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-blue-50 to-teal-50">
                  <p className="text-slate-700 text-xs text-center">
                    <span className="text-teal-600 font-semibold">Available 24/7</span> • Response within 24 hours
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-300 transition-all group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-orange-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isExpanded ? (
                <X size={28} />
              ) : (
                <MessageCircle size={28} />
              )}
            </motion.div>

            {/* Badge */}
            {!isExpanded && (
              <motion.div
                className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                Free
              </motion.div>
            )}
          </motion.button>

          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Need help? Talk to us!
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-slate-900 rotate-45"></div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
