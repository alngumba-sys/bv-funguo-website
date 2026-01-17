import { Target, Heart, Award, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const coreValues = [
  "Integrity",
  "Transparency",
  "Respect",
  "Accountability",
  "Community Development",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
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
            <span className="text-blue-700 font-semibold">About Us</span>
          </div>
          <h2 className="text-slate-900 mb-4 font-bold"><strong>Your Trusted</strong> Financial Partner</h2>
        </motion.div>

        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1604783125462-37d81c7385e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU5OTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="African business team collaboration"
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-slate-200"
            />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-slate-900 font-bold">Who We Are</h3>
            <p className="text-slate-600 leading-relaxed">
              BV Funguo is a growing financial consultancy startup dedicated to helping individuals and small businesses in East Africa achieve financial success. Whether you're managing personal finances, planning for your future, or growing your business, we provide personalized financial guidance and practical solutions tailored to your unique goals.
            </p>
            <div className="flex gap-4 pt-4">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-2xl px-6 py-4 flex-1 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-600 text-2xl mb-1 font-bold">3+</div>
                <p className="text-slate-600">Years Experience</p>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl px-6 py-4 flex-1 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-orange-600 text-2xl mb-1 font-bold">50+</div>
                <p className="text-slate-600">Happy Clients</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-md"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="text-white" size={40} />
            </motion.div>
            <h3 className="text-slate-900 mb-4 font-bold">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To support personal development and small business success by providing accessible, affordable,
              and transparent financial solutions.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-orange-300 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-md"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Award className="text-white" size={40} />
            </motion.div>
            <h3 className="text-slate-900 mb-4 font-bold">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To build financially inclusive communities where individuals and families grow with confidence.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-md"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Heart className="text-white" size={40} />
            </motion.div>
            <h3 className="text-slate-900 mb-4 font-bold">Our Core Values</h3>
            <ul className="space-y-2">
              {coreValues.map((value, index) => (
                <motion.li
                  key={index}
                  className="text-slate-600 flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  {value}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Additional Images Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwd29tZW4lMjBmaW5hbmNpYWwlMjBtZWV0aW5nJTIwbG9hbnN8ZW58MXx8fHwxNzY3MTk3MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business professionals in meeting"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover border border-slate-200"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1687422808248-f807f4ea2a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzcyUyMG93bmVyJTIwaGFwcHl8ZW58MXx8fHwxNzY3MTk2ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="African small business owner happy"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover border border-slate-200"
            />
          </motion.div>
        </motion.div>

        {/* Community Focus */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 border border-blue-200 rounded-2xl p-8 text-center shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="text-teal-600 mx-auto mb-4" size={56} />
          </motion.div>
          <h3 className="text-slate-900 mb-3 font-bold">Community Development</h3>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are more than a financial institution—we're partners in building stronger communities.
            Through our commitment to accountability and respect, we empower individuals and families
            to achieve financial independence and lasting success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}