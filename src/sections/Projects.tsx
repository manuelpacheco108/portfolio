import { useLocale } from "../hooks/useLocale";
import type { Project } from "../content/types";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { ExternalLinkIcon, GitHubIcon } from "../components/ui/Icons";
import { FadeIn } from "../components/FadeIn";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-shadow hover:shadow-md">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="aspect-video w-full border-b border-border object-cover object-top"
          />
        ) : (
          <div
            aria-hidden
            className="flex aspect-video w-full items-center justify-center border-b border-border bg-gradient-to-br from-accent/10 via-bg to-accent/5"
          >
            <span className="text-4xl font-bold tracking-tight text-accent/40">
              {project.name}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm font-medium text-accent">{project.tagline}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:underline"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.availabilityNote && (
              <span className="text-xs text-muted">
                {project.availabilityNote}
              </span>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  const { content } = useLocale();
  const { heading, blurb, items } = content.projects;

  return (
    <Section id="projects" className="bg-bg">
      <SectionHeading heading={heading} blurb={blurb} />
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
