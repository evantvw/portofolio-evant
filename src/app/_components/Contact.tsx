"use client";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { Mail, Copy, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import gsap from "gsap";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/evantvw",
    Icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/evantvalery/",
    Icon: FaLinkedin,
  },
];

const EMAIL = "valeryevantq@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const headingSplit = SplitText.create("#contact-heading", {
      type: "chars,words",
    });

    gsap.from(headingSplit.chars, {
      scrollTrigger: { trigger: "#contact", start: "top 70%" },
      yPercent: 100,
      opacity: 0,
      duration: 0.55,
      stagger: 0.025,
      ease: "power3.out",
    });

    gsap.from("#contact-sub", {
      scrollTrigger: { trigger: "#contact", start: "top 68%" },
      yPercent: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.25,
    });

    gsap.from("#contact-email-row", {
      scrollTrigger: { trigger: "#contact-email-row", start: "top 85%" },
      yPercent: 25,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.from("#contact-footer", {
      scrollTrigger: { trigger: "#contact-footer", start: "top 95%" },
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    });
  });

  return (
    <section id="contact" className="py-24 lg:py-40 px-6 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="section-label mb-8">Get In Touch</p>

        {/* Main heading — overflow hidden so characters animate from below */}
        <div className="overflow-hidden mb-6">
          <h2
            id="contact-heading"
            className="font-sans font-bold text-4xl md:text-5xl xl:text-7xl leading-[1.1] text-balance"
          >
            Let&apos;s build something{" "}
            <span className="text-primary-fg">great</span> together.
          </h2>
        </div>

        {/* Subtitle */}
        <p
          id="contact-sub"
          className="font-serif text-base xl:text-lg opacity-60 max-w-xl mb-14 leading-relaxed"
        >
          I&apos;m currently open to freelance projects and full-time positions.
          If you have a project in mind or just want to say hello, my inbox is
          always open.
        </p>

        {/* Email row */}
        <div
          id="contact-email-row"
          className="flex items-center gap-4 mb-12 flex-wrap"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="group font-sans font-bold text-xl xl:text-3xl link-section hover:text-primary transition-colors duration-200 flex items-center gap-3"
          >
            <Mail className="w-6 h-6 xl:w-7 xl:h-7 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
            {EMAIL}
            <span className="custom-underline" />
          </a>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 font-serif text-sm px-3 py-2 rounded-lg border border-foreground/15 bg-foreground/[0.03] hover:bg-primary/15 hover:border-primary/30 transition-all duration-200"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 opacity-60" />
                <span className="opacity-60">Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Social links */}
        <div id="socials" className="flex gap-3 flex-wrap mb-24">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link flex items-center gap-2.5 font-serif text-sm px-5 py-3 rounded-xl border border-foreground/15 bg-foreground/[0.03] hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
              {name}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          id="contact-footer"
          className="border-t border-foreground/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p className="font-serif text-sm opacity-40">
            © 2026 Evant. Designed &amp; built with care and too much coffee.
          </p>
          <p className="font-serif text-xs opacity-25">
            Next.js · TailwindCSS · GSAP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
