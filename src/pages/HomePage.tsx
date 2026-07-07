import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactFooterSection } from '../components/sections/ContactFooterSection';

export function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bg-dark">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactFooterSection />
    </div>
  );
}
