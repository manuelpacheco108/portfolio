import { useState } from "react";
import { useLocale } from "../../hooks/useLocale";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { links } from "../../content/links";
import { cn } from "../../lib/cn";

const SECTION_IDS = [
  "services",
  "projects",
  "skills",
  "experience",
  "contact",
] as const;

export function Navbar() {
  const { content, locale, setLocale } = useLocale();
  const active = useScrollSpy(SECTION_IDS);
  const [open, setOpen] = useState(false);

  const items = SECTION_IDS.map((id) => ({ id, label: content.nav[id] }));

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Home">
          <img src={links.logo} alt="" className="h-8 w-8 rounded-lg" />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            Manuel Pacheco
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active === id ? "text-accent" : "text-muted hover:text-ink",
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "es" : "en")}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium text-ink hover:border-accent hover:text-accent"
            aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
          >
            {locale === "en" ? "ES" : "EN"}
          </button>

          <button
            type="button"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-md border border-border bg-surface md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className="h-0.5 w-4 bg-ink" />
            <span className="h-0.5 w-4 bg-ink" />
            <span className="h-0.5 w-4 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          {items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-6 py-3 text-sm font-medium",
                active === id ? "text-accent" : "text-ink",
              )}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
