
import React from 'react';
import { Download, Upload, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AboutSectionProps {
  handleResumeDownload: () => void;
  handleResumeUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resumeFile: File | null;
}

const AboutSection = ({ handleResumeDownload, handleResumeUpload, resumeFile }: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">About Me</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Passionate developer with a focus on creating meaningful digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-left space-y-8">
              <div className="glass-effect p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm a dedicated Java Full Stack Developer focused on crafting seamless, end-to-end user experiences. 
                  Proficient in the entire Spring ecosystem, modern JavaScript frameworks, and RESTful API design, 
                  I thrive on collaborative development and continuously learning new technologies to solve complex 
                  problems and deliver exceptional software.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="skill-tag">Problem Solving</span>
                  <span className="skill-tag">Team Collaboration</span>
                  <span className="skill-tag">Continuous Learning</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleResumeDownload}
                  className="btn-gradient inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg font-semibold"
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
                    className="inline-flex items-center space-x-3 px-8 py-4 rounded-full text-lg border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:bg-blue-400/10 backdrop-blur-sm w-full"
                  >
                    <Upload size={20} />
                    <span>{resumeFile ? 'Change Resume' : 'Upload Resume'}</span>
                  </Button>
                </div>
              </div>

              {resumeFile && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Resume uploaded: {resumeFile.name}</span>
                </div>
              )}
            </div>

            <div className="animate-slide-right">
              <Card className="card-modern">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-blue-300 flex items-center gap-3">
                    <GraduationCap className="text-3xl text-blue-400" />
                    Education Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-3 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"></div>
                    <div className="absolute left-2 top-7 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-transparent"></div>
                    <div className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50">
                      <h4 className="font-bold text-lg text-slate-100 mb-2">Bachelor of Technology</h4>
                      <p className="text-slate-300 mb-2">B.K. Birla Institute of Engineering and Technology</p>
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                        Graduation: 2025
                      </span>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-3 w-4 h-4 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full shadow-lg"></div>
                    <div className="absolute left-2 top-7 w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
                    <div className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50">
                      <h4 className="font-bold text-lg text-slate-100 mb-2">Intermediate</h4>
                      <p className="text-slate-300 mb-2">St. Joseph's School</p>
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">
                        June 2021
                      </span>
                    </div>
                  </div>

                  <div className="relative pl-8">
                    <div className="absolute left-0 top-3 w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full shadow-lg"></div>
                    <div className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50">
                      <h4 className="font-bold text-lg text-slate-100 mb-2">High School</h4>
                      <p className="text-slate-300 mb-2">St. Joseph's School</p>
                      <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-medium">
                        July 2019
                      </span>
                    </div>
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
