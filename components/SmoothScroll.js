"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

// Mounted once in the root layout: bridges Lenis smooth scroll to GSAP's
// ticker (autoRaf: false pattern) so ScrollTrigger-driven reveals stay in
// sync with the smoothed scroll position across every route.
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    let ScrollTrigger;
    import("gsap/ScrollTrigger").then((mod) => {
      ScrollTrigger = mod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      lenis.on("scroll", ScrollTrigger.update);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
