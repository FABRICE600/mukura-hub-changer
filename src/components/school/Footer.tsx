import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-primary-foreground" style={{ background: "var(--gradient-dark)" }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* School Info */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">GS Mukura HY</h3>
            <div className="space-y-3 font-body text-sm text-primary-foreground/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                Mukura, Huye District, Southern Province, Rwanda
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                +250 780 000 000
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                info@gsmukura.rw
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/80">
              {["Home", "About Us", "Academics", "News", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="font-body text-sm text-primary-foreground/80 mb-3">
              Subscribe to our newsletter for updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold text-sm hover:brightness-110 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4 text-center font-body text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} GS Mukura HY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
