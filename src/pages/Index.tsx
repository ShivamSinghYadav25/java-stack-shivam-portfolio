import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, User, Code, Briefcase, Award, FolderOpen, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

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

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_ubhz4h',
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

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    backend: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security'],
    databases: ['MySQL', 'MongoDB', 'PostgreSQL'],
    testing: ['JUnit', 'Mockito'],
    platforms: ['Eclipse', 'IntelliJ IDEA', 'VS Code']
  };

  const projects = [{
    title: 'Bus Ticket Booking System',
    description: 'Web-based ticket booking with route search, JWT authentication, and seat selection',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'Thymeleaf', 'MySQL'],
    icon: '🚌'
  }, {
    title: 'Patient Medicine Appointment System',
    description: 'Appointment scheduling and CRUD operations with vendors',
    technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript', 'MySQL'],
    icon: '🏥'
  }, {
    title: 'Employee Management System',
    description: 'Add/update/delete/search employees via secure backend',
    technologies: ['Spring Boot', 'Bootstrap', 'HTML/CSS'],
    icon: '👥'
  }, {
    title: 'Autonomous Vehicle (Submarine) Model',
    description: '3D modeling and virtual prototyping using Blender. Collaboration on engineering simulations and visual presentations',
    technologies: ['Blender Platform'],
    icon: '🚢'
  }];

  return <div className="min-h-screen bg-background text-foreground">
      {/* Animated Particles Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`
      }} />)}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gradient">Shivam Singh Yadav</div>
            <div className="hidden md:flex space-x-8">
              {[{
              id: 'home',
              label: 'Home',
              icon: User
            }, {
              id: 'about',
              label: 'About',
              icon: User
            }, {
              id: 'experience',
              label: 'Experience',
              icon: Briefcase
            }, {
              id: 'skills',
              label: 'Skills',
              icon: Code
            }, {
              id: 'projects',
              label: 'Projects',
              icon: FolderOpen
            }, {
              id: 'contact',
              label: 'Contact',
              icon: MessageCircle
            }].map(({
              id,
              label,
              icon: Icon
            }) => <button key={id} onClick={() => scrollToSection(id)} className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-300 ${currentSection === id ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-primary'}`}>
                  <Icon size={16} />
                  <span>{label}</span>
                </button>)}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* About Section */}
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
                <Button className="btn-gradient inline-flex items-center space-x-2 px-6 py-3 rounded-full">
                  <Download size={20} />
                  <span>Download Resume</span>
                </Button>
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

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Experience</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border card-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-primary">Java Stack Developer Intern</CardTitle>
                    <CardDescription className="text-lg">GUVI Geek Technology</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    December 2024 – June 2025
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full-stack development using Spring Boot, REST APIs, and integration with frontend tools. 
                  Working on real-world projects and gaining hands-on experience in enterprise-level development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Skills</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => <Card key={category} className="bg-card border-border card-hover">
                <CardHeader>
                  <CardTitle className="text-primary capitalize">
                    {category === 'platforms' ? 'Platforms/IDEs' : category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                        {skill}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Projects</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={project.title} className="bg-card border-border card-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{project.icon}</span>
                    <CardTitle className="text-primary">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20">
                        {tech}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <span>y.shivam9500@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📞</span>
                  <span>9532809555</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary">
                  <Github size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary">
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:border-primary">
                  <Mail size={20} />
                </Button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-muted focus:border-primary rounded-none px-0" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input 
                        name="email" 
                        type="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        className="bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 border-muted focus:border-primary rounded-none px-0" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        className="bg-transparent border-2 border-muted focus:border-primary min-h-32" 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-gradient w-full py-3 rounded-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>;
};

export default Index;
