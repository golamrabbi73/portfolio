"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved Scroll Spy
useEffect(() => {
  if (!isHome) return;

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 150;

    let current = "home";

    navLinks.forEach((item) => {
      const section = document.getElementById(item.id);

      if (section) {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          current = item.id;
        }
      }
    });

    setActiveSection(current);
  };


  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () =>
    window.removeEventListener("scroll", handleScroll);

}, [isHome]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-base-100/85 backdrop-blur-xl border border-base-content/10 shadow-xl px-6 py-3"
                : "bg-transparent px-0 py-0"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl md:text-3xl font-extrabold tracking-tight"
            >
              <span className="text-accent">&lt;GR</span>
              <span className="text-base-content">/&gt;</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((item) => {
                const active =
                  isHome && activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "text-accent bg-accent/10"
                        : "text-base-content/70 hover:text-accent hover:bg-base-200"
                    }`}
                  >
                    {item.label}

                    {active && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-accent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full"
              >
                <FiDownload className="text-base" />
                Resume
              </a>

              <Link
                href="/#contact"
                className="btn btn-accent rounded-full"
              >
                Let's Talk
                <FiArrowUpRight />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden btn btn-ghost btn-circle"
              aria-label="Open Menu"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[999] lg:hidden transition-all duration-300 ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-80 bg-base-100 shadow-2xl transition-transform duration-300 ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-base-content/10">
            <Link
              href="/"
              onClick={closeMenu}
              className="font-display text-2xl font-extrabold"
            >
              <span className="text-accent">&lt;GR</span>
              <span className="text-base-content">/&gt;</span>
            </Link>

            <button
              onClick={closeMenu}
              className="btn btn-ghost btn-circle"
            >
              <HiOutlineX size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-5 py-6 gap-2">
                        {navLinks.map((item) => {
              const active =
                (isHome && activeSection === item.id) ||
                (!isHome && item.id === "projects");

              return (
                <Link
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                    active
                      ? "bg-accent/10 text-accent"
                      : "text-base-content/80 hover:bg-base-200 hover:text-accent"
                  }`}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  )}
                </Link>
              );
            })}

            <div className="divider my-4" />

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline rounded-full w-full"
              onClick={closeMenu}
            >
              <FiDownload />
              Download Resume
            </a>

            <Link
              href="/#contact"
              onClick={closeMenu}
              className="btn btn-accent rounded-full w-full mt-2"
            >
              Let's Talk
              <FiArrowUpRight />
            </Link>
          </nav>

          <div className="mt-auto border-t border-base-content/10 px-6 py-5">
            <p className="text-xs text-base-content/50 leading-relaxed">
              Building modern, responsive, and high-performance web
              applications with React, Next.js, and TypeScript.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}