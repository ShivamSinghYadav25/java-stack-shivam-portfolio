
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500'
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security'],
      color: 'from-cyan-500 to-teal-500'
    },
    databases: {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-teal-500 to-blue-500'
    },
    testing: {
      title: 'Testing',
      icon: '🧪',
      skills: ['JUnit', 'Mockito'],
      color: 'from-blue-500 to-indigo-500'
    },
    platforms: {
      title: 'Platforms/IDEs',
      icon: '💻',
      skills: ['Eclipse', 'IntelliJ IDEA', 'VS Code'],
      color: 'from-indigo-500 to-blue-500'
    }
  };

  return (
    <section id="skills" className="py-24 section-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Skills & Technologies</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { title, icon, skills: skillList, color }], index) => (
            <div 
              key={category} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="card-modern group h-full">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} p-4 mb-4 flex items-center justify-center text-2xl shadow-lg`}>
                    {icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map(skill => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
