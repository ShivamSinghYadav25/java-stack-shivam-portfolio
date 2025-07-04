
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [{
    title: 'Bus Ticket Booking System',
    description: 'Web-based ticket booking with route search, JWT authentication, and seat selection',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'Thymeleaf', 'MySQL'],
    icon: '🚌'
  }, {
    title: 'Patient Medicine Appointment System',
    description: 'Appointment scheduling and CRUD operations with vendors',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'MySQL'],
    icon: '🏥'
  }, {
    title: 'Employee Management System',
    description: 'Add/update/delete/search employees via secure backend',
    technologies: ['Spring Boot', 'Bootstrap', 'HTML/CSS'],
    icon: '👥'
  }, {
    title: 'Autonomous Vehicle (Submarine) Model',
    description: '3D modeling and virtual prototyping using Blender. Collaboration on engineering simulations and visual presentations',
    technologies: ['Blender Platform'],
    icon: '🚢'
  }];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Projects</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card border-border card-hover">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{project.icon}</span>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20">
                      {tech}
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

export default ProjectsSection;
