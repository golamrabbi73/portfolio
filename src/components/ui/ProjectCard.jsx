import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/**
 * Project card for the Projects grid
 */
export default function ProjectCard({ project }) {
  return (
    <div className="card h-full bg-base-100 border border-base-content/10 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <figure className="relative overflow-hidden h-48">
        {project.image && !project.image.startsWith("PASTE_") ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-200 to-accent/10">
            <span className="font-display font-bold text-base-content/30 text-sm tracking-wide text-center px-4">
              {project.name}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </figure>

      {/* Content */}
      <div className="card-body p-6 flex flex-col">
        <h3 className="font-display font-bold text-xl leading-snug min-h-[3.5rem]">
          {project.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-base-content/70 line-clamp-3 min-h-[4.5rem]">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline border-accent/30 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="card-actions justify-between items-center mt-auto pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="btn btn-accent btn-sm rounded-full px-5"
          >
            View Details
          </Link>

          <div className="flex gap-2">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-square"
              title="Live Demo"
            >
              <FaExternalLinkAlt className="text-accent" />
            </a>

            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm btn-square"
              title="GitHub"
            >
              <FaGithub className="text-accent" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}