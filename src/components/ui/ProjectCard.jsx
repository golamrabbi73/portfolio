import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

/**
 * Project card for the Projects grid
 */
export default function ProjectCard({ project }) {
  return (
    <div className="card bg-base-100 border border-base-content/10 overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <figure className="overflow-hidden relative">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </figure>

      <div className="card-body p-6">
        <h3 className="font-display font-bold text-xl leading-snug">
          {project.name}
        </h3>
        <p className="text-base-content/60 text-sm leading-relaxed mt-1">
          {project.shortDesc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline text-accent border-accent/30 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between items-center mt-5">
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