import { Check, ArrowRight, Shield } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Counter } from '../ui/Counter';

export function AboutSection() {
  const features = [
    "Enterprise-grade security and compliance built-in",
    "Scalable cloud architecture for global operations",
    "Real-time analytics and predictive data modeling",
    "24/7 dedicated support and system monitoring"
  ];

  return (
    <section id="about" className="py-[120px] bg-[#fafafa] overflow-hidden">
      <div className="container px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Images & Badges */}
          <div className="w-full lg:w-1/2 relative">
            <Reveal direction="left">
              <div className="relative h-[600px] w-full">
                
                {/* Main Image */}
                <div className="w-[75%] h-[500px] rounded-lg overflow-hidden relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1000" 
                    alt="Team working" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-accent-purple/10 mix-blend-multiply"></div>
                </div>

                {/* Second Overlapping Image */}
                <div className="absolute bottom-0 right-0 w-[55%] h-[350px] rounded-lg overflow-hidden z-20 border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                    alt="Data analysis" 
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Stat Badge */}
                <div className="absolute top-[40%] right-[15%] z-30 bg-accent-purple text-white px-8 py-6 rounded-lg glow-purple-lg animate-float flex flex-col items-center justify-center min-w-[160px]">
                  <span className="text-4xl font-display font-black leading-none mb-1">
                    <Counter end={15} suffix="+" />
                  </span>
                  <span className="text-[13px] font-semibold tracking-wider uppercase text-white/80">Years Exp</span>
                </div>

                {/* Rotating Circular Badge */}
                <div className="absolute -top-12 -right-4 z-0 w-[120px] h-[120px]">
                  <div className="relative w-full h-full animate-[spin_20s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path id="textPath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                      <text className="text-[11px] font-bold tracking-[0.15em] uppercase fill-accent-purple">
                        <textPath href="#textPath" startOffset="0%">
                          AI SOLUTIONS • INNOVATION • DEVELOPMENT •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  {/* Center Icon */}
                  <div className="absolute inset-0 m-auto w-10 h-10 bg-accent-purple/10 rounded-full flex items-center justify-center text-accent-purple">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <Reveal direction="right">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-12 bg-accent-purple"></div>
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-wider">About Kenet Technologies</p>
              </div>
              
              <h2 className="text-[48px] font-display font-extrabold leading-[1.1] mb-6 text-[#0f172a]">
                We See What Others Miss in <span className="text-gradient">Digital Transformation</span>
              </h2>
              
              <p className="text-[#64748b] text-[17px] mb-8 leading-[1.8]">
                Kenet Technologies is a premier IT consulting and software development agency. We specialize in identifying hidden patterns, unseen threats, and untapped opportunities in your enterprise data and operations. Our "Netra" philosophy means we bring absolute clarity and precision to complex technological challenges.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-purple flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-[#334155]">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#services" className="inline-flex items-center space-x-3 bg-[#1a1a2e] hover:bg-accent-purple text-white font-display font-bold py-[18px] px-10 text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(124,58,237,0.3)] group rounded-sm">
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
