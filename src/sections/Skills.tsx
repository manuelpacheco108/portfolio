import { useLocale } from "../hooks/useLocale";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function Skills() {
  const { content } = useLocale();
  const { heading, blurb, groups } = content.skills;

  return (
    <Section id="skills" className="border-y border-border bg-surface">
      <SectionHeading heading={heading} blurb={blurb} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-bg p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <ul className="space-y-1.5 text-sm text-ink">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
