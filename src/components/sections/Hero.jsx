"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import SocialLinks from "@/components/shared/SocialLinks";
import Button from "@/components/ui/Button";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "Next.js Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="hero-gradient relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />

              Available for opportunities
            </div>

            <h1 className="font-display text-5xl leading-tight font-black text-white md:text-6xl xl:text-7xl">
              Building
              <br />
              <span className="text-accent">Modern Web</span>
              <br />
              Applications
            </h1>

            <div className="mt-6 text-2xl font-semibold text-white/80">
              <span className="text-accent">{roles[index]}</span>
            </div>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              I am Golam Rabbi, a passionate developer specializing in React,
              Next.js and modern full-stack technologies. I build scalable,
              responsive and user-focused web applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* View Projects */}
              <Button
                href="/#projects"
                variant="outline"
                className="gap-2"
              >
                View Projects
                <FaArrowRight />
              </Button>

              {/* Download Resume */}
              <Button
                href="/my_resume.pdf"
                download
                className="gap-2"
              >
                <FaDownload />
                Download Resume
              </Button>
            </div>

            <div className="mt-10">
              <SocialLinks theme="light" />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl" />

              <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-accent/40 shadow-2xl md:h-96 md:w-96">
                <Image
                  src="/golamrabbi.png"
                  alt="Golam Rabbi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}