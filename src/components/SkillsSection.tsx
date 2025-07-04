
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    testing: ['JUnit', 'Mockito'],
    platforms: ['Eclipse', 'IntelliJ IDEA', 'VS Code']
  };

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="bg-card border-border card-hover">
              <CardHeader>
                <CardTitle className="text-primary capitalize">
                  {category === 'platforms' ? 'Platforms/IDEs' : category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
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
