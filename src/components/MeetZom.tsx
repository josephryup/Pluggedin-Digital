import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MeetZion = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-gradient-to-br from-background via-card to-background relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-green-glow/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-glow mb-8">
            Meet Zion
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Character/Mascot */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-200 h-200 bg-green-glow rounded-2xl flex items-center justify-center text-8xl font-bold text-background shadow-2xl shadow-green-glow/50">
                <img
                  src="/zion full.png"
                  alt="Pluggedin Digital Mascot"
                  className="w-143.95 h-169 "
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-accent rounded-full flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-accent rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Your digital plug, design genius, and all-around tech wizard
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Zion is our digital mascot and the creative force behind every project.
              Always plugged in, always innovating, and ready to transform your digital presence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-green-glow rounded-full"></div>
                <span className="text-foreground">Expert in modern web technologies</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-green-glow rounded-full"></div>
                <span className="text-foreground">24/7 digital innovation mindset</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-green-glow rounded-full"></div>
                <span className="text-foreground">Powered by creativity and coffee</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-green-glow text-background hover:bg-green-glow/90 font-semibold shadow-lg shadow-green-glow/25"
            >
              Say Hi to Zion →
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default MeetZion;