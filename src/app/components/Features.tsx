import { CheckCircle, TrendingUp, Clock, Shield, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const features = [
  {
    icon: Target,
    title: "Strategic Focus",
    description: "Customized strategies tailored to your business goals",
  },
  {
    icon: Clock,
    title: "Efficient Delivery",
    description: "Timely execution and implementation support",
  },
  {
    icon: Shield,
    title: "Confidential & Secure",
    description: "Your business data is protected and confidential",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Work with seasoned financial consultants",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Focus on measurable outcomes and ROI",
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Support",
    description: "End-to-end guidance from analysis to execution",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1720700126947-a6ba1ebba73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwYXJ0bmVycyUyMGNlbGVicmF0aW5nJTIwc3VjY2Vzc3xlbnwxfHx8fDE3Njg1ODQzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="African business partners celebrating success"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
            />
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-full mb-4">
                <span className="text-blue-700 font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-slate-900 mb-4 font-bold">What Sets BV Funguo Apart</h2>
              <p className="text-slate-600">
                We're committed to delivering exceptional consulting services with a focus on 
                practical solutions, ethical standards, and long-term business success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-white" size={28} />
                  </motion.div>
                  <div>
                    <h4 className="text-slate-900 mb-1 font-semibold">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}