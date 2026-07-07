import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { Plus, Minus } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What does the membership include?",
      answer: "The membership gives you unlimited access to our AI tools, regular updates, priority support, and expert consultation to help integrate our solutions into your current workflow."
    },
    {
      question: "How do I get started with your services?",
      answer: "Simply book a discovery call with our team. We'll assess your enterprise needs and provide a strategic roadmap for implementation."
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes, our subscriptions are flexible. You can modify or cancel your plan at any time through your dashboard."
    },
    {
      question: "Do I need technical expertise to use your tools?",
      answer: "Not at all. We build human-centric interfaces that abstract away the technical complexity, making our AI tools intuitive for any team member."
    },
    {
      question: "How often do you release updates?",
      answer: "We release minor updates weekly and major feature additions quarterly, ensuring you always have access to the cutting-edge of AI technology."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#05050f]">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container px-4 max-w-3xl mx-auto">
        <Reveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-display font-bold text-white mb-4">Looking For Answers?</h2>
            <p className="text-color-text-muted text-[16px]">
              Wondering how it works? We answer the key <br className="hidden md:block"/> pre-start Questions—from process to pricing.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.1} direction="up">
                <div 
                  className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'bg-white/5' : 'bg-transparent hover:bg-white/5'
                  }`}
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span className="text-[16px] font-medium text-white">{faq.question}</span>
                    <div className="text-white/50 flex-shrink-0 ml-4">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[14px] text-color-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
