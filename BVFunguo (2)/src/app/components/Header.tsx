import { Menu, X, House, Info, Briefcase, ShieldCheck, Headphones } from "lucide-react";
import { useState } from "react";
import { useContent } from "../context/ContentContext";

interface HeaderProps {
  onAdminAccess: () => void;
}

export function Header({ onAdminAccess }: HeaderProps) {
  const { content } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { name: "Home", icon: House, href: "#home" },
    { name: "About Us", icon: Info, href: "#about" },
    { name: "Services", icon: Briefcase, href: "#services" },
    { name: "Eligibility", icon: ShieldCheck, href: "#eligibility" },
    { name: "Contact", icon: Headphones, href: "#contact" },
  ];

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    // Clear existing timeout
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }

    // If 5 clicks, open admin
    if (newCount >= 5) {
      onAdminAccess();
      setLogoClickCount(0);
      setClickTimeout(null);
    } else {
      // Reset count after 2 seconds
      const timeout = setTimeout(() => {
        setLogoClickCount(0);
      }, 2000);
      setClickTimeout(timeout);
    }
  };

  return (
    <>
      {/* Desktop/Tablet Header - Modern Clean */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-sm">
        <div className="w-full px-4 sm:px-6">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <div 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent cursor-pointer" 
                onClick={handleLogoClick}
              >
                BV FUNGUO
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors font-medium text-sm"
                >
                  <item.icon size={18} className="text-slate-600" />
                  {item.name}
                </a>
              ))}
            </nav>

            <button 
              onClick={() => window.location.href = '#contact'}
              className="hidden lg:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold text-sm"
            >
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Side Drawer */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 flex flex-col gap-4 border-t border-white/10 pt-4 animate-in slide-in-from-top">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon size={22} />
                  <span>{item.name}</span>
                </a>
              ))}
              <button 
                onClick={() => {
                  window.location.href = '#contact';
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all w-full mt-2 font-semibold"
              >
                Contact Us
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Mobile Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-[#052419] to-[#063025] backdrop-blur-lg border-t border-white/10">
        <nav className="flex justify-around items-center px-4 py-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center gap-1 text-white/60 hover:text-emerald transition-colors min-w-0"
            >
              <item.icon size={24} />
              <span className="text-xs">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}