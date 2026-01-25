import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
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
            <span className="text-blue-700 font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your financial future? We're here to help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Talk</h3>
              <p className="text-lg text-slate-600">
                Our team is ready to discuss your financial goals and help you create a path to success.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Address</h4>
                  <p className="text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-teal-600" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Phone</h4>
                  <p className="text-slate-600">+254 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Email</h4>
                  <p className="text-slate-600">info@bvfunguo.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">Office Hours</h4>
                  <p className="text-slate-600">Monday – Friday</p>
                  <p className="text-slate-600">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-slate-700 mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Tell us about your financial needs..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold text-lg"
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