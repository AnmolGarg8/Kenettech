import { Reveal } from '../ui/Reveal';
import { GripVertical } from 'lucide-react';

export function TeamSection() {
  const team = [
    {
      name: "Ricky Smith",
      role: "Founder of Kenet",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Lorri Warf",
      role: "Director of Kenet",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Iva Ryan",
      role: "Manager of Kenet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Kathy Pacheco",
      role: "Admin of Kenet",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 max-w-6xl mx-auto">
        <Reveal direction="up">
          <div className="mb-12">
            <h2 className="text-[40px] font-display font-bold text-white mb-4">The Team</h2>
            <p className="text-color-text-muted text-[16px] max-w-md">
              A team of passionate professionals delivering expert, creative work—every time.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, idx) => (
            <Reveal key={idx} delay={idx * 0.15} direction="up">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer border border-white/5">
                
                {/* Desaturated Cinematic Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[40%] contrast-125 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Text Block at Bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-[18px] font-bold text-white mb-1 tracking-wide">{member.name}</h4>
                    <p className="text-[10px] text-accent-blue tracking-widest uppercase font-semibold">{member.role}</p>
                  </div>
                  <div className="text-white/30 group-hover:text-white transition-colors duration-300">
                    <GripVertical className="w-5 h-5" />
                  </div>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
