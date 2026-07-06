import { useState, useEffect } from 'react';
import { Search, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full h-24 sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5' 
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="flex h-full w-full">
        <div className={`w-1/4 h-full flex items-center justify-center lg:justify-end lg:pr-12 transition-colors duration-300 ${scrolled ? 'bg-transparent' : 'bg-bg-dark'}`}>
          <div className="flex items-center space-x-2 text-white group cursor-pointer">
            {/* Premium Glow Logo */}
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-md group-hover:bg-accent-purple/40 transition-colors"></div>
              <div className="absolute w-8 h-8 border-2 border-accent-purple rotate-45 transform group-hover:rotate-90 transition-transform duration-500"></div>
              <div className="absolute w-8 h-8 border-2 border-accent-light -rotate-45 transform opacity-70 group-hover:0 transition-transform duration-500"></div>
            </div>
            <span className={`text-3xl font-display font-bold tracking-tight drop-shadow-md ${scrolled ? 'text-white' : 'text-white'}`}>kenet</span>
          </div>
        </div>
        
        <div className="w-3/4 h-full flex items-center justify-between px-8">
          <ul className={`flex items-center space-x-8 font-display font-medium ${scrolled ? 'text-gray-200' : 'text-gray-800'}`}>
            {navLinks.map((link, idx) => (
              <li key={idx} className="relative group cursor-pointer">
                <a href={link.href} className="hover:text-accent-purple transition-colors block py-2">
                  {link.name}
                </a>
                {/* Sliding underline effect */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-accent-purple transition-all duration-300 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-8">
            <div className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent-purple/10 transition-colors cursor-pointer">
              <Search className={`w-5 h-5 transition-colors ${scrolled ? 'text-gray-200' : 'text-gray-800'}`} />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-accent-purple/20 animate-pulse-ring"></div>
                <div className="relative w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center shadow-lg shadow-accent-purple/30 z-10 cursor-pointer hover:bg-[#6c2bd9] transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`text-xs font-body ${scrolled ? 'text-gray-400' : 'text-gray-500'}`}>Call Anytime</span>
                <span className={`font-display font-bold text-[16px] ${scrolled ? 'text-white' : 'text-gray-900'}`}>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
