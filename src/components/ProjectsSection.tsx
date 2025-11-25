
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [{
    title: 'Bus Ticket Booking System',
    description: 'A comprehensive web-based ticket booking platform with route search functionality, JWT authentication, and interactive seat selection system.',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'Thymeleaf', 'MySQL','Spring security'],
    icon: '🚌',
    gradient: 'from-teal-500 to-blue-500',
    githubUrl: 'https://github.com/ShivamSinghYadav25/BBA'
  }, {
    title: 'Patient Medicine Appointment System',
    description: 'Healthcare management system featuring appointment scheduling, patient records management, and vendor CRUD operations.',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'MySQL','Spring security'],
    icon: '🏥',
    gradient: 'from-blue-500 to-cyan-500',
    githubUrl: 'https://github.com/ShivamSinghYadav25/PMAS'
  }, {
    title: 'Medical Chatbot with OpenAI',
    description: 'AI-powered medical chatbot leveraging OpenAI technology for intelligent healthcare conversations and medical information assistance.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    githubUrl: 'https://github.com/ShivamSinghYadav25/Medical-Chatbot-Open-AI-'
  }, {
    title: 'Employee Management System',
    description: 'Enterprise-level employee management solution with secure backend operations for adding, updating, deleting, and searching employee records.',
    technologies: ['Spring Boot', 'Bootstrap', 'HTML/CSS'],
    icon: '👥',
    gradient: 'from-cyan-500 to-teal-500',
    githubUrl: 'https://github.com/ShivamSinghYadav25/EmployeeMS'
  }, {
    title: 'Autonomous Vehicle Model',
    description: '3D modeling and virtual prototyping of submarine using Blender. Collaborative engineering project focusing on simulations and visual presentations.',
    technologies: ['Blender Platform'],
    icon: '🚢',
    gradient: 'from-teal-600 to-blue-600'
  }];

  return (
    <section id="projects" className="py-24 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A showcase of my development journey and technical expertise
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="card-modern group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} p-4 flex items-center justify-center text-2xl shadow-lg`}>
                      {project.icon}
                    </div>
                    {project.githubUrl && (
                      <div className="flex gap-2 relative z-10">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Button clicked! Opening:', project.githubUrl);
                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="rounded-full border border-slate-600 hover:border-teal-400 hover:bg-teal-400/10 p-2.5 transition-colors cursor-pointer bg-slate-900/50 pointer-events-auto relative z-10"
                          aria-label="View on GitHub"
                          style={{ pointerEvents: 'auto' }}
                        >
                          <Github size={18} className="text-slate-300 pointer-events-none" />
                        </button>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-teal-300 group-hover:text-teal-200 transition-colors mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
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

export default ProjectsSection;
