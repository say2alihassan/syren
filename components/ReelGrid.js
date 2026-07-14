"use client";
import { useEffect, useRef, useState } from "react";

// Self-hosted reel grid. Each tile is a vertical 9:16 <video>:
//   - poster shows instantly (a frame pulled from the clip with ffmpeg)
//   - muted autoplay begins only when the tile scrolls into view (Intersection
//     Observer), and pauses when it leaves — so we never have several clips
//     playing offscreen, which keeps it smooth and battery-friendly
//   - hover unmutes on desktop; a tap toggles sound on touch
//   - under prefers-reduced-motion nothing autoplays: the poster stays with a
//     play button, and the native controls appear on click
// REELS lives here (not the page) so the Work page stays declarative.
const REELS = [
  {
    src: "/reels/viral-hack.mp4",
    poster: "/reels/viral-hack.jpg",
    tag: "Growth strategy",
    title: "The #1 hack for going viral",
  },
  {
    src: "/reels/results-video", // replaced below with the results still card
  },
  {
    src: "/reels/veneers-part4.mp4",
    poster: "/reels/veneers-part4.jpg",
    tag: "Aesthetic dentistry",
    title: "Veneers series — the episode everyone waited for",
  },
  {
    src: "/reels/back-better.mp4",
    poster: "/reels/back-better.jpg",
    tag: "Agency brand",
    title: "Too busy making everyone else go viral",
  },
];

function Reel({ src, poster, tag, title }) {
  const ref = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const unmute = () => {
    const v = ref.current;
    if (v) v.muted = false;
  };
  const mute = () => {
    const v = ref.current;
    if (v) v.muted = true;
  };
  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    if (reduced && v.paused) v.play().catch(() => {});
  };

  return (
    <figure className="reel" onMouseEnter={unmute} onMouseLeave={mute} onClick={toggleSound}>
      <div className="reel-media">
        <video
          ref={ref}
          className="reel-video"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          controls={reduced}
        />
        <span className="reel-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </span>
      </div>
      <figcaption className="reel-cap">
        <span className="reel-tag">{tag}</span>
        <span className="reel-title">{title}</span>
      </figcaption>
    </figure>
  );
}

function ResultsCard() {
  return (
    <a
      className="reel reel--result"
      href="https://www.instagram.com/syrenagency/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="reel-media">
        <img className="reel-video" src="/reels/results-63k.jpg" alt="TikTok analytics: 0 to 63,466 followers in 3 months" />
        <span className="reel-play reel-play--out" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
        </span>
      </div>
      <figcaption className="reel-cap">
        <span className="reel-tag">Proof</span>
        <span className="reel-title">0 → 63K followers in 3 months. See it on Instagram.</span>
      </figcaption>
    </a>
  );
}

export default function ReelGrid() {
  return (
    <div className="reel-grid">
      <Reel {...REELS[0]} />
      <ResultsCard />
      <Reel {...REELS[2]} />
      <Reel {...REELS[3]} />
    </div>
  );
}
