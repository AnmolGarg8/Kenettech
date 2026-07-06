import { MonitorPlay, Globe, Shield, LayoutTemplate, Database, Cpu, Server } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

export function ServicesSection() {
  const services = [
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "AI & Computer Vision",
      description: "Custom vision systems for real-time detection, classification, and intelligent analysis across enterprise operations."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Data Intelligence",
      description: "End-to-end data platforms that transform raw enterprise data into actionable intelligence and predictive insights.",
      active: true
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Edge Computing",
      description: "Connected device ecosystems with edge AI for real-time processing in manufacturing, logistics, and infrastructure."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Solutions",
      description: "Enterprise-grade threat detection, zero-trust architecture, and compliance automation for modern organizations."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Architecture",
      description: "Scalable cloud-native applications and microservices infrastructure designed for performance and global reach."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ML Ops & AI Infrastructure",
      description: "Production-grade machine learning pipelines — model training, deployment, monitoring, and continuous retraining systems."
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Enterprise Software",
      description: "Custom internal tools, customer-facing platforms, and API ecosystems built for enterprise-scale workloads."
    }
  ];

  return (
    <section id="services" className="relative bg-bg-dark py-[120px] overflow-hidden">
      {/* Deep dark background with Dot Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Subtle Wavy SVG Line at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform">
        <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgba(255,255,255,0.02)"></path>
        </svg>
      </div>

      <div className="container px-4 relative z-10">
        
        {/* Section Header */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[60px]">
            <div className="max-w-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-[2px] w-8 bg-accent-purple"></div>
                <p className="text-accent-purple font-semibold text-sm uppercase tracking-wider">What We're Offering</p>
              </div>
              <h2 className="text-[48px] md:text-[56px] font-display font-extrabold leading-tight text-white tracking-tight">
                Dealing in all Professional IT Services
              </h2>
            </div>
            <div className="max-w-md text-gray-400 font-body mt-6 md:mt-0 pb-3">
              <p className="text-[16px] leading-[1.8]">We offer full-cycle software development services that meet varied business requirements from IT strategy consulting to the end-to-end development of scalable solutions.</p>
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 0.1} direction="up">
              <div 
                className={`p-[32px] flex flex-col items-center text-center transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border border-white/5 rounded-md cursor-pointer group ${
                  service.active 
                    ? 'bg-white -translate-y-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)]' 
                    : 'bg-transparent hover:bg-white hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]'
                }`}
              >
                {/* Icon Circle */}
                <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center mb-8 transition-colors duration-400 ${
                  service.active 
                    ? 'bg-gradient-premium text-white' 
                    : 'bg-accent-purple/10 text-accent-purple group-hover:bg-gradient-premium group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
                
                <h4 className={`text-[22px] font-display font-bold mb-4 transition-colors duration-400 ${
                  service.active ? 'text-[#1a1a2e]' : 'text-white group-hover:text-[#1a1a2e]'
                }`}>
                  {service.title}
                </h4>
                
                <p className={`text-[15px] leading-[1.8] transition-colors duration-400 ${
                  service.active ? 'text-[#64748b]' : 'text-gray-400 group-hover:text-[#64748b]'
                }`}>
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
