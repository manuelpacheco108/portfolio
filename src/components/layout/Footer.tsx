import { useLocale } from "../../hooks/useLocale";
import { links } from "../../content/links";

export function Footer() {
  const { content } = useLocale();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} Manuel A. Pacheco Motoa ·{" "}
          {content.footer.note}
        </p>
        <div className="flex gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
