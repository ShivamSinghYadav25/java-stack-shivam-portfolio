
import React from 'react';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
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
    <section id="contact" className="py-24 section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">Let's Work Together</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div className="animate-slide-left space-y-8">
            <div className="glass-effect p-8">
              <h3 className="text-3xl font-bold text-teal-300 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-slate-200 font-medium">y.shivam9500@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-slate-200 font-medium">9532809555</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1 rounded-full border-2 border-teal-400/50 text-teal-300 hover:border-teal-400 hover:bg-teal-400/10 backdrop-blur-sm"
                onClick={() => window.open('https://github.com/ShivamSinghYadav25', '_blank')}
              >
                <Github size={20} className="mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="flex-1 rounded-full border-2 border-teal-400/50 text-teal-300 hover:border-teal-400 hover:bg-teal-400/10 backdrop-blur-sm"
                onClick={() => window.open('https://www.linkedin.com/in/shivam-singh-yadav-9b09b631b', '_blank')}
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="animate-slide-right">
            <Card className="card-modern">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <Input 
                      name="name" 
                      placeholder="Your full name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="bg-slate-700/50 border-slate-600 focus:border-teal-400 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 backdrop-blur-sm" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="bg-slate-700/50 border-slate-600 focus:border-teal-400 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 backdrop-blur-sm" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea 
                      name="message" 
                      placeholder="Tell me about your project or idea..." 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="bg-slate-700/50 border-slate-600 focus:border-teal-400 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-400 backdrop-blur-sm min-h-32 resize-none" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="btn-gradient w-full py-4 rounded-full text-lg font-semibold" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send size={20} />
                        Send Message
                      </div>
                    )}
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
