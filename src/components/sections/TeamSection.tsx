import { Share2, Hash, Users, Pin, Camera } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function TeamSection() {
  const team = [
    {
      name: "David Reynolds",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Marcus Chen",
      role: "Lead Cloud Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Williams",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="py-[120px] bg-white">
      <div className="container px-4">
        
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center mb-[60px]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-8 bg-accent-purple"></div>
              <p className="text-accent-purple font-semibold text-sm uppercase tracking-wider">Our Expert People</p>
              <div className="h-[2px] w-8 bg-accent-purple"></div>
            </div>
            <h2 className="text-[48px] font-display font-extrabold text-[#0f172a] mb-4">
              Meet the brilliant minds behind <br/>our intelligence
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Reveal key={idx} delay={idx * 0.15} direction="up">
              <div className="group relative">
                
                {/* Image Container with Decorative Corners */}
                <div className="relative overflow-hidden bg-gray-100 rounded-sm mb-6">
                  
                  {/* Decorative corner brackets (top right) */}
                  <div className="absolute top-3 right-3 w-8 h-8 z-20 pointer-events-none transition-all duration-300 group-hover:top-2 group-hover:right-2">
                    <div className="absolute top-0 right-0 w-full h-[3px] bg-accent-purple"></div>
                    <div className="absolute top-0 right-0 w-[3px] h-full bg-accent-purple"></div>
                  </div>

                  <img 
                    src={member.image} 
                    alt={member.name} 
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle purple tint overlay */}
                  <div className="absolute inset-0 bg-accent-purple/0 group-hover:bg-accent-purple/20 transition-colors duration-500 z-10 pointer-events-none"></div>
                </div>

                {/* Info and Share Button */}
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[20px] font-display font-bold text-[#0f172a] group-hover:text-accent-purple transition-colors">{member.name}</h4>
                    <p className="text-[#64748b] text-[15px] mt-1">{member.role}</p>
                  </div>
                  
                  {/* Expandable Share Button */}
                  <div className="relative w-10 h-10 group/share">
                    <button className="absolute inset-0 z-20 w-10 h-10 bg-accent-purple text-white flex items-center justify-center rounded-full hover:bg-[#6c2bd9] transition-colors shadow-lg">
                      <Share2 className="w-4 h-4" />
                    </button>
                    
                    {/* Social Icons that slide out */}
                    <div className="absolute bottom-2 left-0 w-10 flex flex-col items-center space-y-2 pb-10 opacity-0 invisible group-hover/share:opacity-100 group-hover/share:visible group-hover/share:-translate-y-2 transition-all duration-300 z-10">
                      <a href="#" className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-accent-purple hover:bg-accent-purple hover:text-white transition-colors translate-y-4 group-hover/share:translate-y-0 duration-300 delay-[0ms]">
                        <Hash className="w-3.5 h-3.5" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-accent-purple hover:bg-accent-purple hover:text-white transition-colors translate-y-4 group-hover/share:translate-y-0 duration-300 delay-[50ms]">
                        <Users className="w-3.5 h-3.5" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-accent-purple hover:bg-accent-purple hover:text-white transition-colors translate-y-4 group-hover/share:translate-y-0 duration-300 delay-[100ms]">
                        <Pin className="w-3.5 h-3.5" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-accent-purple hover:bg-accent-purple hover:text-white transition-colors translate-y-4 group-hover/share:translate-y-0 duration-300 delay-[150ms]">
                        <Camera className="w-3.5 h-3.5" />
                      </a>
                    </div>
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
