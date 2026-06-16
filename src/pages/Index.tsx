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
        <title>Kushagra Singh Kushwah | Security Engineer & AI Agent Developer</title>
        <meta 
          name="description" 
          content="Security Engineering Intern at IIT Bombay with expertise in Breach & Attack Simulation, LLM Agent Orchestration, and Systems Optimization. B.Tech CS student at VNIT Nagpur." 
        />
        <meta name="keywords" content="Kushagra Singh Kushwah, Security Engineer, AI Agents, Breach & Attack Simulation, LLM, Python, FastAPI, VNIT" />
        <meta property="og:title" content="Kushagra Singh Kushwah | Security & AI Portfolio" />
        <meta property="og:description" content="Building Secure Systems & Intelligent Agents" />
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
