import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-card border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-glow rounded-lg flex items-center justify-center text-background font-bold">
                P
              </div>
              <span className="text-lg font-bold text-foreground">Pluggedin Digital</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Zambia's Digital Plug. Global Reach, Local Sauce. We help businesses 
              plug into digital success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-green-glow cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-green-glow cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-green-glow cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-green-glow cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">Web Design</li>
              <li className="text-muted-foreground text-sm">SEO</li>
              <li className="text-muted-foreground text-sm">IT Support</li>
              <li className="text-muted-foreground text-sm">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-glow" />
                <span className="text-muted-foreground text-sm">hello@pluggedin.digital</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-glow" />
                <span className="text-muted-foreground text-sm">+260 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-green-glow" />
                <span className="text-muted-foreground text-sm">Lusaka, Zambia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Pluggedin Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-green-glow transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;