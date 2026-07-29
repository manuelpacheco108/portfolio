export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-border bg-bg px-2.5 py-0.5 text-xs font-medium text-muted">
      {label}
    </span>
  );
}
