import { lazy, Suspense, useState } from "react";
import type { OrbState } from "thinking-orbs";

const ThinkingOrb = lazy(() =>
  import("thinking-orbs").then((m) => ({ default: m.ThinkingOrb })),
);

const STATES: readonly OrbState[] = [
  /* "working",
  "searching",
  "solving",
  "listening", */
  "composing",
  // "shaping",
];

/**
 * Decorative orb showing a random "thinking" state each visit.
 * Lazy-loaded so it never blocks first paint; the placeholder
 * reserves its footprint to avoid layout shift.
 */
export function RandomOrb() {
  const [state] = useState<OrbState>(
    () => STATES[Math.floor(Math.random() * STATES.length)],
  );

  return (
    <Suspense fallback={<div style={{ width: 64, height: 64 }} aria-hidden />}>
      <ThinkingOrb state={state} size={64} theme="light" />
    </Suspense>
  );
}
