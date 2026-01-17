import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Target, ArrowRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SuccessStories() {
  const stories = [
    {
      company: "Nairobi Tech Solutions",
      industry: "Technology",
      challenge: "Struggling with cash flow and scaling issues",
      results: [
        { icon: TrendingUp, metric: "156%", label: "Revenue Growth" },
        { icon: DollarSign, metric: "KSh 8M", label: "Cost Savings" },
        { icon: Users, metric: "3x", label: "Team Expansion" }
      ],
      testimonial: "BV Funguo didn't just give us advice—they became part of our team. Their strategic insights helped us triple our revenue in just 18 months.",
      clientName: "James Omondi",
      clientTitle: "CEO & Founder",
      timeframe: "18 months",
      image: "https://images.unsplash.com/photo-1675383094481-3e2088da943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBzdWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODU4MzczM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "East Africa Retail Group",
      industry: "Retail",
      challenge: "Multiple locations with inconsistent profitability",
      results: [
        { icon: Target, metric: "92%", label: "Efficiency Gain" },
        { icon: DollarSign, metric: "KSh 15M", label: "Annual Savings" },
        { icon: TrendingUp, metric: "45%", label: "Profit Increase" }
      ],
      testimonial: "From financial chaos to crystal clear insights. BV Funguo's systems transformed how we manage our 12 locations.",
      clientName: "Grace Kimani",
      clientTitle: "Operations Director",
      timeframe: "12 months",
      image: "https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMHByb2Zlc3Npb25hbCUyMG1hbmFnZXJ8ZW58MXx8fHwxNzY4NTgzOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      company: "Savannah Agribusiness",
      industry: "Agriculture",
      challenge: "Needed funding strategy for major expansion",
      results: [
        { icon: DollarSign, metric: "KSh 50M", label: "Funding Secured" },
        { icon: Users, metric: "200+", label: "Jobs Created" },
        { icon: TrendingUp, metric: "3x", label: "Market Reach" }
      ],
      testimonial: "They helped us secure the funding we needed and gave us a roadmap for sustainable growth. Couldn't have done it without them.",
      clientName: "Samuel Mwangi",
      clientTitle: "Managing Partner",
      timeframe: "24 months",
      image: "https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3NtYW4lMjBleGVjdXRpdmUlMjBwYXJ0bmVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODU4NDIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 border border-orange-300 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Star size={16} className="text-orange-600" />
            <span className="text-orange-700 text-sm font-semibold">Real Results, Real Businesses</span>
          </motion.div>
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
            Success Stories That Speak<br />
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Louder Than Words</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            See how we've helped East African businesses achieve remarkable growth and financial stability.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="grid lg:grid-cols-2 gap-6 p-6 md:p-8">
                {/* Left Side - Content */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-slate-900 text-xl md:text-2xl font-bold mb-1">{story.company}</h3>
                        <p className="text-teal-600 text-sm font-semibold">{story.industry} • {story.timeframe} engagement</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-100">
                      <Target className="text-orange-600 flex-shrink-0 mt-0.5" size={18} />
                      <div>
                        <p className="text-slate-500 text-xs mb-1 font-semibold">Challenge</p>
                        <p className="text-slate-700 text-sm">{story.challenge}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3">
                    {story.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4 text-center hover:shadow-md transition-all"
                        whileHover={{ scale: 1.05 }}
                      >
                        <result.icon className="text-blue-600 mx-auto mb-2" size={20} />
                        <div className="text-orange-600 text-xl md:text-2xl font-bold mb-1">{result.metric}</div>
                        <p className="text-slate-600 text-xs">{result.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
                    <Quote className="absolute top-3 right-3 text-blue-200" size={32} />
                    <p className="text-slate-700 italic mb-4 text-sm md:text-base relative z-10">
                      "{story.testimonial}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-500"></div>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm">{story.clientName}</p>
                        <p className="text-slate-600 text-xs">{story.clientTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative rounded-xl overflow-hidden h-40 lg:h-[460px] min-h-[180px]">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.company}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${index === 0 || index === 2 ? 'object-top' : ''}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 border border-blue-200 rounded-2xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-slate-900 text-2xl md:text-3xl mb-3 font-bold">Your Success Story Starts Here</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of African businesses that have transformed their financial future with BV Funguo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => window.location.href = '#contact'}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}