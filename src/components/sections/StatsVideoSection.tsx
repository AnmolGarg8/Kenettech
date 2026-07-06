import { Play } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Counter } from '../ui/Counter';

export function StatsVideoSection() {
  return (
    <section className="w-full relative bg-bg-dark text-white flex flex-col md:flex-row h-auto md:h-[600px] overflow-hidden group">
      
      {/* Background Image with purple gradient overlay and parallax feel */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,26,0.95)_0%,rgba(124,58,237,0.85)_100%)]"></div>
      </div>

      <div className="container relative z-10 flex flex-col md:flex-row h-full">
        
        {/* Left Side: Video Play */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-32 md:py-0">
          <Reveal>
            <div className="relative group cursor-pointer">
              {/* Outer Pulse Rings */}
              <div className="absolute inset-0 rounded-full bg-white/20 animate-[pulse-ring_2s_infinite]"></div>
              <div className="absolute inset-[-20px] rounded-full bg-white/10 animate-[pulse-ring_2s_infinite_0.5s]"></div>
              
              {/* Play Button */}
              <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-110">
                <Play className="w-8 h-8 text-accent-purple ml-2 fill-accent-purple" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Side: Stats */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end py-12 md:py-0 pr-0 md:pr-12">
          <div className="flex flex-col space-y-6 w-full max-w-sm">
            <Reveal direction="up" delay={0.2}>
              <div className="bg-accent-purple text-white p-10 rounded-sm shadow-[0_20px_50px_rgba(124,58,237,0.3)] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[36px] font-display font-extrabold mb-1">
                  <Counter end={150} suffix="+" />
                </h3>
                <p className="font-body text-white/80 text-[15px] font-medium tracking-wide">Satisfied Enterprise<br/>Clients</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <div className="bg-[#6c2bd9] text-white p-10 rounded-sm shadow-[0_20px_50px_rgba(108,43,217,0.3)] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-[36px] font-display font-extrabold mb-1">
                  <Counter end={500} suffix="+" />
                </h3>
                <p className="font-body text-white/80 text-[15px] font-medium tracking-wide">Projects Successfully<br/>Delivered</p>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
