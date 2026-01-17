import { CheckCircle, FileText, User } from "lucide-react";
import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";

export function Eligibility() {
  const { content } = useContent();

  const whoWeServe = [
    "Individuals seeking financial guidance",
    "Small and medium enterprises (SMEs)",
    "Startups planning for growth",
    "Family-owned businesses",
    "Freelancers and consultants",
  ];

  return (
    <section id="eligibility" className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-full mb-4">
            <span className="text-blue-700 font-semibold">{content.eligibility.title}</span>
          </div>
          <h2 className="text-slate-900 mb-4 font-bold">How We Partner With You</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our structured consulting approach ensures clarity and results at every stage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Who We Serve */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-blue-300 transition-all"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <User className="text-white" size={32} />
              </motion.div>
              <h3 className="text-slate-900 font-bold">Who We Serve</h3>
            </div>
            <div className="space-y-4">
              {whoWeServe.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Consulting Process */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FileText className="text-white" size={32} />
              </motion.div>
              <h3 className="text-slate-900 font-bold">Our Process</h3>
            </div>
            <div className="space-y-4">
              {content.eligibility.requirements.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-700 text-sm">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-slate-700 text-center">
            <span className="text-blue-700 font-semibold">Ready to get started?</span> Contact us today for a confidential consultation. 
            Our team will work with you to develop a customized plan that addresses your unique business needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}