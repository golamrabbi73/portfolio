import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} - Golam Rabbi`,
    description: project.shortDesc,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <section className="py-24 bg-base-100 min-h-screen">
      <Container size="narrow">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-8 hover:underline"
        >
          <FaArrowLeft /> Back to Projects
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-3">
          {project.name}
        </h1>
        <p className="text-base-content/60 text-lg mb-6">{project.shortDesc}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline text-accent border-accent/30 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveLink && (
            <Button href={project.liveLink} external variant="accent">
              <FaExternalLinkAlt /> Live Demo
            </Button>
          )}
          {project.githubClient && (
            <Button href={project.githubClient} external variant="outline">
              <FaGithub /> Client Code
            </Button>
          )}
          {project.githubServer && (
            <Button href={project.githubServer} external variant="outline">
              <FaGithub /> Server Code
            </Button>
          )}
        </div>

        <div className="prose max-w-none mb-10">
          <h2 className="font-display font-bold text-xl mb-3">Overview</h2>
          <p className="text-base-content/70 leading-relaxed">{project.description}</p>
        </div>

        <div className="mb-6">
          <h3 className="font-display font-bold text-lg mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge badge-outline border-accent/30 text-accent/70 text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.challenges?.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display font-bold text-lg mb-3">Challenges & Decisions</h3>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 text-sm leading-relaxed">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {project.improvements?.length > 0 && (
          <div>
            <h3 className="font-display font-bold text-lg mb-3">Future Improvements</h3>
            <ul className="list-disc list-inside space-y-2 text-base-content/70 text-sm leading-relaxed">
              {project.improvements.map((imp, i) => (
                <li key={i}>{imp}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
