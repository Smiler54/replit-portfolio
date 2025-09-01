import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = 64; // 16 * 4 = 64px (h-16)
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-primary" data-testid="logo">Icebit</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              data-testid="nav-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              data-testid="nav-about"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              data-testid="nav-projects"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#skills')}
              data-testid="nav-skills"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              data-testid="nav-contact"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              data-testid="mobile-nav-home"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              data-testid="mobile-nav-about"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              data-testid="mobile-nav-projects"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#skills')}
              data-testid="mobile-nav-skills"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              data-testid="mobile-nav-contact"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
