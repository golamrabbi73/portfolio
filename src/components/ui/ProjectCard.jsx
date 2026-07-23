"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <div className="group h-full overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {project.image && !project.image.startsWith("PASTE_") ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 via-base-200 to-primary/10">
            <span className="px-5 text-center font-display font-bold text-base-content/40">
              {project.name}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Featured */}
        {project.featured && (
          <div className="absolute top-4 left-4 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-content">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex min-h-[350px] flex-col p-6">
        {/* Category */}
        {project.category && (
          <p className="mb-3 text-xs font-semibold tracking-widest text-accent uppercase">
            {project.category}
          </p>
        )}

        {/* Project Name */}
        <h3 className="font-display text-xl leading-tight font-bold transition-colors group-hover:text-accent">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-base-content/70">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags?.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center justify-between pt-8">
          {/* Details */}
          <Link
            href={`/projects/${project.slug}`}
            className="btn btn-accent btn-sm inline-flex items-center gap-2 rounded-full px-5"
          >
            Details
            <FaArrowRight />
          </Link>

          {/* External Links */}
          <div className="flex items-center gap-1">
            {/* Live Demo */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="btn btn-ghost btn-circle btn-sm"
              >
                <FaExternalLinkAlt className="text-accent" />
              </a>
            )}

            {/* GitHub Repository */}
            {project.githubClient && (
              <a
                href={project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Repository"
                className="btn btn-ghost btn-circle btn-sm"
              >
                <FaGithub className="text-accent" />
              </a>
            )}

            {/* Backend Available */}
            {project.githubServer && (
              <span
                title="Backend Available"
                className="btn btn-ghost btn-circle btn-sm cursor-default"
              >
                <FaServer className="text-accent" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}