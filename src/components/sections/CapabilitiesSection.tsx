import { Reveal } from '../ui/Reveal';
import { Search, FileText, MessageSquare, Globe, Layers, Zap } from 'lucide-react';

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: "Smart Search",
      description: "Find answers across thousands of internal PDFs in seconds.",
      icon: Search
    },
    {
      title: "Auto-Scribe",
      description: "Transcribe and summarize board meetings into actionable tasks.",
      icon: FileText
    },
    {
      title: "Sentiment Vault",
      description: "Analyze customer feedback trends across all social channels in real-time.",
      icon: MessageSquare
    },
    {
      title: "AI Chat",
      description: "Deploy internal chatbots trained on your company knowledge base.",
      icon: Zap
    },
    {
      title: "Translation Hub",
      description: "Instant multi-language document translation with context preservation.",
      icon: Globe
    },
    {
      title: "Workflow Automation",
      description: "Connect AI agents to your existing tools for seamless automation.",
      icon: Layers
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#05050f]">
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container px-4 max-w-6xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-display font-bold text-white mb-4">Service Capabilities</h2>
            <p className="text-color-text-muted text-[16px] max-w-lg mx-auto">
              A comprehensive suite of AI-powered tools to supercharge your operations
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-default group border border-white/5 hover:border-white/10 h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon className="w-5 h-5 text-white/50 group-hover:text-accent-blue transition-colors duration-300" />
                    <h3 className="text-[16px] font-semibold text-white">{cap.title}</h3>
                  </div>
                  <p className="text-[14px] text-color-text-muted leading-relaxed">
                    {cap.description}
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
