import { TrendingUp, Users, Shield, Clock, Briefcase, Zap, GraduationCap, Heart, Home, CheckCircle, PiggyBank, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../context/ContentContext";
import * as LucideIcons from "lucide-react";

export function Services() {
  const { content } = useContent();

  // Map icon names to actual icon components
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, any> = {
      Briefcase,
      TrendingUp,
      Users,
      PiggyBank,
      BookOpen,
      GraduationCap,
      Heart,
      Home,
      ...LucideIcons,
    };
    return icons[iconName] || Briefcase;
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-full mb-3 md:mb-4">
            <span className="text-blue-700 text-sm md:text-base font-semibold">Our Core Services</span>
          </div>
          <h2 className="text-slate-900 mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">Financial Solutions Designed for Growing Businesses</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            We support growing businesses with tailored financial consulting services that address both immediate operational needs and long-term strategic goals
          </p>
        </motion.div>

        {/* Consulting Approach - Featured */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 via-white to-teal-50 border border-blue-200 rounded-2xl p-6 md:p-8 lg:p-12 mb-12 md:mb-16 shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <GraduationCap className="text-white" size={32} />
                </motion.div>
                <div>
                  <h3 className="text-slate-900 text-xl md:text-2xl lg:text-3xl font-bold">Our Consulting Approach</h3>
                  <p className="text-teal-600 text-sm md:text-base font-semibold">Practical solutions for sustainable growth</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
                Our comprehensive consulting process ensures we understand your business and deliver measurable results:
              </p>
              <div className="space-y-3 mb-6 md:mb-8">
                {content.personalLoanUses.map((use, index) => {
                  const UseIcon = getIconComponent(use.icon);
                  return (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 text-slate-700 text-sm md:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <UseIcon className="text-blue-600" size={20} />
                      </div>
                      <span className="font-medium">{use.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Add Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ImageWithFallback
                  src={content.personalLoanImage1}
                  alt="Business consulting team collaboration"
                  className="rounded-2xl w-full h-64 md:h-80 lg:h-96 object-cover object-top border border-slate-200 shadow-lg"
                />
              </motion.div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
              <h4 className="text-slate-900 mb-6 flex items-center gap-2 text-lg md:text-xl font-bold">
                <CheckCircle className="text-orange-500" size={24} />
                Why Choose BV Funguo
              </h4>
              <ul className="space-y-4">
                {content.keyFeatures.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="text-orange-600" size={20} />
                    </div>
                    <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                onClick={() => window.location.href = '#contact'}
                className="w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 md:py-3.5 rounded-xl hover:shadow-xl transition-all text-sm md:text-base font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Consultation
              </motion.button>

              {/* Add Image */}
              <motion.div
                className="mt-6 md:mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <ImageWithFallback
                  src={content.personalLoanImage2}
                  alt="Financial analysis and strategy"
                  className="rounded-2xl w-full h-64 md:h-80 lg:h-96 object-cover object-top border border-slate-200 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.services.map((service, index) => {
            const ServiceIcon = getIconComponent(service.icon);
            return (
              <motion.div
                key={service.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-2xl transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6 shadow-md ${
                    service.color === 'emerald' 
                      ? 'bg-gradient-to-br from-teal-500 to-teal-600' 
                      : 'bg-gradient-to-br from-blue-500 to-blue-600'
                  } transition-all`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ServiceIcon 
                    className="text-white" 
                    size={28} 
                  />
                </motion.div>
                <h3 className="text-slate-900 mb-3 text-lg md:text-xl lg:text-2xl font-bold">{service.title}</h3>
                <p className="text-slate-600 text-sm md:text-base">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}