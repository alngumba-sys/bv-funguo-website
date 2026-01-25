import { Menu, X } from "lucide-react";
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }

    if (newCount >= 5) {
      onAdminAccess();
      setLogoClickCount(0);
      setClickTimeout(null);
    } else {
      const timeout = setTimeout(() => {
        setLogoClickCount(0);
      }, 2000);
      setClickTimeout(timeout);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            {content.logo ? (
              <img 
                src={content.logo} 
                alt="BV FUNGUO" 
                className="h-12 w-auto cursor-pointer" 
                onClick={handleLogoClick}
              />
            ) : (
              <div 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent cursor-pointer" 
                onClick={handleLogoClick}
              >
                BV FUNGUO
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => window.location.href = '#contact'}
            className="hidden md:block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-semibold"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-slate-200 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-slate-700 hover:text-blue-600 transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={() => {
                window.location.href = '#contact';
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
            >
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}