import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, Award } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "University of Westminster",
      degree: "BSc (Hons) Software Engineering",
      status: "In Progress",
      graduation: "Expected Graduation: 2026",
      icon: GraduationCap,
      current: true,
    },
    {
      institution: "Informatics Institute of Technology (IIT)",
      degree: "BSc (Hons) Software Engineering",
      status: "In Progress",
      graduation:"Expected Graduation: 2026",
      icon: School,
      current: true,
    },
    {
      institution: "G/Dharmasoka College, Ambalangoda",
      degree: "GCE Advanced Level & Ordinary Level",
      status: "Completed",
      graduation: "2009–2023",
      icon: Award,
      current: false,
    },
  ];

  return (
    <section id="about" className="bg-background">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            My educational journey and the foundation that shapes my expertise in software engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <Card 
                key={index} 
                className={`hover-lift border-border bg-card ${
                  edu.current ? 'border-primary/50' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl mr-4 ${
                      edu.current ? 'accent-gradient' : 'bg-secondary'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        edu.current ? 'text-background' : 'text-primary'
                      }`} />
                    </div>
                    {edu.current && (
                      <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {edu.institution}
                  </h3>
                  
                  <p className="text-text-muted mb-2 font-medium">
                    {edu.degree}
                  </p>
                  
                  <div className="space-y-1">
                    <p className={`text-sm font-medium ${
                      edu.current ? 'text-primary' : 'text-success'
                    }`}>
                      {edu.status}
                    </p>
                    {edu.graduation && (
                      <p className="text-sm text-text-muted">
                        {edu.graduation}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;