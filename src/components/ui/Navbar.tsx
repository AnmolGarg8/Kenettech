import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-[#000000]/90 backdrop-blur-lg border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container px-6 flex items-center justify-between">
        
        {/* Logo matching the image: Circle with orange gradient icon, text Kenet Technologies + orange dot */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center relative overflow-hidden flex-shrink-0">
             {/* Mimic the logo graphic */}
             <div className="absolute inset-[2px] bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-accent-orange rounded-full"></div>
             </div>
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-display font-bold text-white tracking-tight">Kenet Technologies</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange ml-1 flex-shrink-0"></span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex">
          <a href="#contact" className="bg-gradient-primary text-white px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 flex flex-col py-4 px-6 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-white text-lg font-medium">{link.name}</a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col">
            <a href="#contact" className="bg-gradient-primary text-white px-6 py-3 rounded-full text-center font-bold">Let's Talk</a>
          </div>
        </div>
      )}
    </nav>
  );
}
