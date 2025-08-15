import React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const OurWork = () => {
  const projects = [
    {
      client: "Constrox Building Limited",
      title: "Creating Innovative Spaces for Tomorrow's Needs",
      description: "A comprehensive website redesign for a leading construction company, featuring modern design, project showcases, and enhanced user experience.",
      services: ["Web Design", "Development", "SEO", "Content Strategy"],
      challenge: "Create a modern, professional website that showcases construction expertise while improving online visibility and lead generation.",
      results: [
        "150% increase in website traffic",
        "80% improvement in mobile user experience",
        "200% boost in online inquiries"
      ],
      bg: "bg-orange-accent"
    },
    {
      client: "ZamTech Innovations",
      title: "Empowering Local Businesses with Tech",
      description: "A digital transformation project for a Zambian tech startup, including branding, web development, and digital marketing.",
      services: ["Branding", "Web Development", "Digital Marketing"],
      challenge: "Build a strong online presence and brand identity for a new tech company.",
      results: [
        "300% increase in social engagement",
        "Successful launch of new product line"
      ],
      bg: "bg-blue-500"
    },
    {
      client: "GreenLeaf Farms",
      title: "Sustainable Agriculture Online",
      description: "Website and e-commerce platform for a local farm, focusing on sustainability and direct-to-consumer sales.",
      services: ["E-commerce", "Web Design", "SEO"],
      challenge: "Enable online sales and educate customers about sustainable farming.",
      results: [
        "First online sales within 2 weeks",
        "Increased customer education and engagement"
      ],
      bg: "bg-green-600"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeBg = projects[activeIndex].bg;

  // Dynamic background style for each project
  const bgStyles = [
    'bg-gradient-to-br from-orange-accent via-orange-100 to-background',
    'bg-gradient-to-br from-blue-500 via-blue-100 to-background',
    'bg-gradient-to-br from-green-600 via-green-100 to-background'
  ];
  const activeBgStyle = bgStyles[activeIndex];

  return (
    <section className={`py-20 px-4 transition-colors duration-500 ${activeBgStyle}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-8">
            Our Work
          </h2>
        </div>
        {/* Carousel */}
        <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col lg:flex-row"
            >
              {/* Project Image/Info */}
              <div className="lg:w-1/2 bg-gray-100 min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {projects[activeIndex].client}
                  </h3>
                  <h4 className="text-xl font-semibold text-orange-accent mb-6">
                    {projects[activeIndex].title}
                  </h4>
                  <div className="bg-orange-accent/10 p-6 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Project Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 bg-background">
                <div className="space-y-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Client:</h5>
                    <p className="text-muted-foreground">{projects[activeIndex].client}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Services:</h5>
                    <div className="flex flex-wrap gap-2">
                      {projects[activeIndex].services.map((service) => (
                        <span 
                          key={service}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Challenge:</h5>
                    <p className="text-muted-foreground text-sm">
                      {projects[activeIndex].challenge}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground mb-2">Results:</h5>
                    <ul className="text-muted-foreground text-sm space-y-1">
                      {projects[activeIndex].results.map((result, idx) => (
                        <li key={idx}>• {result}</li>
                      ))}
                    </ul>
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-orange-accent text-orange-accent hover:bg-orange-accent hover:text-background"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, idx) => (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              key={idx}
              className={`w-3 h-3 rounded-full border-2 border-background focus:outline-none transition-colors duration-300 ${activeIndex === idx ? 'bg-background' : 'bg-background/50'}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
            ></motion.button>
          ))}
        </div>
        {/* Other Works Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-background mb-8">Other Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example other works - replace with real data as needed */}
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              className="bg-background rounded-lg p-6 shadow"
            >
              <h4 className="text-lg font-semibold text-orange-accent mb-2">Branding for Lusaka Eats</h4>
              <p className="text-muted-foreground text-sm">Logo, brand identity, and social media kit for a local food delivery startup.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              className="bg-background rounded-lg p-6 shadow"
            >
              <h4 className="text-lg font-semibold text-orange-accent mb-2">Mobile App for EduZambia</h4>
              <p className="text-muted-foreground text-sm">UI/UX design and development for an educational app serving Zambian schools.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              className="bg-background rounded-lg p-6 shadow"
            >
              <h4 className="text-lg font-semibold text-orange-accent mb-2">Digital Marketing for Green Energy Co.</h4>
              <p className="text-muted-foreground text-sm">SEO, content, and paid ads for a renewable energy company.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;