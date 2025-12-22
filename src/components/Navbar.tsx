import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-primary/20" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-primary font-display text-xl">
            <Terminal className="w-6 h-6" />
            <span className="hidden sm:inline">KSK</span>
            <span className="text-secondary">_</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group"
              >
                <span className="text-secondary text-xs mr-1">0{index + 1}.</span>
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 border-t border-primary/20 pt-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors rounded"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-secondary text-xs mr-2">0{index + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
