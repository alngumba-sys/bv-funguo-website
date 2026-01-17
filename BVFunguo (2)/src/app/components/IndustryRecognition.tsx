import { motion } from "motion/react";
import { Award, Shield, Trophy, Star, Building2, Users, CheckCircle2, Globe } from "lucide-react";

export function IndustryRecognition() {
  const awards = [
    {
      icon: Trophy,
      title: "Business Excellence Award",
      organization: "Kenya Institute of Financial Advisors",
      year: "2024",
      color: "from-gold/20 to-gold/5"
    },
    {
      icon: Award,
      title: "Client Excellence Award",
      organization: "Local Business Community",
      year: "2024",
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: Star,
      title: "Top Rated Service",
      organization: "Client Reviews",
      year: "2025",
      color: "from-teal-100 to-teal-50"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      organization: "East Africa Business Network",
      year: "2023",
      color: "from-emerald/20 to-emerald/5"
    }
  ];

  const partnerships = [
    { name: "Kenya Institute of Financial Advisors", role: "Member" },
    { name: "Nairobi Business Network", role: "Active Member" },
    { name: "SME Support Hub", role: "Partner" },
    { name: "Local Chamber of Commerce", role: "Member" }
  ];

  const metrics = [
    { 
      icon: Users, 
      value: "50+", 
      label: "Happy Clients",
      description: "Individuals & businesses served"
    },
    { 
      icon: Building2, 
      value: "3+", 
      label: "Years of Experience",
      description: "Helping clients succeed"
    },
    { 
      icon: Globe, 
      value: "Kenya", 
      label: "East Africa Focus",
      description: "Nairobi-based consulting"
    },
    { 
      icon: CheckCircle2, 
      value: "95%", 
      label: "Client Satisfaction",
      description: "Based on client feedback"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20"></div>
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
            <Trophy size={16} className="text-blue-600" />
            <span className="text-blue-700 text-sm font-semibold">Industry Recognition & Trust</span>
          </motion.div>
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            Recognized Excellence in<br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Financial Consulting</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Our commitment to excellence has earned us prestigious awards and trusted partnerships across East Africa.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Year Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {award.year}
              </div>

              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <award.icon className="text-white" size={32} />
              </div>
              <h3 className="text-slate-900 text-lg font-semibold mb-2 pr-12">{award.title}</h3>
              <p className="text-slate-600 text-sm">{award.organization}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8 md:p-10 mb-16 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-white border-2 border-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:border-blue-400 transition-all">
                  <metric.icon className="text-blue-600" size={32} />
                </div>
                <div className="text-orange-600 text-3xl md:text-4xl font-bold mb-2">{metric.value}</div>
                <h4 className="text-slate-900 font-semibold mb-1">{metric.label}</h4>
                <p className="text-slate-600 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-slate-900 text-2xl md:text-3xl mb-2 font-bold">Trusted Partnerships</h3>
            <p className="text-slate-600">Collaborating with leading organizations across East Africa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6 text-center hover:shadow-md hover:border-blue-300 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="w-12 h-12 bg-white border-2 border-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="text-blue-600" size={24} />
                </div>
                <h4 className="text-slate-900 font-semibold mb-1 text-sm">{partner.name}</h4>
                <p className="text-teal-600 text-xs font-semibold">{partner.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}