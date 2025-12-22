import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionHeader from './SectionHeader';

const educationData = [
  {
    year: '2024 – 2028',
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Visvesvaraya National Institute of Technology (VNIT)',
    location: 'Nagpur',
  },
  {
    year: '2024',
    title: 'Class XII',
    institution: 'Kendriya Vidyalaya',
    location: 'Kathmandu, Nepal',
  },
  {
    year: '2022',
    title: 'Class X',
    institution: 'Kendriya Vidyalaya No.3',
    location: 'Bhopal',
  },
];

const skills = [
  'Problem-Solving',
  'Team Collaboration', 
  'Time Management',
  'Critical Thinking',
  'Communication',
  'Adaptability',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader number="01" title="About_Me" />
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="font-display text-xl text-primary mb-8 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-secondary" />
              Education Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />
              
              {educationData.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-12 pb-8 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:border-secondary group-hover:shadow-neon-purple transition-all duration-300" />
                  
                  {/* Content card */}
                  <div className="bg-card/50 border border-primary/20 rounded-lg p-4 hover:border-primary/50 hover:shadow-neon-sm transition-all duration-300">
                    <div className="flex items-center gap-2 text-secondary font-mono text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {item.year}
                    </div>
                    <h4 className="font-display text-primary text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground font-body">{item.institution}</p>
                    <div className="flex items-center gap-1 text-muted-foreground/70 text-sm mt-2">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Cloud */}
          <div>
            <h3 className="font-display text-xl text-primary mb-8">
              Core Competencies
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-card border border-primary/20 rounded-lg p-4 text-center hover:border-secondary hover:shadow-neon-purple transition-all duration-300 cursor-default">
                    {/* Hexagon decoration */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 border border-primary/20 rotate-45 group-hover:border-secondary group-hover:rotate-90 transition-all duration-500" />
                    
                    <span className="font-mono text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional info card */}
            <div className="mt-8 bg-card/30 border border-primary/20 rounded-lg p-6">
              <div className="font-mono text-sm text-muted-foreground mb-4">
                <span className="text-accent">const</span>{' '}
                <span className="text-primary">developer</span> = {'{'}
              </div>
              <div className="pl-4 font-mono text-sm space-y-2">
                <p>
                  <span className="text-secondary">name:</span>{' '}
                  <span className="text-accent">"Kushagra Singh Kushwah"</span>,
                </p>
                <p>
                  <span className="text-secondary">focus:</span>{' '}
                  <span className="text-accent">"Optimization & ML"</span>,
                </p>
                <p>
                  <span className="text-secondary">status:</span>{' '}
                  <span className="text-accent">"Building the future"</span>
                </p>
              </div>
              <div className="font-mono text-sm text-muted-foreground mt-4">{'};'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
