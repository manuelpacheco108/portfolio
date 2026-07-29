import { useLocale } from "../hooks/useLocale";
import { links } from "../content/links";
import { Section } from "../components/ui/Section";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "../components/ui/Icons";
import { FadeIn } from "../components/FadeIn";

export function Contact() {
  const { content } = useLocale();
  const { contact } = content;

  const linkClass =
    "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent";

  return (
    <Section id="contact" className="border-t border-border bg-surface">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {contact.heading}
        </h2>
        <p className="mt-3 text-muted">{contact.blurb}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90"
          >
            <MailIcon className="h-4 w-4" />
            {contact.emailLabel}
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
            <LinkedInIcon className="h-4 w-4" />
            {contact.linkedinLabel}
          </a>
          <a href={links.github} target="_blank" rel="noreferrer" className={linkClass}>
            <GitHubIcon className="h-4 w-4" />
            {contact.githubLabel}
          </a>
          <a href={links.cvFile} download className={linkClass}>
            <DownloadIcon className="h-4 w-4" />
            {contact.cvLabel}
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">{links.email}</p>
      </FadeIn>
    </Section>
  );
}
