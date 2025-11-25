
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground mb-4">© 2025 Shivam Singh Yadav</p>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('GitHub clicked');
              window.open('https://github.com/ShivamSinghYadav25', '_blank', 'noopener,noreferrer');
            }}
            className="p-2 hover:text-teal-400 transition-colors cursor-pointer bg-transparent border-0"
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('LinkedIn clicked');
              window.open('http://www.linkedin.com/in/shivam-singh-yadav-9b09b631b', '_blank', 'noopener,noreferrer');
            }}
            className="p-2 hover:text-teal-400 transition-colors cursor-pointer bg-transparent border-0"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
