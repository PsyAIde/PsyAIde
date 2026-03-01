import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image src={logo} alt="PsyAIde" className="h-10 w-auto mb-4 brightness-0 invert" unoptimized />
            <p className="text-sm opacity-70 max-w-md leading-relaxed font-body">
              Structured Intelligence for Mental Health. PsyAIde is building the AI infrastructure layer for psychiatric diagnostic reasoning.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold font-body mb-4 opacity-90">Pages</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Ethos", path: "/ethos" },
                { label: "Contact Us", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold font-body mb-4 opacity-90">Contact</h4>
            <a
              href="mailto:hello@psyaide.ai"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity font-body"
            >
              hello@psyaide.ai
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50 font-body">
            © {new Date().getFullYear()} PsyAIde. All rights reserved.
          </p>
          <p className="text-xs opacity-50 font-body italic">
            Longitudinal Insight for Psychiatric Care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
