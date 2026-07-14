import Link from "next/link";
import Footer from "../components/Footer";
import MotionInit from "../components/MotionInit";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-grid" />
        <div className="hero-spotlight" />
        <div className="wrap hero-content hero-editorial">
          <div className="hero-lede-col">
            <span className="eyebrow">Personal branding for healthcare leaders</span>
            <h1 className="display-1" data-split>
              Your expertise isn&apos;t the problem. Your visibility is.
            </h1>
            <p className="lede hero-para">
              SYREN builds influential personal brands for doctors, dentists and aesthetic
              practitioners, turning clinical knowledge into industry recognition across TikTok,
              Instagram, LinkedIn and YouTube.
            </p>
            <div className="hero-cta-row">
              <Link href="/contact" className="btn-primary magnetic">
                Book a call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H9M17 7V15" />
                </svg>
              </Link>
              <Link href="/work" className="link-arrow">
                See our work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="hero-visual" data-hero-visual>
            <div className="hero-visual-frame">
              <img src="/eloise.png" alt="Eloise Bratt, Founder of SYREN, holding a laptop showing the SYREN brand" />
            </div>
            <div className="hero-visual-badge">
              <strong>1M+</strong>
              <span>Reach delivered</span>
            </div>
          </div>
        </div>
      </header>

      <Reveal as="section" className="wrap split">
        <div className="col-label">
          <span className="eyebrow">The agency</span>
          <h2 className="display-2 mt-18">We don&apos;t create content. We build influence.</h2>
        </div>
        <div className="col-body">
          <p className="lede">
            Founded by Eloise Bratt, SYREN combines social strategy, content production and
            creator partnerships with a deep understanding of what makes clinical audiences stop,
            trust and engage.
          </p>
          <p className="lede">
            We help experts turn their knowledge into influence, their audience into opportunity,
            and their personal brand into a business asset.
          </p>
          <div className="stat-slab">
            <div><strong>UK</strong><span>Leading healthcare creators</span></div>
            <div><strong>5+</strong><span>Platforms mastered</span></div>
            <div><strong>360°</strong><span>Brand, content &amp; PR</span></div>
          </div>
          <Link href="/about" className="link-arrow mt-36">
            Meet the founder
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Reveal>

      <section className="wrap pt-0">
        <Reveal className="rule-top">
          <span className="eyebrow">What we do</span>
          <h2 className="display-2 mt-18 mw-16ch">Four disciplines, one recognisable name.</h2>
        </Reveal>

        <Reveal className="service-row">
          <div className="service-marker" aria-hidden="true" />
          <div>
            <h3>Content strategy &amp; production</h3>
            <p className="lede">
              High-performing social content built around your clinical expertise, engineered to
              stop the scroll and hold trust.
            </p>
            <div className="service-tags"><span>TikTok</span><span>Instagram</span><span>YouTube</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-marker" aria-hidden="true" />
          <div>
            <h3>Personal brand development</h3>
            <p className="lede">
              A trusted, distinctive brand that stands out in a crowded market and travels with you
              across every platform.
            </p>
            <div className="service-tags"><span>Positioning</span><span>Voice</span><span>Visual identity</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-marker" aria-hidden="true" />
          <div>
            <h3>Brand &amp; commercial partnerships</h3>
            <p className="lede">
              Securing partnerships and commercial opportunities that match your standing as a
              clinical authority.
            </p>
            <div className="service-tags"><span>Partnerships</span><span>Licensing</span><span>Collaborations</span></div>
          </div>
        </Reveal>
        <Reveal className="service-row">
          <div className="service-marker" aria-hidden="true" />
          <div>
            <h3>Media &amp; PR placement</h3>
            <p className="lede">
              National media coverage and industry recognition that cements you as the go-to voice
              in your field.
            </p>
            <div className="service-tags"><span>Press</span><span>Speaking</span><span>Recognition</span></div>
          </div>
        </Reveal>
      </section>

      <section className="metrics">
        <div className="wrap metrics-grid">
          <Reveal className="metric">
            <strong><span data-count>1</span>M+</strong>
            <span>Reach delivered through high-performing social content</span>
          </Reveal>
          <Reveal className="metric">
            <strong>Top</strong>
            <span>Healthcare creators trust SYREN with their brand</span>
          </Reveal>
          <Reveal className="metric">
            <strong>National</strong>
            <span>Media coverage and industry recognition secured</span>
          </Reveal>
          <Reveal className="metric">
            <strong>Steady</strong>
            <span>Pipeline of patients, clients and customers</span>
          </Reveal>
        </div>
      </section>

      <Reveal as="section" className="wrap quote">
        <span className="quote-mark">&ldquo;</span>
        <blockquote>
          Become known for what you do <em>best</em> — the go-to voice in your field.
        </blockquote>
        <cite>Eloise Bratt, Founder &amp; CEO, SYREN</cite>
      </Reveal>

      <Reveal as="section" className="wrap cta-band">
        <span className="eyebrow">Start here</span>
        <h2 className="display-2 mt-18">Ready to become the name in your field?</h2>
        <div className="row">
          <p className="lede">Tell us about your practice and where you want your brand to be in twelve months.</p>
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
