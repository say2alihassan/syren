import Footer from "../../components/Footer";
import MotionInit from "../../components/MotionInit";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/Reveal";

export const metadata = {
  title: "Contact — SYREN",
  description: "Book a call with SYREN to build your personal brand as a healthcare expert.",
};

export default function Contact() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Let&apos;s talk</span>
          <h1 className="display-1" data-split>Tell us about your brand.</h1>
          <p className="lede">A short call is all it takes to see if we&apos;re the right fit for your practice.</p>
        </div>
      </header>

      <section className="wrap contact-grid">
        <ContactForm />

        <Reveal className="contact-info">
          <div className="row">
            <h4>Email</h4>
            <a href="mailto:hello@syrenagency.com">hello@syrenagency.com</a>
          </div>
          <div className="row">
            <h4>Based</h4>
            <span className="no-cursor" style={{ fontSize: "1.2rem", fontFamily: "'Bricolage Grotesque', sans-serif", display: "block" }}>United Kingdom</span>
          </div>
          <div className="row">
            <h4>Follow</h4>
            <div className="social-row">
              <a href="https://www.instagram.com/syrenagency/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/syrenagency/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <MotionInit />
    </>
  );
}
