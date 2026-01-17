import { Building2, UserCheck, FileText, CheckSquare, HandshakeIcon, ArrowRight, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const steps = [
  {
    number: 1,
    icon: Building2,
    title: "Initial Consultation",
    description: "Contact us to discuss your business needs and financial challenges.",
    duration: "30 minutes",
    outcome: "Clear understanding of your goals",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 2,
    icon: UserCheck,
    title: "Discovery & Assessment",
    description: "We conduct a thorough analysis of your financial position and operations.",
    duration: "1-2 weeks",
    outcome: "Comprehensive financial audit",
    color: "from-teal-500 to-teal-600"
  },
  {
    number: 3,
    icon: FileText,
    title: "Strategy Development",
    description: "Receive a customized financial strategy aligned with your objectives.",
    duration: "2-3 weeks",
    outcome: "Custom strategic roadmap",
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 4,
    icon: CheckSquare,
    title: "Implementation Support",
    description: "We guide you through executing the strategic recommendations.",
    duration: "Ongoing",
    outcome: "Successful strategy execution",
    color: "from-orange-500 to-orange-600"
  },
  {
    number: 5,
    icon: HandshakeIcon,
    title: "Ongoing Partnership",
    description: "Continuous monitoring, review, and refinement as your business evolves.",
    duration: "Long-term",
    outcome: "Sustained growth & success",
    color: "from-teal-500 to-teal-600"
  },
];

export function HowItWorks() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-teal-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative w-full px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Sparkles size={18} className="text-blue-600" />
            <span className="text-blue-700 font-semibold">Our Proven Process</span>
          </motion.div>
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-6 font-bold">
            Your Journey to Financial Excellence
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From our first conversation to long-term partnership, we're with you every step of the way. 
            Our structured approach ensures clarity, collaboration, and measurable results.
          </p>
        </motion.div>

        {/* Desktop: Enhanced Timeline Layout */}
        <div className="hidden lg:block relative">
          {/* Animated Progress Line */}
          <motion.div 
            className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 mx-auto rounded-full"
            style={{ width: 'calc(100% - 100px)', marginLeft: '50px' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex justify-between items-start gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex-1 relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredStep(step.number)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Icon Container with Pulse */}
                <div className="relative mb-6 flex justify-center">
                  <motion.div 
                    className={`relative w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl flex items-center justify-center border-4 border-white z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="text-white" size={36} />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg border-2 border-slate-200">
                      {step.number}
                    </div>
                  </motion.div>
                </div>

                {/* Card Content */}
                <motion.div 
                  className={`bg-white border-2 rounded-2xl p-6 transition-all shadow-lg ${
                    hoveredStep === step.number 
                      ? 'border-blue-300 shadow-2xl' 
                      : 'border-slate-200'
                  }`}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className={`text-slate-900 text-xl font-bold mb-3 transition-colors ${hoveredStep === step.number ? 'text-blue-600' : ''}`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Meta Info */}
                  <div className="space-y-2 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs">
                      <Clock size={14} className="text-orange-500" />
                      <span className="text-slate-600">Duration:</span>
                      <span className="text-orange-600 font-semibold">{step.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 size={14} className="text-teal-500" />
                      <span className="text-slate-600">Outcome:</span>
                      <span className="text-teal-600 font-semibold">{step.outcome}</span>
                    </div>
                  </div>

                  {/* Hover Action */}
                  {hoveredStep === step.number && (
                    <motion.button
                      className="mt-4 w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 group/btn shadow-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  )}
                </motion.div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="absolute top-12 -right-3 z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    <ArrowRight className="text-blue-400 drop-shadow-md" size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet: 2-Column Grid */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredStep(step.number)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <motion.div 
                className={`bg-white border-2 rounded-2xl p-6 transition-all h-full shadow-lg ${
                  hoveredStep === step.number 
                    ? 'border-blue-300 shadow-2xl' 
                    : 'border-slate-200'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl flex items-center justify-center flex-shrink-0 relative`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <step.icon className="text-white" size={28} />
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-sm shadow-lg border-2 border-slate-200">
                      {step.number}
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-slate-900 text-lg font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs">
                    <Clock size={12} className="text-orange-500" />
                    <span className="text-slate-600">Duration:</span>
                    <span className="text-orange-600 font-semibold">{step.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2 size={12} className="text-teal-500" />
                    <span className="text-teal-600 font-semibold">{step.outcome}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex gap-4">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-2xl shadow-xl flex items-center justify-center flex-shrink-0 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <step.icon className="text-white" size={24} />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-2 border-slate-200">
                      {step.number}
                    </div>
                  </motion.div>
                  
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="w-0.5 h-full bg-gradient-to-b from-blue-300 to-teal-300 my-2 rounded-full"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </div>

                {/* Card Content */}
                <motion.div 
                  className="flex-1 bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-lg hover:border-blue-300 hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-slate-900 text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs">
                      <Clock size={12} className="text-orange-500" />
                      <span className="text-orange-600 font-semibold">{step.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 size={12} className="text-teal-500" />
                      <span className="text-teal-600 font-semibold">{step.outcome}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 border border-blue-200 rounded-3xl p-8 md:p-10 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-slate-900 text-2xl md:text-3xl mb-4 font-bold">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6 text-sm md:text-base">
              Book your free initial consultation today and discover how we can help transform your business finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => window.location.href = '#contact'}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
                <ArrowRight size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}