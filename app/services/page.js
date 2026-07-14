import Link from "next/link";
import Footer from "../../components/Footer";
import MotionInit from "../../components/MotionInit";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Services — SYREN",
  description: "Content strategy, personal brand development, commercial partnerships and media placement for healthcare experts.",
};

export default function Services() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">What we do</span>
          <h1 className="display-1" data-split>Four disciplines. One name people trust.</h1>
          <p className="lede">
            Every engagement is built around a single goal: making you the recognised authority in
            your field, on the platforms your patients and peers actually use.
          </p>
        </div>
      </header>

      <section className="wrap pt-80">
        <Reveal className="service-row">
          <div className="service-index">01</div>
          <div>
            <h3>Content strategy &amp; production</h3>
            <p className="lede">
              We plan, script, film-direct and edit content built around your clinical expertise,
              engineered for TikTok, Instagram, LinkedIn and YouTube. Every piece is designed to
              stop the scroll and hold trust, not chase vanity views.
            </p>
            <div className="service-tags"><span>Format planning</span><span>Scripting</span><span>Editing</span><span>Platform strategy</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-index">02</div>
          <div>
            <h3>Personal brand development</h3>
            <p className="lede">
              Positioning, voice and visual identity that make you instantly recognisable in a
              crowded market. We build the brand once, then carry it consistently across every
              platform and touchpoint.
            </p>
            <div className="service-tags"><span>Positioning</span><span>Voice &amp; tone</span><span>Visual identity</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-index">03</div>
          <div>
            <h3>Brand &amp; commercial partnerships</h3>
            <p className="lede">
              We open and manage relationships with brands looking for credible clinical voices,
              matching partnerships to your positioning so every collaboration reinforces the
              brand rather than diluting it.
            </p>
            <div className="service-tags"><span>Brand deals</span><span>Licensing</span><span>Negotiation</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-index">04</div>
          <div>
            <h3>Media &amp; PR placement</h3>
            <p className="lede">
              From national press to trade recognition, we position you for the coverage that
              cements authority, not just column inches.
            </p>
            <div className="service-tags"><span>Press</span><span>Speaking</span><span>Awards &amp; recognition</span></div>
          </div>
        </Reveal>
      </section>

      <section className="wrap process">
        <Reveal className="mb-40">
          <span className="eyebrow">How we work</span>
          <h2 className="display-2 mt-18 mw-16ch">The SYREN process.</h2>
        </Reveal>
        <div className="process-list">
          <Reveal className="process-item">
            <div className="process-num">01</div>
            <div><h4>Discover</h4><p>We map your expertise, audience and existing presence to find the real story worth telling.</p></div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">02</div>
            <div><h4>Define</h4><p>Positioning, voice and content pillars are locked into a brand framework you can build on for years.</p></div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">03</div>
            <div><h4>Create</h4><p>Production begins, consistent, high quality and paced to your practice and platform strategy.</p></div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">04</div>
            <div><h4>Amplify</h4><p>Partnerships and press are layered on once the content is performing, extending reach beyond your own channels.</p></div>
          </Reveal>
          <Reveal className="process-item">
            <div className="process-num">05</div>
            <div><h4>Convert</h4><p>Visibility and credibility are turned into a consistent pipeline of patients, clients and opportunities.</p></div>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="wrap cta-band">
        <span className="eyebrow">Get started</span>
        <h2 className="display-2 mt-18">Tell us where your brand needs to go.</h2>
        <div className="row">
          <p className="lede">A short call is all it takes to see if we&apos;re the right fit for your practice.</p>
          <Link href="/contact" className="btn-banner">
            Book a call
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
