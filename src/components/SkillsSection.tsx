import { useState } from 'react';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    name: 'Web',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'PHP', level: 85 },
      { name: 'Laravel', level: 80 },
      { name: 'AJAX/JSON', level: 85 },
    ],
  },
  {
    name: 'Data/AI',
    skills: [
      { name: 'Google OR-Tools', level: 75 },
      { name: 'Pandas', level: 70 },
      { name: 'NumPy', level: 70 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
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
