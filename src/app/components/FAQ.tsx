import { HelpCircle, Plus, Minus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useContent } from "../context/ContentContext";

export function FAQ() {
  const { content } = useContent();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 rounded-full mb-4">
            <span className="text-orange-700 font-semibold">FAQ</span>
          </div>
          <h2 className="text-slate-900 mb-4 font-bold">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {content.faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-blue-300 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 flex-1">
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HelpCircle className="text-blue-600" size={20} />
                  </motion.div>
                  <h3 className="text-slate-900 font-semibold text-sm">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus className="text-teal-600" size={20} />
                  ) : (
                    <Plus className="text-blue-600" size={20} />
                  )}
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 pt-2 bg-slate-50">
                  <p className="text-slate-600 pl-13 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-12 text-center bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-slate-900 mb-3 font-bold">Still have questions?</h3>
          <p className="text-slate-600 mb-6">
            Our team is always happy to help. Contact us for more information.
          </p>
          <motion.button 
            onClick={() => window.location.href = '#contact'}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3.5 rounded-xl hover:shadow-xl transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}