export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate developer with 8+ years of experience building scalable web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-8xl font-bold text-white">VL</div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground" data-testid="about-journey-title">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="about-journey-p1">
              I started my journey in web development 8 years ago with a simple "Hello World" program. 
              Since then, I've had the privilege of working with startups and established companies, 
              helping them bring their digital visions to life.
            </p>
            <p className="text-muted-foreground leading-relaxed" data-testid="about-journey-p2">
              I specialize in React, Node.js, and modern web technologies. I'm passionate about 
              creating user-centered solutions that not only look great but also provide exceptional 
              user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" data-testid="stat-projects">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent" data-testid="stat-experience">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
