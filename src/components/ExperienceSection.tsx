
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Professional Experience</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building expertise through hands-on development and real-world projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-modern">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-500 p-4 flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-teal-300 mb-2">Java Full Stack Developer Intern</CardTitle>
                    <CardDescription className="text-xl text-slate-300 font-medium">GUVI Geek Technology</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                  <Calendar size={16} />
                  <span className="font-medium">December 2024 – February 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/50 backdrop-blur-sm">
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  Full-stack development using Spring Boot, REST APIs, and integration with frontend tools. 
                  Working on real-world projects and gaining hands-on experience in enterprise-level development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag text-xs">Spring Boot</span>
                  <span className="skill-tag text-xs">REST APIs</span>
                  <span className="skill-tag text-xs">Frontend Integration</span>
                  <span className="skill-tag text-xs">Spring MVC</span>
                  <span className="skill-tag text-xs">Spring Data JPA</span>
                  <span className="skill-tag text-xs">Spring Security</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
