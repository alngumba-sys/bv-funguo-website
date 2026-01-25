import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useContent } from "../context/ContentContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const { content } = useContent();

  return (
    <section id="home" className="min-h-screen pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-sm text-blue-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Trusted Financial Partner in Kenya
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Your Trusted{" "}
              <span className="text-blue-600">
                Business Partner
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-600">
              {content.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <a 
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all"
              >
                Get Started
              </a>
              <a 
                href="#services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <p className="text-sm text-gray-600">Clients</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">120+</div>
                <p className="text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <p className="text-sm text-gray-600">Years</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={content.hero.backgroundImage} 
                alt="Financial Consulting" 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}