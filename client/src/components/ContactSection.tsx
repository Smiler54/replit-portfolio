import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="contact-title">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Let's discuss your next project or just say hello
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6" data-testid="contact-info-title">Contact Information</h3>
            
            <div className="flex items-center space-x-4" data-testid="contact-email">
              <div className="bg-primary/20 p-4 rounded-full">
                <Mail className="text-primary text-xl w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">alex.johnson@email.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-phone">
              <div className="bg-accent/20 p-4 rounded-full">
                <Phone className="text-accent text-xl w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-location">
              <div className="bg-secondary p-4 rounded-full">
                <MapPin className="text-secondary-foreground text-xl w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4" data-testid="social-links-title">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-github"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-card p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  data-testid="social-website"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                    placeholder="John"
                    required
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                    placeholder="Doe"
                    required
                    data-testid="input-lastName"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors" 
                  placeholder="Project Inquiry"
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                  required
                  data-testid="input-message"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
