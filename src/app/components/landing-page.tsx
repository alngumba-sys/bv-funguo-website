import image_8c9a9782f822a04113fd7bff4f68f1bc0ac7a2af from 'figma:asset/8c9a9782f822a04113fd7bff4f68f1bc0ac7a2af.png';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Sparkles, ChevronDown, Star, Zap, RefreshCw, Headphones, MapPin } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faCoins, faBullseye } from '@fortawesome/free-solid-svg-icons';
import heroImage from 'figma:asset/28f1f778bbc1447d32dcbbe5b9c62fedfee51997.png';
import bgPattern from 'figma:asset/7e24d04d9f20153ccbab44a64787ca18bdf87618.png';
import logo from 'figma:asset/e19de9b1a3313f261c0276da257bd631603f9688.png';
import logoWhite from 'figma:asset/8c9a9782f822a04113fd7bff4f68f1bc0ac7a2af.png';
import personalLady from 'figma:asset/8f3d0569c71679f821c83462402b0d85b52861f2.png';
import businessMan from 'figma:asset/a4019af60c4f099e72846873127e05c894396c76.png';
import bvLogo from 'figma:asset/210af9291135615983f7994acb37d288510159a6.png';
import bvImage from 'figma:asset/6775829204a3983889fcc6ff815b7b18b797b5b5.png';
import kenyaMap from 'figma:asset/948223ce2910e350c5059cb8723f6e3f0478107b.png';
import kenyaLandscape from 'figma:asset/8b81638bc9488c2d19d688de6b951c15b17dcada.png';
import kenyaFeatures from 'figma:asset/9371c240f5a918cbe034461f0a51db343e7fbd4d.png';
import jamesMwangi from 'figma:asset/a2abbe81b8673e3c389325148680fa66a73ad90b.png';
import graceAkinyi from 'figma:asset/ec5adec687ff53c11d19e1334af647c0f0b461dd.png';
import davidOmondi from 'figma:asset/b2b9c671edb25c544b25a994f44bfc91c7362f7f.png';
import footerLogo from 'figma:asset/73ab016723254abc69aaaf55d579936a0005fbc3.png';
import ctaImage from 'figma:asset/a4cbc3539b5ec86704ed551e884c157225ae1340.png';

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <ImageWithFallback 
                src={scrolled ? logo : logoWhite}
                alt="BV FUNGUO Logo"
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              <button onClick={() => scrollToSection('services')} className={`${scrolled ? 'text-[#3b82f6]' : 'text-[rgb(255,255,255)]'} hover:text-[#635BFF] transition-colors text-sm font-medium font-[Albert_Sans]`}>Services</button>
              <button onClick={() => scrollToSection('how-it-works')} className={`${scrolled ? 'text-[#3b82f6]' : 'text-[rgb(255,255,255)]'} hover:text-[#635BFF] transition-colors text-sm font-medium font-[Albert_Sans]`}>How it works</button>
              <button onClick={() => scrollToSection('testimonials')} className={`${scrolled ? 'text-[#3b82f6]' : 'text-[rgb(255,255,255)]'} hover:text-[#635BFF] transition-colors text-sm font-medium font-[Albert_Sans]`}>Testimonials</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#133179] text-[rgb(255,255,255)] px-6 py-2.5 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Get started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0F172A]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 text-[#64748B] hover:text-[#635BFF] font-medium">Services</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-3 text-[#64748B] hover:text-[#635BFF] font-medium">How it works</button>
                <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-3 text-[#64748B] hover:text-[#635BFF] font-medium">Testimonials</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full bg-gradient-to-r from-[#3b82f6] to-[#635BFF] text-white px-6 py-3 rounded-lg font-medium text-center"
                >
                  Get started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-2 sm:px-3 lg:px-4 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, hsla(213, 62%, 37%, 1) 0%, hsla(203, 89%, 63%, 1) 50%, hsla(0, 0%, 88%, 1) 100%)'
        }}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-400/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[rgb(255,255,255)] px-4 py-2 rounded-full text-sm font-medium leading-[0.9] border border-white/20">
                <span>Trusted by 50+ businesses in Kenya</span>
              </div>
              
              <h1 className="sm:text-6xl lg:text-7xl font-bold text-white leading-[0.75] text-[48px] font-[Mulish] relative z-20">
                Your financial success partner
              </h1>
              
              <div className="grid grid-cols-2 gap-4 max-w-2xl">
                <div className="flex items-start gap-3">
                  <Star className="text-white flex-shrink-0 mt-0.5 fill-white" size={20} />
                  <span className="text-white text-sm font-bold">Expert financial guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-white flex-shrink-0 mt-0.5 fill-white" size={20} />
                  <span className="text-white text-sm font-bold">Tailored solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-white flex-shrink-0 mt-0.5 fill-white" size={20} />
                  <span className="text-white text-sm font-bold">Local market expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-white flex-shrink-0 mt-0.5 fill-white" size={20} />
                  <span className="text-white text-sm font-bold">Proven track record</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-[#3b82f6] px-[22px] py-[7px] rounded-lg text-base font-medium hover:shadow-xl hover:shadow-white/30 transition-all"
                >
                  Get started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-12 pt-8 border-t border-[#E2E8F0]">
                <div>
                  <div className="text-4xl font-bold text-[#0582DC]">50+</div>
                  <div className="text-sm text-[#64748B] mt-1">Clients served</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0582DC]">120+</div>
                  <div className="text-sm text-[#64748B] mt-1">Projects completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#0582DC]">3+</div>
                  <div className="text-sm text-[#64748B] mt-1">Years experience</div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-24">
              {/* Background Pattern */}
              <div className="absolute inset-0 -left-[35%] -right-[15%] -top-[25%] -bottom-[25%] flex items-center justify-center">
                <ImageWithFallback 
                  src={bgPattern}
                  alt="Background"
                  className="w-[80%] h-auto opacity-30 drop-shadow-2xl -translate-y-[1cm]"
                />
              </div>
              {/* Hero Image */}
              <ImageWithFallback 
                src={heroImage}
                alt="Team"
                className="rounded-2xl w-full h-auto scale-[1.3] translate-y-[0.5cm] relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-[#94A3B8]" />
        </div>
      </section>

      {/* Quick Contact Bar - 2cm height with #B3E4FF background */}
      <section className="px-2 sm:px-3 lg:px-4 bg-[#B3E4FF]" style={{ height: '2cm' }}>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-8">
          <div className="text-[rgb(2,107,162)] font-bold text-lg font-normal text-[16px]">
            Get a free consultation today!
          </div>
          <form className="flex gap-4 items-center flex-1 max-w-4xl">
            <input 
              type="text"
              placeholder="Your name"
              className="px-[16px] py-[6px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] flex-1 text-[rgb(24,30,47)]"
            />
            <input 
              type="email"
              placeholder="Email address"
              className="px-[16px] py-[6px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] flex-1"
            />
            <input 
              type="tel"
              placeholder="Phone number"
              className="px-[16px] py-[6px] rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] flex-1"
            />
            <button 
              type="submit"
              className="bg-[#133179] text-white px-[24px] py-[6px] rounded-lg font-medium hover:bg-[#0f2559] transition-colors text-[14px]"
            >
              Quick Contact
            </button>
          </form>
        </div>
      </section>

      {/* BV FUNGUO Services Showcase */}
      <section className="py-20 px-2 sm:px-3 lg:px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-[5px] text-left text-[40px] mt-[0px] mr-[0px] ml-[0px] font-[Instrument_Sans]">
              <span className="text-[#343434]">BV FUNGUO - </span><span className="text-[#3b82f6] font-normal">always by your side!</span>
            </h2>
            <p className="text-xl text-[#64748B] text-left text-[16px] font-[Instrument_Sans]">
              We have the right financial plan for you
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Individual Plans Card */}
            <div className="relative bg-white rounded-3xl border-2 border-[#3b82f6] overflow-visible shadow-lg hover:shadow-2xl transition-all group">
              <div className="absolute top-6 right-6 z-10 text-right">
                <span className="inline-block bg-[#3b82f6] text-white px-4 py-1 rounded-md text-sm font-bold">
                  PERSONAL
                </span>
                <p className="text-[#0F172A] text-sm mt-1 font-medium">Individual Financial Plans</p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-2/3 h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-[#3b82f6] to-transparent opacity-20 rounded-3xl"></div>
              </div>

              {/* Lady Image */}
              <div className="absolute bottom-0 left-8 z-20" style={{ height: '110%' }}>
                <ImageWithFallback 
                  src={personalLady}
                  alt="Financial consultant"
                  className="h-full w-auto object-bottom"
                />
              </div>

              <div className="relative z-10 p-8 pt-24">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2 text-right font-[Albert_Sans] text-[32px]">
                  Smart budgeting and<br />wealth building
                </h3>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="mt-4 bg-[#3b82f6] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#2563eb] transition-colors shadow-lg ml-auto block"
                >
                  View Plans
                </button>
              </div>
            </div>

            {/* Business Plans Card */}
            <div className="relative bg-white rounded-3xl border-2 border-[#0D9488] overflow-visible shadow-lg hover:shadow-2xl transition-all group">
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-block bg-[#0D9488] text-white px-4 py-1 rounded-md text-sm font-bold">
                  BIZ
                </span>
                <p className="text-[#0F172A] text-sm mt-1 font-medium">Business Financial Plans</p>
              </div>
              
              <div className="absolute bottom-0 right-0 w-2/3 h-full">
                <div className="absolute inset-0 bg-gradient-to-l from-[#0D9488] to-transparent opacity-20 rounded-3xl"></div>
              </div>

              {/* Business Man Image */}
              <div className="absolute bottom-0 right-8 z-20" style={{ height: '110%' }}>
                <ImageWithFallback 
                  src={businessMan}
                  alt="Business consultant"
                  className="h-full w-auto object-bottom"
                />
              </div>

              <div className="relative z-10 p-8 pt-24">
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2 font-[Albert_Sans] text-[32px]">
                  Reliable, high-quality<br />financial guidance
                </h3>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="mt-4 bg-[#0D9488] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0f766e] transition-colors shadow-lg"
                >
                  View Plans
                </button>
              </div>
            </div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Zap className="text-[#343434]" size={28} />
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Quick Consultation</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <RefreshCw className="text-[#343434]" size={28} />
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Flexible Payment</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Headphones className="text-[#343434]" size={28} />
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">24/7 Client Support</h4>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <MapPin className="text-[#343434]" size={28} />
              </div>
              <h4 className="font-bold text-[#0F172A] mb-1">Local Kenyan Experts</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-2 sm:px-3 lg:px-4 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Community Logo */}
              <div className="mb-6">
                <ImageWithFallback 
                  src={bvLogo}
                  alt="BV Logo"
                  className="h-22 w-auto"
                />
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-[#343434] font-[Instrument_Sans] font-normal font-bold">Financial solutions</span> <span className="text-[#3b82f6] font-normal font-[Instrument_Sans]">for everyone</span>
              </h2>
              
              {/* Community Description */}
              <p className="text-[#64748B] text-[16px] leading-relaxed">
                At our core, we are a local, community-led organization that understands the unique financial journey of every person we serve. We offer a wide range of plans tailored to your specific needs—from personal budgeting and debt management to expert cash flow forecasting and business growth strategies.
                <br /><br />
                You'll always find a team ready to support you, providing the same level of outstanding service whether you are managing a household budget or leading a growing enterprise. We aren't just a service provider; we are your partner in building a thriving, sustainable financial future.
              </p>
            </div>

            {/* Right Column - BV Image */}
            <div className="flex justify-center lg:justify-end">
              <ImageWithFallback 
                src={bvImage}
                alt="BV Community"
                className="w-full max-w-xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-2 sm:px-3 lg:px-4 bg-gradient-to-br from-[#f8fafc] to-[#e0f2fe]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-[#343434] font-[Instrument_Sans]">How we work</span> <span className="text-[#3b82f6] font-normal">with you</span>
            </h2>
            <p className="text-xl text-[#64748B] text-[16px]">
              A simple, transparent process to get you on the path to financial success
            </p>
          </div>

          {/* Process Flow Container */}
          <div className="relative h-[400px] md:h-[320px]">
            {/* SVG Curved Path with Hexagons */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.4" />
                </linearGradient>
                {/* Gradient for fading numbers */}
                <linearGradient id="numberFade" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C0C0C0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0" />
                </linearGradient>
                {/* Shadow filter */}
                <filter id="hexagonShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                  <feOffset dx="0" dy="4" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Curved dashed line */}
              <path
                d="M 200 160 Q 450 80, 600 160 Q 750 240, 1000 160"
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              
              {/* Blue dashed line - parallel and close to gray line */}
              <path
                d="M 200 165 Q 450 85, 600 165 Q 750 245, 1000 165"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              
              {/* Hexagon 1 - Blue */}
              <text x="200" y="85" textAnchor="middle" fill="url(#numberFade)" fontSize="80" fontWeight="bold">1</text>
              <polygon 
                points="200,103 227.7,119 227.7,151 200,167 172.3,151 172.3,119"
                fill="white"
                stroke="white"
                strokeWidth="4"
                filter="url(#hexagonShadow)"
              />
              <foreignObject x="176" y="111" width="48" height="48">
                <div className="flex items-center justify-center w-full h-full">
                  <FontAwesomeIcon icon={faPhoneVolume} style={{ color: '#708090', fontSize: '24px' }} />
                </div>
              </foreignObject>
              
              {/* Hexagon 2 - Teal */}
              <text x="600" y="85" textAnchor="middle" fill="url(#numberFade)" fontSize="80" fontWeight="bold">2</text>
              <polygon 
                points="600,103 627.7,119 627.7,151 600,167 572.3,151 572.3,119"
                fill="white"
                stroke="white"
                strokeWidth="4"
                filter="url(#hexagonShadow)"
              />
              <foreignObject x="576" y="111" width="48" height="48">
                <div className="flex items-center justify-center w-full h-full">
                  <FontAwesomeIcon icon={faCoins} style={{ color: '#708090', fontSize: '24px' }} />
                </div>
              </foreignObject>
              
              {/* Hexagon 3 - Purple */}
              <text x="1000" y="85" textAnchor="middle" fill="url(#numberFade)" fontSize="80" fontWeight="bold">3</text>
              <polygon 
                points="1000,103 1027.7,119 1027.7,151 1000,167 972.3,119 972.3,119"
                fill="white"
                stroke="white"
                strokeWidth="4"
                filter="url(#hexagonShadow)"
              />
              <foreignObject x="976" y="111" width="48" height="48">
                <div className="flex items-center justify-center w-full h-full">
                  <FontAwesomeIcon icon={faBullseye} style={{ color: '#708090', fontSize: '24px' }} />
                </div>
              </foreignObject>
            </svg>

            {/* Step 1 - Book a consultation */}
            <div className="absolute left-[5%] md:left-[8%] top-[60%]">
              <div className="flex flex-col items-center max-w-[280px]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">Book a consultation</h3>
                <p className="text-[#64748B] text-center text-sm">Schedule a free initial consultation to discuss your financial goals and challenges</p>
              </div>
            </div>

            {/* Step 2 - Get your plan */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[60%]">
              <div className="flex flex-col items-center max-w-[280px]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">Get your plan</h3>
                <p className="text-[#64748B] text-center text-sm">Receive a customized financial plan tailored to your specific needs and goals</p>
              </div>
            </div>

            {/* Step 3 - Achieve your goals */}
            <div className="absolute right-[2%] md:right-[5%] top-[60%]">
              <div className="flex flex-col items-center max-w-[280px]">
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 text-center">Achieve your goals</h3>
                <p className="text-[#64748B] text-center text-sm">Execute your plan with our ongoing support and expert guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-2 sm:px-3 lg:px-4 bg-transparent relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Column 1 - Heading and Description */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-[#343434] font-[Instrument_Sans]">Built for the</span> <span className="text-[#3b82f6] font-normal">Kenyan market</span>
              </h2>
              <p className="text-xl text-[#64748B]">
                We understand the unique financial landscape in Kenya and provide solutions that work in our context
              </p>
            </div>

            {/* Column 2 - Feature Cards */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={32} className="text-[#3b82f6]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0F172A] font-[Inter]">Local expertise</h3>
                  <p className="text-[#64748B]">Deep understanding of Kenyan financial regulations and opportunities</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={32} className="text-[#0D9488]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0F172A] font-[Inter]">Proven track record</h3>
                  <p className="text-[#64748B]">3+ years helping Kenyans achieve their financial goals</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={32} className="text-[#f97316]" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#0F172A] font-[Inter]">Results-driven</h3>
                  <p className="text-[#64748B]">Our clients see measurable improvements in their financial health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Kenya Landscape Image */}
      <div className="w-full" style={{ marginTop: '-4cm' }}>
        <ImageWithFallback 
          src={kenyaLandscape}
          alt="Kenya Landscape"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Testimonials */}
      <section id="testimonials" className="py-[44px] px-[16px] sm:px-3 lg:px-4 relative z-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-[#343434] font-[Instrument_Sans]">Trusted by</span> <span className="text-[#3b82f6] font-normal">Kenyans</span>
            </h2>
            <p className="text-xl text-[#64748B] text-[16px]">
              See what our clients have to say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Mwangi",
                role: "Small Business Owner",
                content: "BV FUNGUO helped me understand my cash flow and grow my business by 40% in just one year. Their expertise is unmatched.",
                image: jamesMwangi,
                hasImage: true
              },
              {
                name: "Grace Akinyi",
                role: "Young Professional",
                content: "The personal budgeting advice I received helped me save for my first home. I couldn't have done it without their guidance.",
                image: graceAkinyi,
                hasImage: true
              },
              {
                name: "David Omondi",
                role: "Entrepreneur",
                content: "The business plan they helped me create secured funding from investors. They truly understand what it takes to succeed.",
                image: davidOmondi,
                hasImage: true
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] hover:shadow-lg hover:border-blue-200 transition-all">
                <p className="text-[#334155] mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  {testimonial.hasImage ? (
                    <ImageWithFallback 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-lg"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] via-[#635BFF] to-[#0D9488] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.image}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-[#0F172A]">{testimonial.name}</div>
                    <div className="text-sm text-[#64748B]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-2 sm:px-3 lg:px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-8">
            {/* Left - Image */}
            <div className="flex-shrink-0">
              <ImageWithFallback 
                src={ctaImage}
                alt="Financial growth"
                className="w-[403px] h-auto"
              />
            </div>

            {/* Right - Text Content */}
            <div className="flex flex-col">
              <h2 className="font-bold mb-6">
                <span className="text-[rgb(72,70,79)] text-[74px] block mt-4">Ready to</span>
                <span className="text-[#10b981] font-normal block text-[55px]">take control</span>
                <span className="text-[rgb(72,70,79)] text-[37px] block">of your finances?</span>
              </h2>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 bg-[rgb(17,160,62)] text-white px-[32px] py-[8px] rounded-lg text-base font-medium hover:shadow-lg transition-all w-fit"
              >
                Get started today
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-2 sm:px-3 lg:px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A] mb-[12px] font-[Instrument_Sans] text-left mt-[0px] mr-[0px] ml-[0px]">
              Get in touch
            </h2>
            <p className="text-xl text-[#64748B] text-left">
              Ready to start your financial journey? Let's talk
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8F0] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-gradient-to-br from-[#0F172A] to-[#1e293b] p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#3b82f6]/20 to-transparent rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 font-[Instrument_Sans]">Contact information</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Email</div>
                      <div className="text-lg">info@bvfunguo.com</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Phone</div>
                      <div className="text-lg">+254 XXX XXX XXX</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Location</div>
                      <div className="text-lg">Nairobi, Kenya</div>
                    </div>
                    <div>
                      <div className="text-sm text-[#94A3B8] mb-1">Business hours</div>
                      <div className="text-lg">Monday - Friday</div>
                      <div className="text-[#94A3B8]">9:00 AM - 5:00 PM EAT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-12 px-[48px] py-[22px]">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">Full name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">Service interest</label>
                    <select className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent">
                      <option>Personal finance</option>
                      <option>Business consulting</option>
                      <option>Both</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">Message</label>
                    <textarea 
                      className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:border-transparent resize-none"
                      rows={4}
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-[#133179] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(55,95,156)] border-t border-[#E2E8F0] py-12 px-2 sm:px-3 lg:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <ImageWithFallback 
                  src={image_8c9a9782f822a04113fd7bff4f68f1bc0ac7a2af}
                  alt="BV FUNGUO Logo"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-[rgb(255,255,255)] max-w-md">
                Your trusted financial consulting partner in Kenya. Helping individuals and businesses achieve financial success.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[rgb(255,255,255)] mb-4">Quick links</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection('services')} className="block text-[rgb(255,255,255)] hover:text-[#3b82f6] transition-colors text-[15px]">Services</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block text-[rgb(255,255,255)] hover:text-[#3b82f6] transition-colors text-[15px]">How it works</button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-[rgb(255,255,255)] hover:text-[#3b82f6] transition-colors text-[15px]">Testimonials</button>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[rgb(255,255,255)] mb-4">Contact</h4>
              <div className="space-y-3 text-[#64748B]">
                <p className="text-[rgb(255,255,255)] text-[15px]">info@bvfunguo.com</p>
                <p className="text-[rgb(255,255,255)] text-[15px]">+254 XXX XXX XXX</p>
                <p className="text-[rgb(254,254,254)] text-[15px]">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[#E2E8F0] pt-8 text-center">
            <p className="text-[rgb(255,255,255)] text-sm">© 2026 BV FUNGUO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}