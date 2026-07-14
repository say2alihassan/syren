import Link from "next/link";
import Footer from "../../components/Footer";
import MotionInit from "../../components/MotionInit";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "About — SYREN",
  description: "Meet Eloise Bratt, Founder & CEO of SYREN — helping healthcare experts turn knowledge into influence.",
};

export default function About() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About SYREN</span>
          <h1 className="display-1" data-split>Hi, I&apos;m Eloise.</h1>
          <p className="lede">
            Founder &amp; CEO of SYREN, a personal branding agency helping doctors, dentists,
            aesthetic practitioners and healthcare experts become recognised leaders in their
            industry.
          </p>
        </div>
      </header>

      <section className="wrap founder-block">
        <Reveal className="portrait-frame">
          <img src="/eloise.png" alt="Eloise Bratt, Founder and CEO of SYREN" className="portrait-img" />
          <span className="portrait-caption">Eloise Bratt — Founder &amp; CEO, SYREN</span>
        </Reveal>
        <Reveal>
          <span className="eyebrow">Founder&apos;s note</span>
          <h2 className="display-2 mt-18">Turning knowledge into influence.</h2>
          <div className="mt-26">
            <p className="lede">
              We build influential personal brands that drive visibility, credibility and
              commercial growth across TikTok, Instagram, LinkedIn, YouTube and beyond.
            </p>
            <p className="lede mt-18">
              At SYREN, we don&apos;t just create content. We help experts turn their knowledge
              into influence, their audience into opportunity, and their personal brand into a
              business asset.
            </p>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="wrap split">
        <div className="col-label">
          <span className="eyebrow">Track record</span>
          <h2 className="display-2 mt-18">Working with the UK&apos;s leading healthcare creators.</h2>
        </div>
        <div className="col-body">
          <p className="lede">
            Over the last few years, I&apos;ve worked with some of the UK&apos;s leading healthcare
            creators and clinicians, helping them reach millions through high-performing social
            content, build trusted personal brands that stand out in crowded markets, secure brand
            partnerships and commercial opportunities, generate national media coverage and
            industry recognition, and attract a consistent pipeline of high-quality patients,
            clients and customers.
          </p>
          <Link href="/work" className="link-arrow mt-32">
            See the work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Reveal>

      <section className="wrap process">
        <Reveal className="mb-40">
          <span className="eyebrow">Background</span>
          <h2 className="display-2 mt-18 mw-18ch">What I bring to every brand I build.</h2>
        </Reveal>
        <div className="process-list">
          <Reveal className="process-item">
            <div className="process-num">01</div>
            <div>
              <h4>Social media strategy</h4>
              <p>Platform-native thinking across TikTok, Instagram, LinkedIn and YouTube, built around what makes clinical audiences stop, trust and engage.</p>
            </div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">02</div>
            <div>
              <h4>Content production</h4>
              <p>High-performing content produced to a standard that matches the expertise behind it.</p>
            </div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">03</div>
            <div>
              <h4>Personal branding</h4>
              <p>Positioning that turns a clinician&apos;s knowledge into a recognisable, trusted name in their field.</p>
            </div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">04</div>
            <div>
              <h4>Creator partnerships</h4>
              <p>Relationships across the healthcare creator space that open doors to brand deals and media opportunities.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="wrap cta-band">
        <span className="eyebrow">Let&apos;s talk</span>
        <h2 className="display-2 mt-18">Building a personal brand with impact?</h2>
        <div className="row">
          <p className="lede">If you&apos;re a healthcare professional looking to grow, or you&apos;d simply like to talk content, creators and growth, let&apos;s connect.</p>
          <Link href="/contact" className="btn-banner">
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M7 17L17 7M17 7H9M17 7V15" />
            </svg>
          </Link>
        </div>
      </Reveal>

      <Footer />
      <MotionInit />
    </>
  );
}
