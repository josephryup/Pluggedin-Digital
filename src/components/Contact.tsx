import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 bg-contact-bg"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-8">
            Contact
          </h2>
        </div>

        <div className="bg-background rounded-lg shadow-2xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-muted border-border focus:border-green-glow"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-muted border-border focus:border-green-glow"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground font-medium">
                Subject
              </Label>
              <Input
                id="subject"
                placeholder="What's this about?"
                className="bg-muted border-border focus:border-green-glow"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                className="bg-muted border-border focus:border-green-glow resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-glow text-background hover:bg-green-glow/90 font-semibold py-4 text-lg shadow-lg shadow-green-glow/25"
            >
              Send Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground">hello@pluggedin.digital</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                <p className="text-muted-foreground">+260 123 456 789</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Lusaka, Zambia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;