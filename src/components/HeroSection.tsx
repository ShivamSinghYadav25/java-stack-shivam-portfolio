import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  typedText: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ typedText, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-64 h-64 mx-auto mb-12 rounded-full overflow-hidden border-4 border-neon-cyan animate-float relative">
            <div className="absolute inset-[-4px] rounded-full animate-pulse-glow" style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(0, 255, 255, 0.4)',
              zIndex: -1
            }}></div>
            <img 
              alt="Shivam Singh Yadav" 
              className="w-full h-full object-cover brightness-110 contrast-110" 
              src="/lovable-uploads/e187ba3c-fbc3-47f6-9c29-b3c1a84053fc.jpg" 
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="text-gradient">Shivam</span>
            </h1>
            
            <div className="text-3xl md:text-4xl mb-12 h-16 flex items-center justify-center">
              <span className="text-slate-300">{typedText}</span>
              <span className="animate-blink text-teal-400 ml-1">|</span>
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
                className="text-lg px-10 py-4 rounded-full border-2 border-teal-400/50 text-teal-300 hover:border-teal-400 hover:bg-teal-400/10 backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-teal-500/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
    </section>
  );
};

export default HeroSection;
