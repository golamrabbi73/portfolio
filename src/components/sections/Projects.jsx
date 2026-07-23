"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-base-200">
      <Container>
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of real-world projects that showcase my skills"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
