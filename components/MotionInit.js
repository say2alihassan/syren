"use client";
import { useEffect } from "react";
import gsap from "gsap";

// Drop <MotionInit /> once at the bottom of every page. On mount it wires:
// - on-mount headline builds for [data-split] (never viewport-gated, so a
//   full-page screenshot at scroll 0 still shows the finished hero)
// - magnetic CTA physics via quickTo (.magnetic)
// - metric count-ups ([data-count])
// - the hero cursor spotlight ("dormant to lit" reveal)
// Scroll-into-view section reveals are handled separately by <Reveal> (Motion's
// whileInView) — see components/Reveal.js. Every effect here is cleaned up on
// unmount so navigating between routes never stacks duplicate ScrollTriggers.
// Everything degrades to a static, fully visible page under
// prefers-reduced-motion.
export default function MotionInit() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {});
    let cleanupHero = () => {};

    const hero = document.querySelector(".hero");
    if (hero && !reduced) {
      const onMove = (e) => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
        hero.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
      };
      hero.addEventListener("pointermove", onMove);
      cleanupHero = () => hero.removeEventListener("pointermove", onMove);
    }

    if (reduced) {
      return () => cleanupHero();
    }

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      ctx.add(() => {
        document.querySelectorAll("[data-split]").forEach((el) => {
          if (el.dataset.split === "done") return;
          const text = el.textContent;
          el.innerHTML = text
            .split(" ")
            .map(
              (w) =>
                `<span class="split-char" style="overflow:hidden;display:inline-block;"><span style="display:inline-block;">${w}&nbsp;</span></span>`
            )
            .join("");
          el.dataset.split = "done";
          const inner = el.querySelectorAll(".split-char > span");
          gsap.fromTo(inner, { yPercent: 110 }, { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.035, delay: 0.1 });
        });

        document.querySelectorAll("[data-count]").forEach((el) => {
          const target = el.textContent.trim();
          const num = parseFloat(target.replace(/[^0-9.]/g, ""));
          if (isNaN(num)) return;
          const suffix = target.replace(/[0-9.]/g, "");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: num,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%" },
            onUpdate: () => {
              el.textContent = Math.round(obj.val * 10) / 10 + suffix;
            },
          });
        });

        document.querySelectorAll(".magnetic").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3" });
          const onMove = (e) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.35);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
          };
          const onLeave = () => {
            xTo(0);
            yTo(0);
          };
          btn.addEventListener("pointermove", onMove);
          btn.addEventListener("pointerleave", onLeave);
        });

        ScrollTrigger.refresh();
      });
    });

    return () => {
      cleanupHero();
      ctx.revert();
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return null;
}
