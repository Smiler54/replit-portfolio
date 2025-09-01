export default function HeroSection() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-title">
            Hi, I'm <span className="gradient-text">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
            Full Stack Developer passionate about creating beautiful, functional web applications 
            that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              data-testid="button-view-work"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
