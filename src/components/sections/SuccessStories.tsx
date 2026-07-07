import { Reveal } from '../ui/Reveal';
import { Quote } from 'lucide-react';

export function SuccessStories() {
  const stories = [
    {
      category: "Financial Services",
      metric: "75%",
      metricLabel: "Automation",
      description: "Automated 75% of risk assessment reports using custom NLP models.",
      quote: "We saved 20 hours per week per analyst.",
      author: "Head of Risk Analytics"
    },
    {
      category: "E-commerce Logistics",
      metric: "90%",
      metricLabel: "Accuracy",
      description: "Achieved 90% accuracy in automated inventory forecasting.",
      quote: "The ROI was visible within the first three months.",
      author: "Operations Director"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 max-w-6xl mx-auto">
        <Reveal direction="up">
          <div className="mb-16">
            <h2 className="text-[40px] font-display font-bold text-white mb-4">Success Stories</h2>
            <p className="text-color-text-muted text-[16px]">
              Real results from real companies transforming with AI
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Cards */}
          <div className="flex flex-col space-y-6">
            {stories.map((story, idx) => (
              <Reveal key={idx} delay={idx * 0.2} direction="right">
                <div className="glass-panel rounded-2xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors duration-300 cursor-default">
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-[50px]"></div>
                  
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
                    <span className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">{story.category}</span>
                  </div>
                  
                  <div className="flex items-end space-x-4 mb-4">
                    <h3 className="text-[56px] font-display font-bold text-white leading-none tracking-tighter">{story.metric}</h3>
                    <p className="text-[16px] text-accent-blue font-medium mb-2">{story.metricLabel}</p>
                  </div>
                  
                  <p className="text-color-text-muted text-[15px] mb-8 max-w-md">
                    {story.description}
                  </p>
                  
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-start space-x-3">
                      <Quote className="w-5 h-5 text-white/20 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 italic text-[14px] mb-2">"{story.quote}"</p>
                        <p className="text-[12px] text-white/40 uppercase tracking-widest">— {story.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Abstract Graphic */}
          <Reveal direction="left" delay={0.4}>
            <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden glass-panel flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/20 via-bg-dark to-bg-dark"></div>
              
              {/* Abstract 3D-like shapes built with pure CSS and gradients */}
              <div className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-accent-blue to-accent-violet blur-[60px] opacity-40 animate-orb"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,100 C20,80 40,0 100,0" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
                  <path d="M0,100 C30,90 50,20 100,20" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
                  <path d="M0,100 C40,95 60,40 100,40" fill="none" stroke="url(#grad)" strokeWidth="0.5" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
