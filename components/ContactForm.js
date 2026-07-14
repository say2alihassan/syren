"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const formStyle = { willChange: "transform, opacity" };

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  return (
    <motion.form
      style={reduce ? undefined : formStyle}
      initial={reduce ? false : { opacity: 0.001, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your full name" required />
      </div>
      <div className="field">
        <label htmlFor="practice">Practice / brand</label>
        <input id="practice" type="text" placeholder="Clinic or brand name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="you@practice.com" required />
      </div>
      <div className="field">
        <label htmlFor="message">Tell us about your brief</label>
        <textarea id="message" placeholder="Where do you want your personal brand to be in 12 months?" />
      </div>
      <button type="submit" className="btn-primary magnetic">
        Send it over
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 17L17 7M17 7H9M17 7V15" />
        </svg>
      </button>
      <p className={`form-note${sent ? " visible" : ""}`}>
        Thanks, this is a design concept, so nothing was actually sent.
      </p>
    </motion.form>
  );
}
