import { Card, CardContent } from "@/components/ui/card";
import { Figma, Globe, Smartphone, Server, Lightbulb, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Figma,
      title: "UI/UX Design",
      description: "Creating user-friendly interfaces with Figma that prioritize user experience and modern design principles.",
      features: ["Wireframing & Prototyping", "User Interface Design", "Design Systems", "Responsive Design"],
      color: "text-pink-400",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and scalable websites using modern technologies like React, Node.js, and MongoDB.",
      features: ["Frontend Development", "Backend Integration", "Database Design", "Performance Optimization"],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Developing native Android applications with Kotlin and Jetpack Compose for optimal performance.",
      features: ["Native Android Apps", "Kotlin Development", "Jetpack Compose", "Play Store Deployment"],
      color: "text-success",
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description: "Creating secure and efficient REST APIs using Spring Boot, Go, and Node.js for robust server-side solutions.",
      features: ["REST API Development", "Database Integration", "Authentication Systems", "Server Architecture"],
      color: "text-warning",
    },
    {
      icon: Lightbulb,
      title: "Software Solutions",
      description: "Developing comprehensive software systems including real-time applications, data management, and educational platforms.",
      features: ["System Architecture", "Real-time Applications", "Data Management", "Custom Solutions"],
      color: "text-purple-400",
    },
  ];

  return (
    <section id="services" className="bg-card/50">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Comprehensive software development services that transform ideas into powerful digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover-lift border-border bg-card group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-secondary rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-muted">
                        <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="border-border bg-card">
          <CardContent className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Ready to Bring Your Ideas to Life?
              </h3>
              <p className="text-xl text-text-muted mb-8">
                Let's collaborate to create innovative software solutions that make a difference. 
                From concept to deployment, I'll guide you through every step of the development process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-8 py-4 accent-gradient text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </button>
                <button 
                  className="px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-card-hover transition-colors"
                  onClick={() => window.open("https://github.com/rehangodakumbura", "_blank")}
                >
                  View My Work
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;