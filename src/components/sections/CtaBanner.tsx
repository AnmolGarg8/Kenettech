import { Reveal } from '../ui/Reveal';

export function CtaBanner() {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center min-h-[600px]">
      
      {/* Massive Abstract Glow Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-accent-blue/30 via-accent-violet/20 to-transparent blur-[100px] mix-blend-screen animate-orb opacity-70"></div>
        
        {/* Wireframe / Grid Graphic overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container px-4 relative z-10 text-center flex flex-col items-center">
        <Reveal direction="up" delay={0.1}>
          <h2 className="text-[40px] md:text-[64px] font-display font-bold text-white mb-6 max-w-4xl leading-tight tracking-tight">
            Ready to turn AI hype into <br/>
            <span className="text-gradient">business reality?</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-[16px] text-color-text-muted max-w-2xl mx-auto mb-10">
            Schedule a 20-minute strategy audit. We'll find three specific areas where AI can reduce your costs this quarter.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col items-center space-y-4">
            <a href="#audit" className="bg-gradient-premium text-white px-10 py-4 rounded-full text-[14px] font-bold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
              Claim Your Free Audit
            </a>
            <p className="text-[12px] text-white/30 uppercase tracking-widest">
              No commitment required • 100% Confidential • GDPR compliant
            </p>
          </div>
        </Reveal>
      </div>
      
    </section>
  );
}
