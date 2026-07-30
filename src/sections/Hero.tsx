import { useLocale } from "../hooks/useLocale";
//import { links } from "../content/links";
import { RandomOrb } from "../components/ui/RandomOrb";

// No entrance animation here: the hero holds the LCP element, and fading it
// in from opacity 0 measurably delays LCP. Below-fold sections animate.
export function Hero() {
  const { content } = useLocale();
  const { hero } = content;

  return (
    <section id="top" className="border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <div className="flex items-center gap-4">
          {/* <img
            src={links.logo}
            alt="Manuel Pacheco logo"
            className="h-14 w-14 rounded-2xl"
          /> */}
          <RandomOrb />
        </div>
        <div>
          <p className="text-lg text-muted">{hero.greeting}</p>
          <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
            {hero.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-accent">{hero.title}</p>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {hero.pitch}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent/90"
          >
            {hero.ctaContact}
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent hover:text-accent"
          >
            {hero.ctaProjects}
          </a>
        </div>
      </div>
    </section>
  );
}
