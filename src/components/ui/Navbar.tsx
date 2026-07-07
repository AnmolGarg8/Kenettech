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
        
        {/* New Professional Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ec4899] to-[#f97316] p-[1.5px] flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            <div className="w-full h-full bg-[#050505] rounded-[6.5px] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3v18" />
                <path d="M20 4 10 12l10 8" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[19px] font-display font-bold text-white tracking-tight leading-none mb-0.5">Kenet</span>
            <span className="text-[11px] font-medium text-white/50 tracking-widest leading-none uppercase">Technologies</span>
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
          <a href="#contact" className="relative px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white text-[13px] font-medium transition-all duration-300 group overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start a Project
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ec4899]/20 to-[#f97316]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <a href="#contact" className="bg-[#111] border border-white/10 text-white px-6 py-3 rounded-full text-center font-medium hover:bg-[#222] transition-colors">Start a Project</a>
          </div>
        </div>
      )}
    </nav>
  );
}
