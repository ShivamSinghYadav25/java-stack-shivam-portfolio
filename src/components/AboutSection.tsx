
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
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a dedicated Java Full Stack Developer focused on crafting seamless, end-to-end user experiences. 
                Proficient in the entire Spring ecosystem, modern JavaScript frameworks, and RESTful API design, 
                I thrive on collaborative development and continuously learning new technologies to solve complex 
                problems and deliver exceptional software.
              </p>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleResumeDownload}
                    className="btn-gradient inline-flex items-center space-x-2 px-6 py-3 rounded-full"
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
                  <p className="text-sm text-primary">
                    ✓ Resume uploaded: {resumeFile.name}
                  </p>
                )}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Bachelor of Technology</h4>
                    <p className="text-muted-foreground">B.K. Birla Institute of Engineering and Technology</p>
                    <p className="text-sm text-primary">Graduation Year: 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Intermediate</h4>
                    <p className="text-muted-foreground">St. Joseph's School</p>
                    <p className="text-sm text-primary">June 2021</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">High School</h4>
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
