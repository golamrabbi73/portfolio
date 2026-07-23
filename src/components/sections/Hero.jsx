"use client";
import { useState, useEffect } from "react";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import SocialLinks from "@/components/shared/SocialLinks";
import Button from "@/components/ui/Button";
import Image from "next/image";

const roles = [
  "Full Stack Developer",
  "React JS Developer",
  "Next.js Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4">
              Hi, I'm{" "}
              <span className="text-accent">Golam Rabbi</span>
            </h1>

            <div className="text-2xl md:text-3xl font-display font-semibold text-white/80 mb-6 h-10">
              <span className="text-accent">{displayed}</span>
              <span className="cursor-blink text-accent">|</span>
            </div>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I build full-stack web applications with modern technologies -
              currently focused on the petroleum/mining/geology domain through
              my flagship project, GeoLog.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button href="/my_resume.pdf" className="glow gap-2">
                <FaDownload />
                Download Resume
              </Button>
              <Button href="/#projects" variant="outline">
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-white/40 text-sm font-medium">Find me on</span>
              <SocialLinks theme="light" />
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="float-animation relative">
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/40 relative glow">
                <Image
                  src="/golamrabbi.png"
                  alt="Golam Rabbi - Full Stack Developer"
                  className="w-full h-full object-cover"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
