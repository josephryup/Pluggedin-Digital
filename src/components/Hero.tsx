import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-br from-background via-background to-card flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-20 left-20 w-64 h-64 bg-green-glow/20 rounded-full blur-3xl animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"
      />

      {/* Main heading */}
      <div className="space-y-6 max-w-4xl">
        <p className="text-foreground/80 text-lg">Welcome to</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Pluggedin Digital
        </h1>
        {/* mascot/Icon */}
        <div className="mb-8 relative">
          <img
            src="/zion 1.png"
            alt="Pluggedin Digital Mascot"
            className="w-143.95 h-169 "
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Zambia's Digital Plug
          </h2>
          <h3 className="text-xl md:text-2xl font-bold">
            <span className="text-yellow-accent">Global Reach.</span>
            <span className="text-green-glow"> Local Sauce</span>
          </h3>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          From web design and SEO to IT support & digital marketing, we help your
          business plug into success.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-12">
        <Button
          size="lg"
          className="bg-green-glow text-background hover:bg-green-glow/90 font-semibold px-8 py-3 text-lg shadow-lg shadow-green-glow/25"
        >
          Let's Build
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;