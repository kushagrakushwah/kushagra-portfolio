import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kushagra Singh Kushwah | Full Stack Developer & Optimization Enthusiast</title>
        <meta 
          name="description" 
          content="Aspiring software developer with expertise in chatbot integration, portal development, and route optimization using Google OR-Tools. B.Tech CS student at VNIT Nagpur." 
        />
        <meta name="keywords" content="Kushagra Singh Kushwah, Full Stack Developer, Web Developer, OR-Tools, Optimization, Laravel, Python, VNIT" />
        <meta property="og:title" content="Kushagra Singh Kushwah | Portfolio" />
        <meta property="og:description" content="Building Intelligent Systems & Optimization Solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://kushagrakushwah.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Scanlines overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 scanlines opacity-30" />
        
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ServicesSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
