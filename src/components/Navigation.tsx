
import React from 'react';
import { User, Briefcase, Code, FolderOpen, MessageCircle } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ currentSection, scrollToSection }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: MessageCircle }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gradient">Shivam Singh Yadav</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button 
                key={id} 
                onClick={() => scrollToSection(id)} 
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${
                  currentSection === id 
                    ? 'text-primary bg-primary/10' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
