import { Reveal } from '../ui/Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="container px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image (Square-ish with rounded corners as in image) */}
          <Reveal direction="right">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] lg:aspect-square group max-w-xl mx-auto lg:mx-0 w-full">
              {/* Finding a similar image of women working at a table */}
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-125"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Right: Content (Left aligned) */}
          <div className="flex flex-col max-w-2xl">
            <Reveal direction="left" delay={0.1}>
              <h2 className="text-[36px] md:text-[48px] font-display font-bold text-white mb-8 leading-tight">
                About Kenet Technologies
              </h2>
            </Reveal>

            {/* Bullet points */}
            <Reveal direction="left" delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">Thought Partnership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">No Wasted Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-accent-orange"></span>
                  <span className="text-[16px] text-white/90 font-medium">Transformation.</span>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <p className="text-[15px] md:text-[16px] text-color-text-muted mb-6 leading-relaxed">
                We've Done This Enough Times To Know You Need A Partner, Not A Vendor. Traditional Web Design Processes Force Your Into The Director's Chair, Relying On Beauty Over Performance. That's Not Good Design. You're The Subject Expert. We're The Design Expert. We Sit At Your Table, Download Your Goals, Understand Why It Matters And Develop A Plan To Get There.
              </p>
              <p className="text-[15px] md:text-[16px] text-color-text-muted mb-12 leading-relaxed">
                No Bottlenecks, Decision-Fatigue, Or Delays. Just Building The Right Thing For The Right People At The Right Time. That's An ROI Multiplier.
              </p>
            </Reveal>

            {/* Stats matching the image exactly: 3 rounded dark boxes */}
            <Reveal direction="left" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">650+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Open Studios</p>
                </div>
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">6,000+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Teachers Worldwide</p>
                </div>
                <div className="flex-1 bg-gradient-to-b from-[#111111] to-[#050505] border border-white/10 rounded-xl p-5 flex flex-col justify-center">
                  <h3 className="text-[28px] font-display font-medium text-gradient mb-1">100K+</h3>
                  <p className="text-[12px] text-white/70 font-medium">Active Members</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.5}>
              <a href="#more" className="inline-flex items-center justify-center bg-gradient-primary text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_30px_rgba(236,72,153,0.3)] w-fit">
                Read More Us
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
