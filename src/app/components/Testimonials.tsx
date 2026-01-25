import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { useContent } from "../context/ContentContext";

export function Testimonials() {
  const { content } = useContent();

  return (
    <section id="testimonials" className="py-24 bg-white">
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
            <span className="text-blue-700 font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real stories from real people who have achieved their financial goals with BV Funguo
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Quote Icon */}
              <Quote className="text-blue-600 mb-4" size={40} />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-orange-500 fill-orange-500" size={18} />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-slate-900 font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50+", label: "Happy Clients" },
            { value: "95%", label: "Success Rate" },
            { value: "120+", label: "Projects Completed" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}