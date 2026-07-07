import { Reveal } from '../ui/Reveal';
import { Bot, User, ShieldCheck } from 'lucide-react';

export function WhyChooseUs() {
  const pillars = [
    {
      title: "Future-Proof Agents",
      description: "We build digital workers that handle repetitive data tasks so your team can focus on creativity.",
      icon: Bot
    },
    {
      title: "Human-Centric Design",
      description: "We don't just dump tech on you; we design interfaces that your employees will actually enjoy using.",
      icon: User
    },
    {
      title: "Privacy First",
      description: "Your data never leaves your infrastructure. We offer on-premise deployments for total peace of mind.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 max-w-5xl mx-auto text-center">
        <Reveal direction="up">
          <div className="mb-16">
            <h2 className="text-[32px] md:text-[40px] font-display font-bold text-white mb-4">Why Choose Us?</h2>
            <p className="text-color-text-muted text-[16px] max-w-lg mx-auto">
              Three pillars that set us apart in the AI consulting landscape
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={idx} delay={idx * 0.2} direction="up">
                <div className="flex flex-col items-center relative z-10 group">
                  <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center mb-6 group-hover:border-accent-blue/50 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-blue group-hover:to-accent-violet transition-all duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-color-text-muted text-[14px] leading-relaxed max-w-[280px]">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
