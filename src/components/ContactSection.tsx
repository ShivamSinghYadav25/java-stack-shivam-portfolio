
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactSection = ({ formData, isSubmitting, handleSubmit, handleInputChange }: ContactSectionProps) => {
  return (
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
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-primary/30 hover:border-primary"
                onClick={() => window.open('https://github.com/ShivamSinghYadav25', '_blank')}
              >
                <Github size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-primary/30 hover:border-primary"
                onClick={() => window.open('https://www.linkedin.com/in/shivam-singh-yadav-9b09b631b', '_blank')}
              >
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
  );
};

export default ContactSection;
