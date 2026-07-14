"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

// Scroll-into-view reveal, powered by Motion's useInView. It renders AS the
// element you pass via `as` (carrying className + any extra props), so it slots
// in wherever the old GSAP [data-reveal] attribute lived without adding a
// wrapper div that would break grid/flex layouts.
//
// iOS-safety: instead of `whileInView` (which on iOS Safari can fail to fire
// when the element is already on screen at load, leaving content stuck at
// opacity 0), we drive visibility from a useInView flag AND a mount fallback:
// if the observer hasn't reported the element visible shortly after mount, we
// reveal it anyway. Content can never get stuck invisible.
const hidden = { opacity: 0.001, y: 28 };
const shown = { opacity: 1, y: 0 };
const revealStyle = { willChange: "transform, opacity" };

export default function Reveal({ as = "div", className, children, delay = 0, ...rest }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [fallbackShown, setFallbackShown] = useState(false);

  // Safety net: reveal after a short delay no matter what the observer does.
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setFallbackShown(true), 600);
    return () => clearTimeout(t);
  }, [reduce]);

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as];
  const visible = inView || fallbackShown;
  return (
    <MotionTag
      ref={ref}
      className={className}
      style={revealStyle}
      initial={hidden}
      animate={visible ? shown : hidden}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
