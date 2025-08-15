import { motion } from "framer-motion";

const WhatWeDo = () => {
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
            What we do
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            Your Digital Plug for Everything Online
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Whether you're a startup, SME, or established brand — we offer scalable solutions to grow your digital presence.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Web Design",
              description: "Custom websites that convert visitors into customers"
            },
            {
              title: "SEO",
              description: "Get found by your ideal customers on search engines"
            },
            {
              title: "IT Support",
              description: "Reliable technical support to keep your business running"
            },
            {
              title: "Digital Marketing",
              description: "Grow your reach and engagement across all platforms"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-green-glow/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-glow/20"
            >
              <div className="w-12 h-12 bg-green-glow/20 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-glow rounded"></div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhatWeDo;