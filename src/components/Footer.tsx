
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-4">© 2025 Shivam Singh Yadav</p>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Github size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Linkedin size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Mail size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
