import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import { getCurrentYear } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-base-300 border-t border-base-content/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display font-extrabold text-3xl text-accent"
            >
              &lt;GR<span className="text-base-content">/&gt;</span>
            </Link>
            <p className="text-base-content/50 text-sm leading-relaxed mt-3">
              Full Stack Developer crafting clean, performant, and beautiful web
              experiences. Available for freelance & full-time work.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-base-content/60 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base-content/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-widest text-base-content/60 mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li>
                <a
                  href="mailto:yourname@email.com"
                  className="hover:text-accent transition-colors"
                >
                  golamrabbi73hr@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801608177973"
                  className="hover:text-accent transition-colors"
                >
                  +880 1608-177973
                </a>
              </li>
              <li>Sirajganj sadar, Sirajganj, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-content/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-base-content/40 text-sm text-center">
            © {getCurrentYear()} Golam Rabbi. All rights reserved.
          </p>
          <p className="text-base-content/40 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-accent text-xs" /> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}