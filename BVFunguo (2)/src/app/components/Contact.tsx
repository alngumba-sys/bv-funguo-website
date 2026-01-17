import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-teal-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 rounded-full mb-3 md:mb-4">
            <span className="text-orange-700 text-sm md:text-base font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-slate-900 mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">Contact Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            We are always happy to assist you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-slate-900 mb-4 md:mb-6 text-xl md:text-2xl font-bold">Get in Touch</h3>
              <p className="text-slate-600 mb-6 md:mb-8 text-sm md:text-base">
                Our team is ready to discuss your business needs and explore how we can support your financial goals.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <motion.div
                className="flex gap-3 md:gap-4"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-200 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="text-blue-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-900 mb-2 font-semibold">Address</h4>
                  <p className="text-slate-600">______________________________</p>
                  <p className="text-teal-600 text-sm mt-1 font-medium">Visit us during office hours</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-3 md:gap-4"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center flex-shrink-0 border border-orange-300 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="text-orange-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-900 mb-2 font-semibold">Phone</h4>
                  <p className="text-slate-600">______________________________</p>
                  <p className="text-orange-600 text-sm mt-1 font-medium">Call us anytime</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-3 md:gap-4"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center flex-shrink-0 border border-teal-300 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="text-teal-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-900 mb-2 font-semibold">Email</h4>
                  <p className="text-slate-600">______________________________</p>
                  <p className="text-teal-600 text-sm mt-1 font-medium">Send us a message</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-3 md:gap-4"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-300 shadow-md"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Clock className="text-blue-600" size={24} />
                </motion.div>
                <div>
                  <h4 className="text-slate-900 mb-2 font-semibold">Office Hours</h4>
                  <p className="text-slate-600">Monday – Friday</p>
                  <p className="text-slate-600">9:00 AM – 5:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-slate-900 mb-6 font-bold text-xl">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-700 mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-slate-700 mb-2 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Tell us about your financial needs..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 px-6 rounded-xl hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}