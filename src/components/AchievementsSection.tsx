import { Trophy, Shield, Users, Wrench } from 'lucide-react';
import SectionHeader from './SectionHeader';

const achievements = [
  {
    icon: Trophy,
    title: 'Grand Finalist',
    subtitle: 'Meta PyTorch Hackathon',
    description: 'Selected from 52,000+ developers to present EnvAudit at the Bangalore finale.',
    tags: ['Meta', 'Hugging Face', 'AI Safety'],
  },
  {
    icon: Shield,
    title: 'Vice President & Core Member',
    subtitle: 'SHELL Cyber Security Club',
    description: 'Mentoring a blockchain research project and spearheaded a Maharashtra-level CTF.',
    tags: ['Leadership', 'CTF', 'Web3 Security'],
  },
  {
    icon: Users,
    title: 'TnP Coordinator',
    subtitle: 'CSE Branch, VNIT Nagpur',
    description: 'Coordinating placement drives and managing corporate relations for the CSE cohort.',
    tags: ['Placements', 'Corporate Relations'],
  },
  {
    icon: Wrench,
    title: 'Maintenance Councillor',
    subtitle: 'First-Year Hostel, VNIT',
    description: 'Managed infrastructure maintenance workflows and student grievance resolutions.',
    tags: ['Management', 'Operations'],
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader number="03.5" title="Honors_&_Positions" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={item.title}
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
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-neon-sm group-hover:border-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-lg text-primary mb-1 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <h4 className="font-mono text-xs text-accent mb-4">
                  {item.subtitle}
                </h4>
                
                {/* Description */}
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-background border border-primary/20 rounded text-primary/70 group-hover:border-secondary/50 group-hover:text-secondary transition-colors"
                    >
                      {tag}
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

export default AchievementsSection;
