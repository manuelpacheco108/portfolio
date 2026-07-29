import { useLocale } from "../hooks/useLocale";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Tag } from "../components/ui/Tag";
import { FadeIn } from "../components/FadeIn";

export function Services() {
  const { content } = useLocale();
  const { heading, blurb, items } = content.services;

  return (
    <Section id="services">
      <SectionHeading heading={heading} blurb={blurb} />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.1}>
            <article className="flex h-full flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-md">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
