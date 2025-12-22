import { ArrowDown, Download, FolderOpen } from 'lucide-react';
import { Button } from './ui/button';
import TypingEffect from './TypingEffect';
import GlitchText from './GlitchText';
import profilePhoto from '@/assets/kushagra-photo.jpg';

const HeroSection = () => {
  const roles = [
    'Full Stack Developer',
    'Optimization Enthusiast', 
    'CS Student'
  ];

  // 1. Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Function to handle resume download
  const handleDownloadResume = () => {
    // This looks for 'resume.pdf' in your public folder
    const resumeUrl = '/resume.pdf'; 
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Kushagra_Resume.pdf'; // The name the user will see when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20 lg:pt-20">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Profile Image */}
            <div className="relative flex-shrink-0 order-first lg:order-last mt-24 lg:mt-20">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-20 blur-xl animate-pulse" />
              <div className="absolute -inset-6 border-2 border-primary/20 rotate-45 rounded-lg" />
              <div className="absolute -inset-8 border border-secondary/10 rotate-12 rounded-lg" />
              
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden holographic">
                <div className="absolute inset-0 rounded-full border-4 border-primary shadow-neon z-10 pointer-events-none" />
                <div className="absolute inset-1 rounded-full border border-secondary/50 z-10 pointer-events-none" />
                <img 
                  src={profilePhoto} 
                  alt="Kushagra Singh Kushwah" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
              </div>
              
              <div className="absolute -right-4 top-1/4 px-2 py-1 bg-card/80 border border-primary/30 rounded text-xs font-mono text-primary backdrop-blur-sm z-50">
                &lt;dev/&gt;
              </div>
              <div className="absolute -left-4 bottom-1/4 px-2 py-1 bg-card/80 border border-secondary/30 rounded text-xs font-mono text-secondary backdrop-blur-sm z-50">
                B.Tech CS
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left flex-1 relative z-20">
              <div className="mb-6 inline-block">
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="text-accent">$</span> ./initialize_portfolio.sh
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                <GlitchText 
                  text="Building Intelligent" 
                  className="text-primary neon-text block mb-2"
                />
                <span className="text-secondary neon-text-purple">Systems</span>
                <span className="text-primary"> & </span>
                <span className="text-accent">Optimization</span>
                <br />
                <span className="text-primary">Solutions</span>
              </h1>

              <div className="font-mono text-lg md:text-xl mb-8 h-8">
                <span className="text-muted-foreground">&gt; </span>
                <TypingEffect texts={roles} />
              </div>

              <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                Aspiring software developer with proven experience in{' '}
                <span className="text-primary">chatbot integration</span> and{' '}
                <span className="text-primary">portal development</span>. Currently working on{' '}
                <span className="text-secondary">route optimization</span> using Google OR-Tools with 
                ML-assisted methods.
              </p>

              {/* CTA Buttons - NOW FUNCTIONAL */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                
                {/* 1. Download Resume Button */}
                <Button 
                  variant="neon" 
                  size="lg" 
                  className="group"
                  onClick={handleDownloadResume}
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download_Resume
                </Button>

                {/* 2. View Projects Button */}
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="group"
                  onClick={() => scrollToSection('projects')}
                >
                  <FolderOpen className="w-5 h-5" />
                  View_Projects
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Scroll Indicator Arrow */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
          <div 
            onClick={() => scrollToSection('about')}
            className="text-primary/50 hover:text-primary transition-colors p-2"
          >
            <ArrowDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-secondary/30" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-secondary/30" />
    </section>
  );
};

export default HeroSection;