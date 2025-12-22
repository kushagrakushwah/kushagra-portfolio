import { Folder, Github, ExternalLink, Lock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Employee Verification & Onboarding System',
    description: 'RBAC web portal for admin/employee workflows with real-time dashboards and secure authentication.',
    tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
    // UPDATED LINK
    github: 'https://github.com/kushagrakushwah/Employee_Verification_Report',
    live: 'https://empverifyreport.com',
    featured: true,
  },
  {
    title: 'Route Optimisation using OR-Tools',
    description: 'Modeling vehicle routing with multiple depots using CP-SAT solver and ML-assisted heuristics for optimization.',
    tech: ['Python', 'Google OR-Tools', 'Operations Research'],
    // UPDATED LINK
    github: 'https://github.com/kushagrakushwah/Route-Optimisation-OR-Tools',
    featured: true,
  },
  {
    title: 'Intelligent Support Chatbot (ATMT)',
    description: 'Customer support agent built on Laravel MVC with strict logic/UI separation and dynamic response rendering.',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    // UPDATED LINK
    github: 'https://github.com/kushagrakushwah/CHATBOT-ATMT-Laravel-MVC-',
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative bg-card/20">
      <div className="container mx-auto px-4">
        <SectionHeader number="04" title="Repository" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-muted/30 px-4 py-3 border-b border-primary/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-secondary" />
                  <span className="font-mono text-xs text-muted-foreground">
                    project_{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <Lock className="w-3 h-3 text-primary/30" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-lg text-primary mb-3 group-hover:text-secondary transition-colors leading-tight">
                  {project.title}
                </h3>
                
                <p className="font-body text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-accent bg-accent/10 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-mono text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
        
        {/* UPDATED BUTTON: Added onClick to open your GitHub profile */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://github.com/kushagrakushwah', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View_All_Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;