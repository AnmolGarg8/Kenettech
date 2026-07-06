import { Star } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Kenet Technologies completely transformed our enterprise data architecture. Their 'Netra' approach to identifying hidden patterns in our supply chain saved us millions in the first year alone.",
      name: "Michael Chen",
      role: "CTO, Global Logistics Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "The computer vision solution they deployed for our manufacturing line reduced defect rates by 94%. They don't just write code; they engineer intelligent systems that solve real business problems.",
      name: "Sarah Jenkins",
      role: "VP of Operations, Nexus Manufacturing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const clientLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  ];

  return (
    <>
      {/* Client Logos Marquee */}
      <div className="py-[60px] bg-[#f8f9fa] border-y border-[#e5e7eb] overflow-hidden flex relative">
        <div className="flex animate-marquee whitespace-nowrap min-w-full">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="mx-16 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0">
              <img src={logo} alt="Client Logo" className="h-8 object-contain pointer-events-none" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full absolute left-full top-0 py-[60px]">
          {clientLogos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="mx-16 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0">
              <img src={logo} alt="Client Logo" className="h-8 object-contain pointer-events-none" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-[120px] bg-white relative overflow-hidden">
        <div className="container px-4">
          <Reveal direction="up">
            <div className="flex flex-col items-center text-center mb-[60px]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-8 bg-accent-purple"></div>
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-wider">Client Testimonials</p>
                <div className="h-[2px] w-8 bg-accent-purple"></div>
              </div>
              <h2 className="text-[48px] font-display font-extrabold text-[#0f172a] mb-4">
                What our clients say about us
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Reveal key={idx} delay={idx * 0.2} direction="up">
                <div className="bg-white rounded-lg p-10 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      loading="lazy"
                      className="w-16 h-16 rounded-full border-[3px] border-accent-purple object-cover"
                    />
                    <div>
                      <h4 className="text-[18px] font-display font-bold text-[#0f172a]">{testimonial.name}</h4>
                      <p className="text-[13px] text-accent-purple font-semibold tracking-wide uppercase mt-1">{testimonial.role}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar style divider */}
                  <div className="w-full h-1 flex rounded-full overflow-hidden mb-6">
                    <div className="w-[60%] bg-accent-purple"></div>
                    <div className="w-[40%] bg-gray-200"></div>
                  </div>

                  <p className="text-[#64748b] text-[15px] italic leading-[1.8]">
                    "{testimonial.text}"
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
