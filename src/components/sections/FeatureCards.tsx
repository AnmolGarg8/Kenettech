import { Reveal } from '../ui/Reveal';

export function FeatureCards() {
  const introCards = [
    {
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600",
      title: "AI-Powered Computer Vision Solutions",
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
      title: "Scalable Enterprise Data Platforms",
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43ce6ddf7335?auto=format&fit=crop&q=80&w=600",
      title: "Cloud-Native Architecture & IoT Edge Systems",
    }
  ];

  return (
    <div className="container px-4 relative z-30 -mt-24 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {introCards.map((card, idx) => (
          <Reveal key={idx} delay={idx * 0.2}>
            <div className="bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 relative group rounded-sm overflow-hidden flex flex-col cursor-pointer">
              
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Purple Icon Badge overlapping image and text */}
                <div className="absolute -bottom-7 right-8 w-14 h-14 bg-accent-purple rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(124,58,237,0.4)] z-10 border-4 border-white transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
                </div>
              </div>
              
              <div className="p-8 pt-10 flex-grow bg-white flex flex-col justify-center relative">
                {/* Purple accent line */}
                <div className="w-10 h-1 bg-accent-purple mb-4"></div>
                <h4 className="text-[20px] font-display font-bold text-gray-900 leading-snug">{card.title}</h4>
              </div>
              
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
