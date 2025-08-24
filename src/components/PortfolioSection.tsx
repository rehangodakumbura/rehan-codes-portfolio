import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from 'lucide-react';
import ticketSystemImage from '@/assets/project-ticket-system.jpg';
import movieAppImage from '@/assets/project-movie-app.jpg';
import learnHeartImage from '@/assets/project-learnheart.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Event Ticket Management System",
      year: "2024",
      description: "Real-time ticketing system with comprehensive event management capabilities, featuring live updates and secure payment processing.",
      image: ticketSystemImage,
      technologies: ["Java OOP", "React", "Spring Boot", "Real-time"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: true,
    },
    {
      title: "LearnHeart Educational Platform",
      year: "2024–2025",
      description: "Scalable web platform for online education with interactive features, course management, and student progress tracking.",
      image: learnHeartImage,
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: true,
    },
    {
      title: "Movie Knowledge App",
      year: "2025",
      description: "Android application integrating with OMDb API for comprehensive movie information, featuring offline storage and search functionality.",
      image: movieAppImage,
      technologies: ["Android", "Kotlin", "OMDb API", "Room DB"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: false,
    },
    {
      title: "Plane Seat Management System",
      year: "2024",
      description: "Java-based reservation system for airline seat booking with real-time availability and booking management.",
      image: null,
      technologies: ["Java", "OOP", "Data Structures"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: false,
    },
    {
      title: "Dice Game App",
      year: "2025",
      description: "Interactive Android game built with modern UI components and smooth animations using Jetpack Compose.",
      image: null,
      technologies: ["Kotlin", "Jetpack Compose", "Android"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: false,
    },
    {
      title: "Book Management API",
      year: "2025",
      description: "RESTful API for book management with CRUD operations, built using Go and Fiber for high performance.",
      image: null,
      technologies: ["Go", "Fiber", "SQLite", "REST API"],
      github: "https://github.com/rehangodakumbura",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="bg-background">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            A showcase of projects that demonstrate my skills in full-stack development, mobile apps, and system architecture
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="hover-lift border-border bg-card overflow-hidden">
                {project.image && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="accent-gradient text-background border-none">
                        Featured
                      </Badge>
                    </div>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-text-muted" />
                    <span className="text-sm text-text-muted">{project.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="hover-lift border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-text-muted" />
                    <span className="text-sm text-text-muted">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-muted mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
