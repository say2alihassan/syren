import Link from "next/link";
import Footer from "../../components/Footer";
import MotionInit from "../../components/MotionInit";
import Reveal from "../../components/Reveal";
import ReelGrid from "../../components/ReelGrid";

export const metadata = {
  title: "Work — SYREN",
  description: "Where SYREN's approach to personal branding for healthcare experts shows up: growth, partnerships and press.",
};

export default function Work() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Proof, not promises</span>
          <h1 className="display-1" data-split>Where the work shows up.</h1>
          <p className="lede">
            SYREN works across the categories where clinical trust and personal brand meet:
            aesthetics, dentistry, and healthcare education.
          </p>
        </div>
      </header>

      <section className="wrap pt-0">
        <Reveal className="rule-top">
          <span className="eyebrow">Real work</span>
          <h2 className="display-2 mt-18 mw-18ch">Content that stops the scroll.</h2>
          <p className="lede mt-18">
            A selection of reels produced with SYREN — hover to unmute, tap to play with sound.
          </p>
        </Reveal>
        <Reveal>
          <ReelGrid />
        </Reveal>
      </section>

      <Reveal as="section" className="wrap quote">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>
          We help experts turn their knowledge into influence, their audience into opportunity, and
          their personal brand into a business asset.
        </blockquote>
        <cite>Eloise Bratt, Founder &amp; CEO, SYREN</cite>
      </Reveal>

      <Reveal as="section" className="wrap split">
        <div className="col-label">
          <span className="eyebrow">Who we work with</span>
          <h2 className="display-2 mt-18">Clinicians ready to be known for what they do best.</h2>
        </div>
        <div className="col-body">
          <p className="lede">
            Whether that&apos;s growing a clinic, launching a product, building a community or
            becoming the go-to voice in your field, SYREN builds the personal brand that carries
            you there.
          </p>
          <Link href="/contact" className="link-arrow mt-32">
            Start your brief
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </Reveal>

      <Reveal as="section" className="wrap cta-band">
        <span className="eyebrow">Next</span>
        <h2 className="display-2 mt-18">Your brand could be next.</h2>
        <div className="row">
          <p className="lede">Book a call and we&apos;ll tell you honestly whether we&apos;re the right fit.</p>
          <Link href="/contact" className="btn-banner">
            Book a call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 17L17 7M17 7H9M17 7V15" /></svg>
          </Link>
        </div>
      </Reveal>

      <Footer />
      <MotionInit />
    </>
  );
}
