import { Target, Award, Shield, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function About() {
  const achievements = [
    { label: "Years of Experience", value: "3+" },
    { label: "Happy Clients", value: "50+" },
    { label: "Projects Completed", value: "120+" },
    { label: "Success Rate", value: "95%" }
  ];

  const values = [
    { icon: Target, title: "Mission-Driven", description: "Supporting personal development and small business success" },
    { icon: Award, title: "Proven Excellence", description: "Delivering measurable results for our clients" },
    { icon: Shield, title: "Trusted Partner", description: "Built on integrity, transparency, and accountability" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-blue-700 font-semibold">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Trusted Financial Partner
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Empowering individuals and businesses across Kenya with expert financial guidance
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604783125462-37d81c7385e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBtZWV0aW5nJTIwY29uc3VsdGF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODU5OTE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BV FUNGUO Financial Consulting Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Building Financial Success Since 2021
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                BV Funguo is a dynamic financial consultancy dedicated to helping individuals and small businesses in Kenya achieve their financial goals. We combine expert knowledge with personalized service to deliver practical solutions that drive real results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're managing personal finances, planning for the future, or growing your business, our team provides the guidance and support you need to succeed.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-blue-300 hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}