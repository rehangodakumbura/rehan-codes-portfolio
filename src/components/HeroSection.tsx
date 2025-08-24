import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Github, Linkedin } from 'lucide-react';
import profileImage from '@/assets/rehan-profile-new.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Rehan Dewkalana Godakumbura"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 accent-gradient rounded-2xl flex items-center justify-center">
                <div className="text-background font-bold text-sm text-center">
                  <div>2026</div>
                  <div className="text-xs">Graduate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Hello, I'm{' '}
              <span className="text-primary">Rehan Dewkalana</span>{' '}
              <span className="text-primary">Godakumbura</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-muted mb-8 font-medium">
              Undergraduate Software Engineer | Full-Stack Developer | Mobile App Developer
            </p>
            
            <p className="text-lg text-text-muted mb-10 leading-relaxed max-w-2xl">
              I am Rehan Godakumbura, an undergraduate Software Engineering student at the University of Westminster with strong expertise in full-stack development, data analysis, mobile application development, and system architecture. I am passionate about creating impactful software solutions that combine innovation with usability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                size="lg" 
                className="accent-gradient hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection('#portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="mailto:rehangod2003@gmail.com"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href="tel:+94768762852"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/rehan-dewkalana-1b9915292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/rehangodakumbura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;