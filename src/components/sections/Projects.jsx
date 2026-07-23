"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="bg-base-200 py-24"
    >
      <Container>
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="Real-world applications showcasing full-stack development, AI integration, and modern engineering practices."
        />

        {/* Featured */}
        {featuredProject && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-12"
          >
            <div className="overflow-hidden rounded-3xl border border-accent/20 bg-base-100 shadow-xl">
              <ProjectCard
                project={featuredProject}
                featuredLayout
              />
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}