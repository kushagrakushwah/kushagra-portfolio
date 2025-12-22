import { Globe, Route, MessageSquare } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    description: 'Custom portals, RBAC systems, and secure backend architecture using PHP/Laravel.',
    techs: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    icon: Route,
    title: 'Optimization Consulting',
    description: 'Solving VRP (Vehicle Routing Problems) and resource allocation using Google OR-Tools & Graph Theory.',
    techs: ['OR-Tools', 'Python', 'Graph Theory', 'ML'],
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Integration',
    description: 'Building intelligent customer support agents with dynamic message rendering and smart routing.',
    techs: ['NLP', 'Laravel', 'JavaScript', 'APIs'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader number="03" title="Capabilities" />
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-primary/20 rounded-lg p-6 hover:border-secondary hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/20 to-transparent rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
              </div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-neon-sm group-hover:border-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-xl text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-background border border-primary/20 rounded text-primary/70 group-hover:border-secondary/50 group-hover:text-secondary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
