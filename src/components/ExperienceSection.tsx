import { Briefcase, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ExperienceSection = () => {
  const achievements = [
    'Developed a responsive chatbot using Python/Laravel MVC',
    'Deployed employee verification portal (empverifyreport.com)',
    'Cross-functional team collaboration for testing and deployment',
  ];

  return (
    <section id="experience" className="py-20 relative bg-card/20">
      <div className="container mx-auto px-4">
        <SectionHeader number="02" title="The_Log" />
        
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-lg overflow-hidden shadow-neon-sm">
            {/* Terminal Header */}
            <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">
                experience.log
              </span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Command line */}
              <div className="mb-6">
                <span className="text-accent">$</span>{' '}
                <span className="text-muted-foreground">cat work_history.json</span>
              </div>
              
              {/* JSON-style output */}
              <div className="bg-background/50 rounded-lg p-6 border border-primary/10">
                <div className="text-muted-foreground">{'{'}</div>
                
                <div className="pl-4 space-y-4">
                  {/* Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-secondary">"role":</span>
                    <span className="text-primary flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-secondary" />
                      "Android/Web Developer Intern"
                    </span>
                  </div>
                  
                  {/* Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-secondary">"company":</span>
                    <span className="text-primary">"Aarush GOC"</span>
                    <span className="text-muted-foreground text-xs">// Nagpur</span>
                  </div>
                  
                  {/* Timeline */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-secondary">"duration":</span>
                    <span className="text-accent flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      "May 2025 – June 2025"
                    </span>
                  </div>
                  
                  {/* Achievements */}
                  <div>
                    <span className="text-secondary">"achievements":</span>
                    <span className="text-muted-foreground"> [</span>
                  </div>
                  
                  <div className="pl-4 space-y-3">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 group-hover:text-secondary transition-colors" />
                        <span className="text-primary/90 group-hover:text-primary transition-colors">
                          "{achievement}"
                          {index < achievements.length - 1 && <span className="text-muted-foreground">,</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <span className="text-muted-foreground pl-0">]</span>
                  
                  {/* Links */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-2">
                    <span className="text-secondary">"deployed":</span>
                    <a 
                      href="https://empverifyreport.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-secondary transition-colors flex items-center gap-1 group"
                    >
                      "empverifyreport.com"
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
                
                <div className="text-muted-foreground mt-4">{'}'}</div>
              </div>
              
              {/* Blinking cursor */}
              <div className="mt-6">
                <span className="text-accent">$</span>{' '}
                <span className="animate-pulse text-primary">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
