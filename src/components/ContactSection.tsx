import { useState } from 'react';
import { Phone, Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { Button } from './ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8109703612',
    href: 'tel:+918109703612',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kushagrasinghkushwah46@gmail.com',
    href: 'mailto:kushagrasinghkushwah46@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nagpur, Maharashtra',
    href: null,
  },
];

// UPDATED SOCIAL LINKS
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/kushagrakushwah',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kushagrakushwah/',
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_3y09fr9';
    const templateId = 'template_gd3zdez';
    const publicKey = 'eanD110u6UAj65PYK';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!', {
          description: 'I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        toast.error('Failed to send message.', {
          description: 'Please try again later or contact me directly via email.',
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader number="06" title="Initiate_Connection" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl text-primary mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-4 p-4 bg-card/50 border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-neon-sm transition-shadow">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-primary hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-body text-primary">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4">
                // Social_Links
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form - Terminal Style */}
          <div className="bg-card border border-primary/30 rounded-lg overflow-hidden">
            <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-destructive/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-accent/70" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">
                contact_form.sh
              </span>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-accent">$</span> enter --name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-primary/30 rounded px-4 py-2 font-mono text-primary focus:border-primary focus:outline-none focus:shadow-neon-sm transition-all"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-accent">$</span> enter --email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-primary/30 rounded px-4 py-2 font-mono text-primary focus:border-primary focus:outline-none focus:shadow-neon-sm transition-all"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block font-mono text-sm text-muted-foreground mb-2">
                  <span className="text-accent">$</span> enter --message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-background border border-primary/30 rounded px-4 py-2 font-mono text-primary focus:border-primary focus:outline-none focus:shadow-neon-sm transition-all resize-none"
                  placeholder="Type your message here..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <Button type="submit" variant="neon" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send_Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;