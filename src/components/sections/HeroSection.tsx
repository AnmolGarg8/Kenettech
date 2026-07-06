import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Experience Intelligent Software Solutions",
      titleLine1: "WE SEE WHAT",
      titleLine2: "OTHERS MISS",
      hasAccent: true,
      buttonText: "Explore Services",
      buttonLink: "#services",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
    },
    {
      subtitle: "AI • DATA • CLOUD • IOT",
      titleLine1: "INTELLIGENT",
      titleLine2: "SOLUTIONS",
      hasAccent: false,
      buttonText: "View Projects",
      buttonLink: "#projects",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=2000"
    },
    {
      subtitle: "NETRA — THE EYE OF INNOVATION",
      titleLine1: "PRECISION",
      titleLine2: "& INSIGHT",
      hasAccent: false,
      buttonText: "Get In Touch",
      buttonLink: "#contact",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full h-[800px] lg:h-[900px] overflow-hidden flex items-center bg-black">
      
      {/* Background Images with Crossfade and Ken Burns Zoom */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 8, ease: "linear" } }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url("${slides[currentSlide].image}")`, filter: 'brightness(0.6)' }}
        />
      </AnimatePresence>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] animate-orb"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-[#6c2bd9]/10 rounded-full blur-[120px] animate-orb" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Dramatic Diagonal Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{ 
          clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0 100%)',
          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.85), rgba(10, 10, 26, 0.9))'
        }}
      ></div>

      <div className="container px-4 relative z-20 flex justify-between items-center h-full pt-16">
        
        {/* Text Content */}
        <div className="max-w-3xl text-white pt-24 h-full relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute w-full"
            >
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="h-[2px] w-12 bg-white"></div>
                <p className="tracking-[0.2em] text-sm font-semibold uppercase">{slides[currentSlide].subtitle}</p>
                <div className="h-[2px] w-12 bg-white"></div>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[80px] lg:text-[100px] font-display font-black leading-[1.05] mb-12 uppercase tracking-tight"
              >
                {slides[currentSlide].titleLine1} <br/> 
                {slides[currentSlide].hasAccent ? (
                  <>
                    OTHERS <span className="font-black italic text-[#a78bfa]" style={{ textShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }}>MISS</span>
                  </>
                ) : (
                  <span className="font-black italic text-[#a78bfa]" style={{ textShadow: '0 0 40px rgba(124, 58, 237, 0.5)' }}>{slides[currentSlide].titleLine2}</span>
                )}
              </motion.h1>
              
              <motion.div 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center space-x-6 relative"
              >
                <a 
                  href={slides[currentSlide].buttonLink} 
                  className="inline-flex items-center space-x-3 bg-accent-purple hover:bg-[#6c2bd9] text-white font-display font-bold py-[18px] px-12 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(124,58,237,0.4)] relative overflow-hidden group"
                >
                  <span className="relative z-10">{slides[currentSlide].buttonText}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
                </a>
                
                {/* Decorative Doodle Arrow */}
                <svg className="w-16 h-16 text-white/40 absolute left-[300px] -bottom-8 transform -rotate-12" fill="none" viewBox="0 0 100 100" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10,80 Q40,90 70,50 T90,10 M70,10 L90,10 L90,30" />
                </svg>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls (Right side) */}
        <div className="hidden lg:flex flex-col items-center space-y-12 mr-8 z-30">
          
          <div className="flex flex-col space-y-4">
            <button 
              onClick={prevSlide}
              className="w-[52px] h-[52px] rounded-full border-2 border-white/30 bg-white/5 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-purple hover:bg-accent-purple/20 hover:scale-110"
              aria-label="Previous Slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-[52px] h-[52px] rounded-full border-2 border-white/30 bg-white/5 flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-purple hover:bg-accent-purple/20 hover:scale-110"
              aria-label="Next Slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Slide Indicators (Pills) */}
          <div className="flex flex-col space-y-3">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-500 rounded-full ${
                  currentSlide === idx 
                    ? 'w-1.5 h-[32px] bg-accent-purple shadow-[0_0_15px_rgba(124,58,237,0.6)]' 
                    : 'w-1.5 h-[10px] bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
