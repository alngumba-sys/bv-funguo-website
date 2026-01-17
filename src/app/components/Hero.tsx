import { ArrowRight, TrendingUp, Users, Award, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";
import { useEffect, useState } from "react";
import heroImage from "figma:asset/0ce7a2fcbe0fae7dd0be0ad116daad98b9f72050.png";

// Animated counter hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export function Hero() {
  const { content } = useContent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whyChooseUs = [
    { 
      icon: TrendingUp, 
      title: 'Practical Solutions', 
      description: 'Simple, actionable financial guidance',
      detail: 'See improvements in your first month',
      color: 'from-teal-500 to-teal-600'
    },
  ];

  const quickWins = [
    { icon: Award, text: 'Free initial consultation', color: 'text-orange-600' },
    { icon: Users, text: 'Personalized financial plan', color: 'text-teal-600' },
  ];

  const certifications = [
    { name: 'Licensed', icon: Award },
    { name: 'Insured', icon: Award },
    { name: '3+ Years', icon: Award },
  ];

  // Animated counters
  const clientCount = useCounter(isVisible ? 50 : 0);
  const projectCount = useCounter(isVisible ? 120 : 0);
  const successRate = useCounter(isVisible ? 95 : 0);

  return (
    <section id="home" className="relative min-h-screen pt-16 pb-24 md:pb-32 lg:pt-18 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
      </div>

      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white"></div>
        <img 
          src={heroImage} 
          alt="Business consultation" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative w-full">
        <div className="max-w-7xl mx-auto">
          {/* Trust Bar - Above the fold */}
          <div className="w-full mb-8 lg:mb-12 px-4">
            <div className="bg-[#224C98] backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg px-[24px] py-[12px]">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">{clientCount}+</div>
                  <p className="text-white text-xs md:text-sm font-semibold font-[ABeeZee]">Happy Clients</p>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/40"></div>
                <div className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">{projectCount}+</div>
                  <p className="text-white text-xs md:text-sm font-semibold font-[ABeeZee]">Projects Delivered</p>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/40"></div>
                <div className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">{successRate}%</div>
                  <p className="text-white text-xs md:text-sm font-semibold font-[ABeeZee]">Success Rate</p>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/40"></div>
                <div className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">3+</div>
                  <p className="text-white text-xs md:text-sm font-semibold font-[ABeeZee]">Years Experience</p>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/40"></div>
                <div className="text-center">
                  <div className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">24h</div>
                  <p className="text-white text-xs md:text-sm font-semibold font-[ABeeZee]">Response Time</p>
                </div>
                <div className="hidden md:block h-8 w-px bg-white/40"></div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} className="fill-white text-white drop-shadow-lg" />
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs font-semibold">4.9/5 Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start px-4">
            {/* Left Content */}
            <motion.div 
              className="space-y-4 md:space-y-6 text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 px-4 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles size={16} className="text-blue-600" />
                <span className="text-[rgb(229,78,12)] text-sm font-semibold">Financial Guidance for Individuals & Small Businesses</span>
              </motion.div>

              <motion.h1 
                className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <strong className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-['ABeeZee']">Your Trusted</strong>{" "}
                <span className="text-slate-700 font-[Albert_Sans] font-bold">Business Partner</span>
              </motion.h1>
              
              <motion.p 
                className="text-slate-600 text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {content.hero.description}
              </motion.p>

              {/* Quick Wins */}
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {quickWins.map((win, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 bg-white border border-slate-200 p-3 rounded-xl hover:shadow-md hover:border-blue-200 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
                      <win.icon size={18} className={win.color} />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{win.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button 
                  onClick={() => window.location.href = '#contact'}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base group font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.hero.ctaText}
                  <ArrowRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  onClick={() => window.location.href = '#services'}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-sm md:text-base font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {content.hero.secondaryCtaText}
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {content.hero.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="text-center lg:text-left p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-blue-600 text-2xl md:text-3xl lg:text-4xl font-bold">{stat.value}</div>
                    <p className="text-slate-600 text-xs md:text-base mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Enhanced Why Choose Us */}
            <motion.div 
              className="space-y-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/70 backdrop-blur-lg border border-blue-100 rounded-2xl p-5 md:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-slate-900 text-lg md:text-xl font-bold">Why Choose BV Funguo</h3>
                  <div className="flex items-center gap-1">
                    <Users size={16} className="text-teal-600" />
                    <span className="text-slate-600 text-sm">{clientCount}+ Clients</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-blue-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <item.icon className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-slate-900 font-semibold mb-1">{item.title}</h4>
                          <p className="text-slate-600 text-sm mb-2">{item.description}</p>
                          <p className="text-blue-600 text-xs italic font-medium">{item.detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button 
                  onClick={() => window.location.href = '#contact'}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 md:py-3 rounded-xl hover:shadow-lg transition-all text-sm md:text-base mt-4 font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Free Consultation
                </motion.button>
              </div>

              {/* Testimonial Preview */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-teal-50 backdrop-blur-lg border border-blue-200 rounded-2xl p-5 md:p-6 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500"></div>
                  <div>
                    <h4 className="text-slate-900 font-semibold">Peter Ochieng</h4>
                    <p className="text-slate-600 text-sm">Individual Client</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic">
                  "BV Funguo helped me create a personal budget and savings plan. In 6 months, I've saved more than I did in 2 years. Highly recommend their services!"
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}