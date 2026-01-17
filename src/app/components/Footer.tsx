import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 pb-24 lg:pb-12">
      <div className="w-full px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-teal-400 mb-4 font-bold text-lg">BV Funguo</h3>
            <p className="text-slate-400 mb-4">
              Your Trusted Business Partner for professional financial consulting services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all">
                <Facebook className="text-slate-400 hover:text-white" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all">
                <Twitter className="text-slate-400 hover:text-white" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all">
                <Linkedin className="text-slate-400 hover:text-white" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all">
                <Instagram className="text-slate-400 hover:text-white" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#eligibility" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Eligibility
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Financial Planning</li>
              <li className="text-slate-400">Cash Flow Management</li>
              <li className="text-slate-400">Business Growth Strategy</li>
              <li className="text-slate-400">Cost Optimization</li>
              <li className="text-slate-400">Risk Management</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white mb-4 font-semibold">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Service Agreement
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              &copy; 2025 BV Funguo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}