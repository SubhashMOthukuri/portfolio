
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { WorkSection } from "@/components/WorkSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CareerTimeline />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
