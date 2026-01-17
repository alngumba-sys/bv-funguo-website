import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../context/ContentContext";

export function Testimonials() {
  const { content } = useContent();

  const testimonials = [
    {
      name: "Client Testimonial",
      role: "Personal Development Loan",
      content: "BV Funguo helped me improve my skills through a personal development loan. The process was easy and the staff were very supportive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      role: "Small Business Owner",
      content: "My small business has grown because of the support I received from BV Funguo. They truly care about their clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      role: "Training Course",
      content: "I was able to pay for my training course and plan a better future. BV Funguo is a trusted financial partner.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      role: "Loan Recipient",
      content: "The loan process was simple and clearly explained. I felt respected and supported from the beginning.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
    },
    {
      name: "Client Testimonial",
      role: "Family Support",
      content: "Thanks to BV Funguo, I managed my family needs without stress. I highly recommend them.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-teal-100 border border-blue-200 rounded-full mb-3 md:mb-4">
            <span className="text-blue-700 text-sm md:text-base font-semibold">Client Testimonials</span>
          </div>
          <h2 className="text-slate-900 text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 font-bold">
            More success stories of What Our Clients Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Real stories from real people who have achieved their financial goals with BV Funguo
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.2 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1687422808311-a776f467a468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc21hbGwlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjcxMTExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="African small business owner"
            className="rounded-2xl shadow-2xl w-full h-64 md:h-80 lg:h-96 object-cover border border-white/10"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 hover:shadow-2xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <Quote className="text-teal-300" size={40} />
              </motion.div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed text-sm md:text-base">{testimonial.content}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Star className="text-orange-500 fill-orange-500" size={18} />
                  </motion.div>
                ))}
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />
                <div>
                  <h4 className="text-slate-900 text-sm md:text-base font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-600 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Testimonials Row */}
        {content.testimonials.length > 3 && (
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
            {content.testimonials.slice(3).map((testimonial, index) => (
              <motion.div
                key={index + 3}
                className="bg-charcoal/60 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 hover:border-emerald/30 transition-all hover:shadow-lg hover:shadow-emerald/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: (index + 3) * 0.5 }}
                >
                  <Quote className="text-emerald/30" size={40} />
                </motion.div>

                {/* Content */}
                <p className="text-white/80 mb-6 leading-relaxed text-sm md:text-base">{testimonial.content}</p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star className="text-gold fill-gold" size={18} />
                    </motion.div>
                  ))}
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-emerald/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <div>
                    <h4 className="text-white text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-white/60 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/10">
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50+", label: "Happy Clients" },
            { value: "95%", label: "Success Rate" },
            { value: "120+", label: "Projects Completed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-blue-600 text-2xl md:text-3xl mb-2 font-bold">{stat.value}</div>
              <p className="text-slate-600 text-xs md:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}