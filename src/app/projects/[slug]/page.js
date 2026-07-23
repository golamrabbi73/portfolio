import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) return {};

  return {
    title: `${project.name} | Golam Rabbi`,
    description: project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) return notFound();

  return (
    <section className="min-h-screen bg-base-100 py-24">
      <Container size="narrow">
        {/* Back */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          <FaArrowLeft />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-5 flex flex-wrap gap-3">
            <span className="badge badge-outline border-accent/40 text-accent">
              {project.category}
            </span>

            {project.featured && (
              <span className="badge bg-accent text-accent-content">
                Featured Project
              </span>
            )}
          </div>

          <h1 className="font-display text-4xl leading-tight font-black md:text-5xl">
            {project.name}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-base-content/70">
            {project.shortDesc}
          </p>
        </div>

        {/* Image */}
        {project.image && (
          <div className="relative mb-12 h-[300px] overflow-hidden rounded-3xl border border-base-content/10 md:h-[500px]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Buttons */}
        <div className="mb-14 flex flex-wrap gap-4">
          {project.liveLink && (
            <Button
              href={project.liveLink}
              external
              variant="accent"
            >
              <FaExternalLinkAlt />
              Live Demo
            </Button>
          )}

          {project.githubClient && (
            <Button
              href={project.githubClient}
              external
              variant="outline"
            >
              <FaGithub />
              Client Code
            </Button>
          )}

          {project.githubServer && (
            <Button
              href={project.githubServer}
              external
              variant="outline"
            >
              <FaGithub />
              Server Code
            </Button>
          )}
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="mb-4 font-display text-2xl font-bold">
            Project Overview
          </h2>

          <p className="leading-relaxed text-base-content/70">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="mb-5 font-display text-2xl font-bold">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-base-content/10 bg-base-200 p-3 text-sm font-medium transition hover:border-accent"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        {project.challenges?.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold">
              <FaLightbulb className="text-accent" />
              Challenges & Solutions
            </h2>

            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-2xl bg-base-200 p-5"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-accent" />

                  <p className="text-sm leading-relaxed text-base-content/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Improvements */}
        {project.improvements?.length > 0 && (
          <div>
            <h2 className="mb-5 font-display text-2xl font-bold">
              Future Improvements
            </h2>

            <ul className="space-y-3">
              {project.improvements.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm text-base-content/70"
                >
                  <span className="text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}