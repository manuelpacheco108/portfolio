import { useLocale } from "../hooks/useLocale";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { FadeIn } from "../components/FadeIn";

export function Experience() {
  const { content } = useLocale();
  const { heading, blurb, items } = content.experience;

  return (
    <Section id="experience">
      <SectionHeading heading={heading} blurb={blurb} />
      <div className="space-y-6">
        {items.map((item) => (
          <FadeIn key={item.title}>
            <article className="rounded-xl border border-border bg-surface p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {item.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              {item.impact && (
                <p className="mt-3 text-sm font-medium text-ink">
                  {item.impact}
                </p>
              )}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
