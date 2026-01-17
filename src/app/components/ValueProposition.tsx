import { motion } from "motion/react";
import { TrendingUp, Users, Target, Zap, Shield, Award, Clock, BarChart3, Briefcase, PiggyBank, LineChart, Calculator } from "lucide-react";

export function ValueProposition() {
  const coreValues = [
    {
      icon: TrendingUp,
      title: "Personal Touch",
      description: "Direct access to our team - no layers of bureaucracy",
      metric: "95% client satisfaction",
      color: "from-emerald/20 to-emerald/5"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Qualified consultants who care about your success",
      metric: "3+ years experience",
      color: "from-gold/20 to-gold/5"
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Every plan is custom-made for your specific needs",
      metric: "100% personalized",
      color: "from-emerald/20 to-emerald/5"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get answers and support when you need it",
      metric: "Same-day response",
      color: "from-gold/20 to-gold/5"
    }
  ];

  const specializations = [
    { icon: Briefcase, name: "Personal Finance", projects: "30+" },
    { icon: PiggyBank, name: "Cash Flow", projects: "25+" },
    { icon: LineChart, name: "Growth Planning", projects: "20+" },
    { icon: Calculator, name: "Budgeting", projects: "35+" },
    { icon: Shield, name: "Risk Management", projects: "15+" },
    { icon: BarChart3, name: "Financial Reports", projects: "40+" }
  ];

  const guarantees = [
    { icon: Clock, text: "24-hour response time", subtext: "On all client inquiries" },
    { icon: Award, text: "Results guarantee", subtext: "Or we work until you see them" },
    { icon: Shield, text: "Confidentiality assured", subtext: "Your data is protected" }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Award size={16} className="text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">What Sets Us Apart</span>
          </motion.div>
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            More Than Just Consulting—<br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">We're Your Growth Partners</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            We combine deep financial expertise with a genuine commitment to your success. 
            Here's what makes BV Funguo the trusted choice for growing businesses across East Africa.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm mb-3">{value.description}</p>
              <div className="flex items-center gap-2 pt-3 border-t border-slate-200">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-teal-600 text-xs font-semibold">{value.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8 md:p-10 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-slate-900 text-2xl md:text-3xl mb-2 font-bold">Our Areas of Expertise</h3>
            <p className="text-slate-600">Comprehensive financial solutions across all business domains</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-xl p-4 text-center transition-all group cursor-pointer hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <spec.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-slate-900 text-sm font-semibold mb-1">{spec.name}</h4>
                <p className="text-orange-600 text-xs font-semibold">{spec.projects} projects</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-slate-900 text-2xl md:text-3xl mb-2 font-bold">Our Commitment to You</h3>
            <p className="text-slate-600">We stand behind our work with these guarantees</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <guarantee.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">{guarantee.text}</h4>
                  <p className="text-slate-600 text-sm">{guarantee.subtext}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-slate-700 mb-6 text-lg font-medium">
            Ready to experience the BV Funguo difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = '#contact'}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}