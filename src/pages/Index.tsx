
import React, { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('A-eRT-JSj2tOVXynf');
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  const [typedText, setTypedText] = useState('');
  const fullText = 'Java Full Stack Developer';
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Handle resume download with direct path
  const handleResumeDownload = () => {
    // Updated with your actual resume path
    const resumePath = '/resume_SHIVAM.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Shivam Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume downloaded!",
      description: "Thank you for downloading my resume."
    });
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ubhz4hn',
        'template_8w1hfsn',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Shivam Singh Yadav',
        }
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting me. I'll get back to you soon."
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Particles Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`
            }} 
          />
        ))}
      </div>

      <Navigation currentSection={currentSection} scrollToSection={scrollToSection} />
      
      <HeroSection typedText={typedText} scrollToSection={scrollToSection} />
      
      <AboutSection handleResumeDownload={handleResumeDownload} />
      
      <ExperienceSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <ContactSection 
        formData={formData}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
