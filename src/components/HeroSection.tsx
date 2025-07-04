
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  typedText: string;
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ typedText, scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 animate-float">
            <img alt="Shivam Singh Yadav" className="w-full h-full object-cover" src="/lovable-uploads/e187ba3c-fbc3-47f6-9c29-b3c1a84053fc.jpg" />
          </div>
          <h1 className="text-5xl font-bold mb-6 md:text-5xl">
            Hi, I'm <span className="text-gradient text-5xl">Shivam Singh Yadav</span>
          </h1>
          <div className="text-2xl md:text-3xl mb-8 h-12">
            <span className="text-muted-foreground">{typedText}</span>
            <span className="animate-blink">|</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} className="btn-gradient text-lg px-8 py-6 rounded-full">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection('contact')} variant="outline" className="text-lg px-8 py-6 rounded-full border-primary/30 hover:border-primary">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
