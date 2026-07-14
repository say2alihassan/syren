"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Next.js App Router renders template.js fresh on every navigation (unlike
// layout.js, which persists), so it's the natural seam for route enter
// animations.
//
// This deliberately uses a pure CSS animation (see .page-enter in globals.css)
// rather than a JS-driven motion.div. The old motion.div started the whole page
// at opacity:0 and relied on JS to animate it back to 1 — on iOS Safari, if that
// animation didn't run (hydration race / Motion hiccup), the entire page body
// stayed invisible and only the Nav + Footer (rendered outside {children})
// showed. A CSS keyframe is driven by the browser itself, so the content is
// guaranteed to end fully visible even if no JS runs. Respects reduced-motion
// via the @media rule on the class.
export default function Template({ children }) {
  const pathname = usePathname();

  // On every route change, snap the smoothed scroll back to the top so the new
  // page's enter animation starts from its hero (Lenis holds its own position).
  useEffect(() => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  // key forces the element (and its CSS animation) to re-run on each route.
  return (
    <div className="page-enter" key={pathname}>
      {children}
    </div>
  );
}
