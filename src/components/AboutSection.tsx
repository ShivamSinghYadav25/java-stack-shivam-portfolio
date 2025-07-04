
import React from 'react';
import { Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutSectionProps {
  handleResumeDownload: () => void;
  handleResumeUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resumeFile: File | null;
}

const AboutSection = ({ handleResumeDownload, handleResumeUpload, resumeFile }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-lg blur opacity-75"></div>
                <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a dedicated Java Full Stack Developer focused on crafting seamless, end-to-end user experiences. 
                    Proficient in the entire Spring ecosystem, modern JavaScript frameworks, and RESTful API design, 
                    I thrive on collaborative development and continuously learning new technologies to solve complex 
                    problems and deliver exceptional software.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleResumeDownload}
                    className="btn-gradient inline-flex items-center space-x-2 px-6 py-3 rounded-full animate-pulse-glow"
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </Button>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      id="resume-upload"
                    />
                    <Button 
                      variant="outline" 
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border-primary/30 hover:border-primary w-full"
                    >
                      <Upload size={20} />
                      <span>{resumeFile ? 'Change Resume' : 'Upload Resume'}</span>
                    </Button>
                  </div>
                </div>
                {resumeFile && (
                  <p className="text-sm text-primary flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Resume uploaded: {resumeFile.name}
                  </p>
                )}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-card/80 border-border backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center gap-2">
                    <span className="text-xl">🎓</span>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-primary/30"></div>
                    <h4 className="font-semibold text-foreground">Bachelor of Technology</h4>
                    <p className="text-muted-foreground">B.K. Birla Institute of Engineering and Technology</p>
                    <p className="text-sm text-primary">Graduation Year: 2025</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary/70 rounded-full"></div>
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-primary/30"></div>
                    <h4 className="font-semibold text-foreground">Intermediate</h4>
                    <p className="text-muted-foreground">St. Joseph's School</p>
                    <p className="text-sm text-primary">June 2021</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-primary/50 rounded-full"></div>
                    <h4 className="font-semibold text-foreground">High School</h4>
                    <p className="text-muted-foreground">St. Joseph's School</p>
                    <p className="text-sm text-primary">July 2019</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
