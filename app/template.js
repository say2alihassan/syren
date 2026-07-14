"use client";
import { motion, useReducedMotion } from "motion/react";

// Next.js App Router renders template.js fresh on every navigation (unlike
// layout.js, which persists), so it's the natural seam for route enter
// animations. Each page fades and eases up into place as you move between
// routes, on top of the in-page GSAP scroll reveals. Collapses to an instant,
// static render under prefers-reduced-motion.
const wrapStyle = { willChange: "transform, opacity" };

export default function Template({ children }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      style={wrapStyle}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
