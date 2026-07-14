import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand-mark mb-16">
              <Logo width={140} />
            </Link>
            <p className="footer-desc">
              Personal branding for doctors, dentists, aesthetic practitioners and healthcare experts.
            </p>
          </div>
          <div>
            <h5>Site</h5>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/work">Work</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <h5>Follow</h5>
            <a href="https://www.instagram.com/syrenagency/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/company/syrenagency/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="mailto:hello@syrenagency.com">hello@syrenagency.com</a>
            <p>Based in the UK</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} SYREN Agency. All rights reserved.</span>
          <span>Design concept &amp; build</span>
        </div>
      </div>
    </footer>
  );
}
