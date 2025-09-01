import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "E-commerce platform dashboard interface",
      technologies: ["React", "Node.js", "MongoDB"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Task management application interface",
      technologies: ["Vue.js", "Socket.io", "PostgreSQL"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A beautiful weather app with location-based forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Weather application interface showing forecast",
      technologies: ["React Native", "API Integration", "Maps"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Social media analytics dashboard",
      technologies: ["Angular", "D3.js", "Express"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A modern blog platform with markdown editor and SEO optimization.",
      image: "https://pixabay.com/get/g6c56bb591f12d85a53ac89b671ce2f7afcdba10d48d5dd5f82a98663a6461cdc9f404ff526fd6a279cd6f9233df8e1059b2823f8e33a3dfcd29934833e12256b_1280.jpg",
      alt: "Blog platform interface with article editor",
      technologies: ["Next.js", "Markdown", "SEO"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Portfolio website design interface",
      technologies: ["React", "Framer Motion", "Tailwind"],
      techColors: ["bg-primary/20 text-primary", "bg-accent/20 text-accent", "bg-secondary text-secondary-foreground"]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card bg-card rounded-2xl overflow-hidden shadow-lg hover:translate-y-[-8px] transition-all duration-300" data-testid={`project-card-${project.id}`}>
              <img 
                src={project.image} 
                alt={project.alt}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" data-testid={`project-title-${project.id}`}>{project.title}</h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className={`${project.techColors[techIndex]} px-3 py-1 rounded-full text-sm`}
                      data-testid={`project-tech-${project.id}-${techIndex}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                    data-testid={`project-code-${project.id}`}
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
