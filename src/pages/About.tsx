import { Button } from "@/components/ui/button";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their vision and bring it to life."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every project is measured by tangible outcomes and business growth."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we deliver."
    }
  ];

  const team = [
    {
      name: "Zion",
      role: "Chief Digital Officer",
      description: "The creative genius behind every project, always plugged in and ready to innovate."
    },
    {
      name: "Tech Team",
      role: "Development Specialists",
      description: "Expert developers who turn ideas into powerful digital solutions."
    },
    {
      name: "Design Team",
      role: "Creative Designers",
      description: "Visionary designers who craft beautiful and functional user experiences."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-card">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-green-glow">Pluggedin Digital</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are Zambia's premier digital agency, bridging the gap between local businesses 
            and global digital success. Our mission is to empower every business with the tools 
            and strategies they need to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to democratize digital success, Pluggedin Digital 
                  emerged from the understanding that every business, regardless of size, 
                  deserves access to world-class digital solutions.
                </p>
                <p>
                  Based in Lusaka, Zambia, we combine deep local market knowledge with 
                  international best practices to deliver solutions that resonate globally 
                  while maintaining that essential local touch.
                </p>
                <p>
                  Our name "Pluggedin" represents our core philosophy - we plug businesses 
                  into the digital ecosystem, ensuring they're always connected, always 
                  growing, and always ahead of the curve.
                </p>
              </div>
              <Button 
                size="lg"
                className="mt-8 bg-green-glow text-background hover:bg-green-glow/90"
              >
                Start Your Journey
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-glow/20 to-yellow-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-8xl">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-green-glow/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-glow/20 rounded-lg flex items-center justify-center text-green-glow">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The passionate individuals who make the magic happen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-background p-8 rounded-lg border border-border text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-green-glow/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {index === 0 ? "🤖" : index === 1 ? "💻" : "🎨"}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-green-glow font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-glow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
            Ready to Get Plugged In?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your digital presence and drive your business forward.
          </p>
          <Button 
            size="lg"
            className="bg-background text-green-glow hover:bg-background/90 font-semibold"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;