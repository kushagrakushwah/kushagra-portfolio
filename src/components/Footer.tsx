import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-primary/20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-primary font-display">
            <Terminal className="w-5 h-5" />
            <span>KSK</span>
            <span className="text-secondary animate-pulse">_</span>
          </a>
          
          {/* Copyright */}
          <p className="font-mono text-sm text-muted-foreground text-center">
            <span className="text-accent">&copy;</span> {currentYear} Kushagra Singh Kushwah. 
            <span className="hidden sm:inline"> Built with</span>
            <Heart className="inline w-3 h-3 mx-1 text-secondary" />
            <span className="hidden sm:inline">and code.</span>
          </p>
          
          {/* Status */}
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
