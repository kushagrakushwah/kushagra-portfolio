import { useState } from 'react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'C/C++', level: 90 },
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 85 },
    ],
  },
  {
    name: 'Web_&_APIs',
    skills: [
      { name: 'FastAPI', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Laravel MVC', level: 85 },
      { name: 'REST/WebSockets', level: 90 },
      { name: 'HTML/CSS/PHP', level: 85 },
    ],
  },
  {
    name: 'Security_&_AI',
    skills: [
      { name: 'MITRE ATT&CK', level: 90 },
      { name: 'BAS/Red-Teaming', level: 85 },
      { name: 'LLMs/AI Agents', level: 90 },
      { name: 'GRPO/RL', level: 85 },
      { name: 'Computer Vision', level: 80 },
    ],
  },
  {
    name: 'Data_&_ML',
    skills: [
      { name: 'Pandas/NumPy', level: 90 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'TensorFlow', level: 80 },
      { name: 'HuggingFace', level: 85 },
      { name: 'MediaPipe', level: 80 },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker/K8s', level: 85 },
      { name: 'ELK Stack', level: 80 },
      { name: 'Git/GitHub', level: 95 },
      { name: 'MySQL', level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader number="05" title="Tech_Stack" />
        
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 font-mono text-sm rounded border transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground border-primary shadow-neon-sm'
                  : 'bg-transparent text-muted-foreground border-primary/30 hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 border border-primary/20 rounded-lg p-8">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
              <span className="font-mono text-sm text-muted-foreground">
                <span className="text-accent">$</span> analyze --skills {skillCategories[activeCategory].name.toLowerCase()}
              </span>
            </div>
            
            {/* Skills grid */}
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-primary">{skill.name}</span>
                    <span className="font-mono text-xs text-secondary">
                      PWR: {skill.level}%
                    </span>
                  </div>
                  
                  {/* Power gauge */}
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    {/* Background grid lines */}
                    <div className="absolute inset-0 flex">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="flex-1 border-r border-background/30 last:border-r-0"
                        />
                      ))}
                    </div>
                    
                    {/* Progress bar */}
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out group-hover:shadow-neon-sm"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Summary */}
            <div className="mt-8 pt-4 border-t border-primary/20">
              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-accent">&gt;</span> Analysis complete. {skillCategories[activeCategory].skills.length} skills detected in {skillCategories[activeCategory].name} category.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;