import { TrendingUp, Users, Briefcase, PiggyBank, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
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
      ...LucideIcons,
    };
    return icons[iconName] || Briefcase;
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Tailored Financial Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive financial consulting services designed to help individuals and businesses thrive
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.map((service, index) => {
            const ServiceIcon = getIconComponent(service.icon);
            return (
              <motion.div
                key={service.id}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6">
                  <div className={`inline-flex w-16 h-16 rounded-xl items-center justify-center ${
                    service.color === 'emerald' 
                      ? 'bg-gradient-to-br from-teal-500 to-teal-600' 
                      : 'bg-gradient-to-br from-blue-500 to-blue-600'
                  }`}>
                    <ServiceIcon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Financial Future?
          </h3>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and discover how we can help you achieve your financial goals
          </p>
          <button
            onClick={() => window.location.href = '#contact'}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all font-bold text-lg"
          >
            Schedule Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}