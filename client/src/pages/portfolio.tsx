import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground font-sans">
      <title>Alex Johnson - Full Stack Developer Portfolio</title>
      <meta name="description" content="Portfolio of Alex Johnson, a passionate Full Stack Developer with 5+ years of experience creating beautiful, functional web applications that solve real-world problems." />
      <meta property="og:title" content="Alex Johnson - Full Stack Developer Portfolio" />
      <meta property="og:description" content="Portfolio showcasing web development projects, skills, and contact information for Alex Johnson, Full Stack Developer." />
      <meta property="og:type" content="website" />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
