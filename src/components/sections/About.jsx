"use client";

import Image from "next/image";
import { FaCode, FaRocket, FaDatabase, FaLaptopCode } from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const stats = [
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "100%",
    label: "Problem Driven",
  },
];

const highlights = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Writing maintainable and scalable solutions",
  },
  {
    icon: <FaRocket />,
    title: "Modern Stack",
    desc: "React, Next.js, TypeScript ecosystem",
  },
  {
    icon: <FaDatabase />,
    title: "Full Stack",
    desc: "APIs, databases and backend integration",
  },
  {
    icon: <FaLaptopCode />,
    title: "User Focused",
    desc: "Building smooth digital experiences",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-base-200 py-24">
      <Container>
        <SectionTitle eyebrow="Who I Am" title="About Me" />

        <div className="mt-12 grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-5 rounded-3xl bg-accent/10 blur-2xl" />

            <div className="relative">
              <div className="absolute top-5 left-5 h-full w-full rounded-3xl border-2 border-accent/30" />

              <Image
                src="/golamrabbi.png"
                alt="Golam Rabbi - Developer"
                width={420}
                height={420}
                className="relative z-10 rounded-3xl object-cover shadow-2xl"
              />

              <div className="absolute right-0 bottom-6 z-20 rounded-2xl border border-base-content/10 bg-base-100 px-5 py-4 shadow-xl">
                <p className="text-xs text-base-content/50">
                  Currently Building
                </p>

                <p className="font-bold text-accent">
                  GeoLog Platform
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-3xl leading-tight font-bold md:text-4xl">
              Building scalable web applications with modern technologies.
            </h3>

            <p className="mt-3 mb-6 font-semibold text-accent">
              Frontend Developer | React.js | Next.js
            </p>

            <div className="space-y-5 leading-relaxed text-base-content/70">
              <p>
                I am{" "}
                <strong className="text-base-content">Golam Rabbi</strong>, a
                passionate web developer focused on creating modern, responsive
                and high-performance web applications.
              </p>

              <p>
                My journey started with HTML, CSS and JavaScript, and gradually
                evolved into building complete applications using
                <strong className="text-base-content">
                  {" "}
                  React, Next.js, TypeScript and Node.js.
                </strong>
              </p>

              <p>
                Currently, I am developing
                <strong className="text-base-content"> GeoLog</strong> — an
                enterprise platform for subsurface data and core sample
                management in the petroleum and mining domain.
              </p>

              <p>
                I enjoy solving complex problems, designing clean user
                interfaces and turning ideas into reliable digital products.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-base-content/10 bg-base-100 p-4 transition hover:border-accent/40"
                >
                  <div className="mb-2 text-xl text-accent">{item.icon}</div>

                  <h4 className="font-bold">{item.title}</h4>

                  <p className="mt-1 text-sm text-base-content/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/#contact">Let's Work Together</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-base-content/10 bg-base-100 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2"
            >
              <h4 className="text-4xl font-black text-accent">
                {stat.value}
              </h4>

              <p className="mt-2 text-sm text-base-content/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

