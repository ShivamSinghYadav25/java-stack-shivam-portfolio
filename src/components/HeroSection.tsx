
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  typedText: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ typedText, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-56 h-56 mx-auto mb-12 rounded-full overflow-hidden border-4 border-blue-400/30 animate-float relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-glow"></div>
            <img 
              alt="Shivam Singh Yadav" 
              className="w-full h-full object-cover relative z-10" 
              src="/lovable-uploads/e187ba3c-fbc3-47f6-9c29-b3c1a84053fc.jpg" 
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Shivam</span>
            </h1>
            
            <div className="text-3xl md:text-4xl mb-12 h-16 flex items-center justify-center">
              <span className="text-slate-300">{typedText}</span>
              <span className="animate-blink text-blue-400 ml-1">|</span>
            </div>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Crafting seamless digital experiences with modern technologies and creative solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')} 
                className="btn-gradient text-lg px-10 py-4 rounded-full font-semibold shadow-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')} 
                variant="outline" 
                className="text-lg px-10 py-4 rounded-full border-2 border-blue-400/50 text-blue-300 hover:border-blue-400 hover:bg-blue-400/10 backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl animate-float"></div>
    </section>
  );
};

export default HeroSection;
