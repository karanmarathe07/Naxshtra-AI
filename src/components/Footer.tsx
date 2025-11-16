import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/naxshatra-ai", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/naxshatra_ai", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://linkedin.com/company/naxshatra-ai", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/naxshatra.ai", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@naxshatra-ai", label: "YouTube" },
  ];

  const companyLinks = [
    { label: "About", path: "/#about" },
    { label: "Team", path: "/#about" },
    { label: "Projects", path: "/projects" },
  ];

  const resourceLinks = [
    { label: "Blog", path: "/blog" },
    { label: "Discord", href: "https://discord.gg/naxshatra-ai" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              Naxshatra <span className="text-primary">AI</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Building the future of digital experiences through innovative solutions and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  {link.path ? (
                    <NavLink
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@naxshatra.ai" className="hover:text-primary transition-colors">
                  hello@naxshatra.ai
                </a>
              </li>
              <li>
                <a href="tel:+919423495350" className="hover:text-primary transition-colors">
                  +91 94234 95350
                </a>
              </li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naxshatra AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
