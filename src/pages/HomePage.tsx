import { HeroSection } from '../components/sections/HeroSection';
import { FeatureCards } from '../components/sections/FeatureCards';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { StatsVideoSection } from '../components/sections/StatsVideoSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { TeamSection } from '../components/sections/TeamSection';
import { CtaBanner } from '../components/sections/CtaBanner';

export function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <ServicesSection />
      <StatsVideoSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <CtaBanner />
    </div>
  );
}
