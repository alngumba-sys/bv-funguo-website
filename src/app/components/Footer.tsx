import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">BV Funguo</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Your Trusted Business Partner for professional financial consulting services in Kenya.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                <Facebook className="text-slate-400" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                <Twitter className="text-slate-400" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                <Linkedin className="text-slate-400" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all">
                <Instagram className="text-slate-400" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Financial Planning</li>
              <li className="text-slate-400">Cash Flow Management</li>
              <li className="text-slate-400">Business Growth Strategy</li>
              <li className="text-slate-400">Risk Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Nairobi, Kenya</li>
              <li className="text-slate-400">+254 XXX XXX XXX</li>
              <li className="text-slate-400">info@bvfunguo.com</li>
              <li className="text-slate-400">Mon-Fri: 9AM - 5PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-center">
            &copy; 2025 BV Funguo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}