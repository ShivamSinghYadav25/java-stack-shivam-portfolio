
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-border card-hover">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-primary">Java Stack Developer Intern</CardTitle>
                  <CardDescription className="text-lg">GUVI Geek Technology</CardDescription>
                </div>
                <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                  December 2024 – June 2025
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full-stack development using Spring Boot, REST APIs, and integration with frontend tools. 
                Working on real-world projects and gaining hands-on experience in enterprise-level development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
