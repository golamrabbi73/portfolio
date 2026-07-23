"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import {
  FaReact,
  FaServer,
  FaTools,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Responsive Design",
    ],
  },

  {
    title: "Backend & Database",
    icon: <FaServer />,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "MongoDB",
      "Authentication",
      "JWT",
      "Firebase",
    ],
  },

  {
    title: "Tools & Workflow",
    icon: <FaTools />,
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vercel",
      "Netlify",
      "Postman",
      "Figma",
    ],
  },

  {
    title: "Currently Learning",
    icon: <FaDatabase />,
    skills: [
      "Advanced TypeScript",
      "System Design",
      "Cloud Deployment",
      "AI Integration",
      "Scalable Architecture",
    ],
  },
];

const techIcons = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-100">
      <Container>
        <SectionTitle
          eyebrow="Technical Expertise"
          title="Skills & Technologies"
          subtitle="Technologies I use to build modern, scalable and user-focused applications."
        />

        {/* Skill Categories */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-3xl border border-base-content/10 bg-base-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                  {cat.icon}
                </div>

                <h3 className="font-display text-xl font-bold">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-base-content/10 bg-base-100 px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Cloud */}
        <div className="mt-20">
          <h3 className="mb-8 text-center font-display text-xl font-bold">
            My Everyday Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-3 rounded-2xl border border-base-content/10 bg-base-200 px-5 py-3 transition hover:border-accent hover:text-accent"
              >
                <span className="text-xl">{tech.icon}</span>

                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
