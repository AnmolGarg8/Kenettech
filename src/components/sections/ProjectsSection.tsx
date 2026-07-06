import { Reveal } from '../ui/Reveal';

export function ProjectsSection() {
  const projects = [
    {
      title: "Vision AI for Manufacturing",
      category: "Computer Vision",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Global Supply Chain Analytics",
      category: "Data Intelligence",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart City Infrastructure",
      category: "IoT & Edge",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Zero-Trust Financial Cloud",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Predictive Maintenance System",
      category: "Machine Learning",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Enterprise Core Modernization",
      category: "Software Development",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-[120px] bg-white">
      <div className="container px-4 mb-[60px]">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-8 bg-accent-purple"></div>
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-wider">Our Completed Projects</p>
              </div>
              <h2 className="text-[48px] font-display font-extrabold leading-[1.1] text-[#0f172a]">
                Discover our latest <br/>innovative solutions
              </h2>
            </div>
            <div className="max-w-md text-[#64748b] font-body mt-6 md:mt-0">
              <p className="text-[16px] leading-[1.8]">Explore how we've helped global enterprises transform their operations, secure their infrastructure, and unlock new value through intelligent software.</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Tight Grid Layout */}
      <div className="w-full px-2 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1} direction="up">
              <div className="relative h-[380px] overflow-hidden group cursor-pointer bg-gray-100">
                
                {/* Image with zoom on hover */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[600ms] ease-out"
                />
                
                {/* Purple gradient overlay fades in on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(124,58,237,0.9)_0%,rgba(26,26,46,0.5)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                
                {/* Text Content fading in from bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10 flex flex-col justify-end h-full">
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-white text-[22px] font-display font-bold leading-tight">{project.title}</h4>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
