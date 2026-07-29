interface SectionHeadingProps {
  heading: string;
  blurb?: string;
}

export function SectionHeading({ heading, blurb }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {heading}
      </h2>
      {blurb && <p className="mt-2 text-muted">{blurb}</p>}
    </div>
  );
}
