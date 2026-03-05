import { Folder, Github, Lock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Button } from './ui/button';

const projects = [
  {
    title: "Route Optimisation & Demand Prediction",
    description: "Engineered a Multi-Depot Vehicle Routing Problem (MDVRP) solver. Integrated OpenStreetMap RESTful APIs and conducted Data Analysis using Pandas to reduce fleet travel distance by 35% and boost route prediction accuracy by 15%.",
    tech: ["Python", "Google OR-Tools", "Scikit-Learn", "RESTful APIs", "Pandas"],
    github: "https://github.com/kushagrakushwah/Route-Optimisation-OR-Tools",
    featured: true,
  },
  {
    title: "GuardianAI – Driver Monitoring",
    description: "Built a real-time computer vision safety pipeline detecting driver drowsiness (EAR) and head-pose distraction with zero latency. Automated a forensic data logging architecture using Python CSV modules.",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy", "CSV", "Pygame"],
    github: "https://github.com/kushagrakushwah/Guardian_AI",
    featured: true,
  },
  {
    title: "ATMT Chatbot - NLP MVC Application",
    description: "Trained a custom NLP neural network using TensorFlow/Keras to classify user intents. Developed a full-stack interface communicating via RESTful APIs using Laravel PHP, reducing average wait times by 40%.",
    tech: ["Python", "TensorFlow/Keras", "Laravel (MVC)", "PHP", "MySQL", "AJAX"],
    github: "https://github.com/kushagrakushwah/CHATBOT-ATMT-Laravel-MVC-",
    featured: true,
  }
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
                </div>
              </div>
              
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
        
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