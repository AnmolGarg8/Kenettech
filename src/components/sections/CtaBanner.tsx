import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function CtaBanner() {
  return (
    <section className="w-full bg-gradient-premium relative overflow-hidden py-[80px]">
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container px-4 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <p className="text-white/80 text-[16px] font-semibold tracking-wider uppercase mb-2">Ready to transform your enterprise?</p>
              <h2 className="text-[36px] font-display font-extrabold leading-tight">
                Let's discuss how Kenet Technologies <br className="hidden md:block" />can empower your business.
              </h2>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-3 bg-white text-[#1a1a2e] hover:text-accent-purple font-display font-bold py-[18px] px-10 text-[15px] uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] animate-float flex-shrink-0 rounded-sm group"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
