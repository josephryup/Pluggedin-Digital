import { Code, Zap, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast turnaround & pre-design",
      description: "At Pluggedin Digital, speed meets quality. We deliver sleek, modern designs without the wait. Our process is streamlined in a way that we give quick deliverables which get great results. No budget, still progression, we truly understand your business-people need more."
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Solutions",
      description: "Every business is unique, and so are our solutions. We craft tailored digital strategies that align with your specific goals and industry requirements."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Local Expertise",
      description: "Based in Zambia, we understand the local market dynamics while delivering solutions with global standards and reach."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Results",
      description: "Our track record speaks for itself. We've helped numerous businesses transform their digital presence and achieve measurable growth."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-accent mb-8">
            Why Choose Us
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Pluggedin Makes Progress Too
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Being powered up isn't just about tech, it's about transformation.
          </h3>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            It means giving businesses the tools, strategy, and support they need to thrive in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-green-glow/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-glow/20 rounded-lg flex items-center justify-center text-green-glow">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-16 space-x-2">
          {[0, 1, 2, 3].map((dot, index) => (
            <div 
              key={index}
              className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-green-glow' : 'bg-muted'}`}
            ></div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;