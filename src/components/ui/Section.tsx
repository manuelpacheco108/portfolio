import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
    </section>
  );
}
