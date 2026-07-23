"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (!isHome) return;
      const sections = ["home", "about", "skills", "education", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const isActive = (href) => {
    if (!isHome) return false;
    const hash = href.split("/").pop();
    return activeHash === hash;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-300/95 backdrop-blur-md shadow-lg border-b border-base-content/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-extrabold text-2xl text-accent tracking-tight"
          >
            &lt;GR<span className="text-base-content">/&gt;</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-accent bg-accent/10"
                      : "text-base-content/70 hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <a
            href="/#contact"
            className="hidden lg:inline-flex btn btn-accent btn-sm rounded-full px-6 font-semibold"
          >
            Hire Me
          </a>

          {/* Mobile Drawer */}
          <div className="lg:hidden">
            <div className="drawer drawer-end">
              <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label
                  htmlFor="nav-drawer"
                  className="btn btn-ghost btn-square btn-sm"
                  aria-label="Open menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-[100]">
                <label htmlFor="nav-drawer" aria-label="close sidebar" className="drawer-overlay" />
                <ul className="menu bg-base-200 min-h-full w-72 p-6 gap-2">
                  <li className="mb-4">
                    <Link href="/" className="font-display font-extrabold text-2xl text-accent">
                      YN<span className="text-base-content">.</span>
                    </Link>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`font-medium text-base ${
                          isActive(link.href) ? "text-accent bg-accent/10" : "text-base-content/80"
                        }`}
                        onClick={() => {
                          document.getElementById("nav-drawer").checked = false;
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li className="mt-4">
                    <a href="/#contact" className="btn btn-accent rounded-full">
                      Hire Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}