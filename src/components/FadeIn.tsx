import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fade-and-rise entrance on scroll; plain fade when reduced motion is set. */
export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
