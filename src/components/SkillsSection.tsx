import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Palette, Users, Lightbulb, Zap } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "Go", "JavaScript", "Kotlin"],
      color: "text-primary",
    },
    {
      title: "Frameworks & Tools",
      icon: Zap,
      skills: ["React", "Spring Boot", "Node.js", "Express.js", "Fiber", "GORM"],
      color: "text-warning",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "SQLite"],
      color: "text-success",
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma"],
      color: "text-pink-400",
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-solving", "Teamwork", "Adaptability"],
      color: "text-purple-400",
    },
  ];

  return (
    <section id="skills" className="bg-card/50">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and abilities that power my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-secondary rounded-xl mr-4">
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Display */}
        <div className="mt-16">
          <Card className="border-border bg-card">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 accent-gradient rounded-2xl">
                  <Lightbulb className="w-8 h-8 text-background" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Always Learning, Always Growing
              </h3>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                languages, and methodologies to stay at the forefront of software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;