"use client";
import { motion, useReducedMotion } from "motion/react";

// Scroll-into-view reveal, powered by Motion's whileInView. It renders AS the
// element you pass via `as` (carrying className + any extra props), so it slots
// in wherever the old GSAP [data-reveal] attribute lived without adding a
// wrapper div that would break grid/flex layouts. Fires once, when ~20% of the
// element enters the viewport. Under prefers-reduced-motion it renders a plain,
// fully-visible element with no animation.
const variants = {
  hidden: { opacity: 0.001, y: 28 },
  visible: { opacity: 1, y: 0 },
};
const revealStyle = { willChange: "transform, opacity" };
const viewport = { once: true, amount: 0.2 };

export default function Reveal({ as = "div", className, children, delay = 0, ...rest }) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      style={revealStyle}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
