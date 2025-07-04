
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security']
    },
    databases: {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    testing: {
      title: 'Testing',
      icon: '🧪',
      skills: ['JUnit', 'Mockito']
    },
    platforms: {
      title: 'Platforms/IDEs',
      icon: '💻',
      skills: ['Eclipse', 'IntelliJ IDEA', 'VS Code']
    }
  };

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills & Technologies</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { title, icon, skills: skillList }]) => (
            <Card key={category} className="bg-card/80 border-border card-hover backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-violet-500/10 text-primary rounded-full text-sm border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
