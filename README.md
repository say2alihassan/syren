# SYREN — Next.js site

A premium, animated multi-page concept site for SYREN (personal branding agency for healthcare
experts), built with Next.js 14 (App Router). Smooth scrolling and scroll-triggered reveals via
Lenis + GSAP/ScrollTrigger, bespoke (non-repeated) CTA buttons, and a cursor-spotlight hero.

Pages: Home, About, Services, Work, Contact.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo (or run `npx vercel` from inside it).
2. Import the repo at https://vercel.com/new — Vercel auto-detects Next.js, no config needed.
3. Deploy. That's it.

## Notes

- The SYREN logo is rebuilt as a scalable SVG (`components/Logo.js`) matching the tag/speech-bubble
  mark and colour from the logo you shared, so it stays crisp at every size instead of shipping a
  raster copy. Swap in the original logo file at any time by dropping it in `public/` and updating
  `components/Logo.js`.
- Brand pink is set in `app/globals.css` as `--siren: #e11469` — sampled from the logo. Adjust that
  one variable to retune the whole palette.
- Copy throughout the site is drawn directly from Eloise Bratt's own bio and business description.
# syren
