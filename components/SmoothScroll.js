"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";

// Mounted once in the root layout. Smooth scrolling that stays perfectly in
// sync with GSAP/ScrollTrigger by running BOTH off a single clock — GSAP's
// ticker — instead of two competing requestAnimationFrame loops (the previous
// setup, which caused the jitter). This is Lenis's recommended GSAP bridge:
//   - lenis.raf is driven by gsap.ticker (one frame source)
//   - gsap.ticker.lagSmoothing(0) so a stutter never desyncs the two
//   - ScrollTrigger.update fires on every Lenis scroll event
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let lenis;
    let onTick;
    let mounted = true;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.15,
        // gentle exponential ease-out — smooth without feeling floaty/laggy
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        // let native touch scrolling drive on phones/tablets (feels right there)
        syncTouch: false,
      });

      // keep ScrollTrigger's positions in lockstep with the smoothed scroll
      lenis.on("scroll", ScrollTrigger.update);

      // drive Lenis from GSAP's ticker — one clock for everything
      onTick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);

      window.__lenis = lenis; // let route changes reset scroll (see template.js)
    });

    return () => {
      mounted = false;
      if (onTick) gsap.ticker.remove(onTick);
      if (lenis) lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return null;
}
