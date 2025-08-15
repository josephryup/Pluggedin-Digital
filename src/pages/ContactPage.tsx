import { Mail, Phone, MapPin, Users } from "lucide-react";

const team = [
  {
    name: "Joseph Ryup",
    role: "Lead Designer",
    email: "joseph@pluggedin.digital",
  },
  {
    name: "Loveness Phiri",
    role: "Client Success",
    email: "loveness@pluggedin.digital",
  },
];

const ContactPage = () => (
  <div className="min-h-screen py-20 px-4 bg-background">
    <div className="max-w-3xl mx-auto">
      {/* Intro Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bebas text-green-glow mb-4 drop-shadow-lg">Contact Us</h1>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 font-poppins">Get in Touch</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-4 font-poppins">
          We’d love to hear from you! Fill out the form below or reach out directly to our team.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-green-200">
          <h3 className="text-xl font-bebas text-green-glow mb-4">Contact Information</h3>
          <ul className="space-y-4 font-poppins">
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-green-glow" /> <span><strong>Email:</strong> hello@pluggedin.digital</span></li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-green-glow" /> <span><strong>Phone:</strong> +260 123 456 789</span></li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-green-glow" /> <span><strong>Address:</strong> Lusaka, Zambia</span></li>
            <li><strong>Business Hours:</strong> Mon-Fri: 8am-5pm</li>
          </ul>
        </div>
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-green-200">
          <h3 className="text-xl font-bebas text-green-glow mb-4">Our Team</h3>
          <ul className="space-y-4 font-poppins">
            {team.map((member, idx) => (
              <li key={idx} className="flex flex-col items-start">
                <span className="font-bold text-green-glow">{member.name}</span>
                <span className="text-xs text-muted-foreground mb-1">{member.role}</span>
                <span className="text-xs"><Mail className="inline w-4 h-4 mr-1 text-green-glow" /> {member.email}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-background rounded-2xl shadow-lg p-10 border border-green-100 mb-16">
        <h3 className="text-2xl font-bebas text-green-glow mb-6">Send Us a Message</h3>
        <form className="space-y-6 text-left">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg border border-border bg-background focus:border-green-glow outline-none font-poppins" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg border border-border bg-background focus:border-green-glow outline-none font-poppins" />
          <input type="tel" placeholder="Your Phone" className="w-full p-4 rounded-lg border border-border bg-background focus:border-green-glow outline-none font-poppins" />
          <input type="text" placeholder="Company" className="w-full p-4 rounded-lg border border-border bg-background focus:border-green-glow outline-none font-poppins" />
          <select className="w-full p-4 rounded-lg border border-border bg-background font-poppins">
            <option value="">Service Interested In</option>
            <option value="web">Web Design & Development</option>
            <option value="seo">SEO & Digital Marketing</option>
            <option value="it">IT Support & Consulting</option>
            <option value="other">Other</option>
          </select>
          <textarea placeholder="Your Message" className="w-full p-4 rounded-lg border border-border bg-background font-poppins" rows={5}></textarea>
          <button type="submit" className="w-full p-4 rounded-full bg-green-glow text-background font-bold shadow hover:bg-green-600 transition-colors">Send Message</button>
        </form>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h4 className="text-xl font-bold text-green-glow mb-4 font-poppins">Want to work with us?</h4>
        <a href="/portfolio" className="inline-block px-8 py-4 rounded-full bg-green-glow text-background font-bold shadow hover:bg-green-600 transition-colors font-poppins">View Our Work</a>
      </div>
    </div>
  </div>
);

export default ContactPage;