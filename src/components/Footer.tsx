import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:rehangod2003@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+94768762852",
      label: "Phone",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rehan-dewkalana-1b9915292",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/rehangodakumbura",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-primary mb-4">
              Rehan<span className="text-foreground">.</span>
            </div>
            <p className="text-text-muted mb-6 max-w-md leading-relaxed">
              Undergraduate Software Engineer passionate about creating innovative 
              solutions that combine technical excellence with user-centered design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2 bg-secondary rounded-lg text-text-muted hover:text-primary hover:bg-card-hover transition-colors"
                    aria-label={link.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-text-muted text-sm">Email</p>
                <a 
                  href="mailto:rehangod2003@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  rehangod2003@gmail.com
                </a>
              </div>
              <div>
                <p className="text-text-muted text-sm">Phone</p>
                <a 
                  href="tel:+94768762852"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +94 768762852
                </a>
              </div>
              <div>
                <p className="text-text-muted text-sm">Location</p>
                <p className="text-foreground">Sri Lanka / UK</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © {currentYear} Rehan Dewkalana Godakumbura. All rights reserved.
            </p>
            <p className="text-text-muted text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;