"use client";

import { useGSAP } from "@gsap/react";
import { Code2, Layers, Zap, Wrench, BookOpen, Music } from "lucide-react";
import gsap from "gsap";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  // "SCSS",
  "GSAP",
  // "Framer Motion",
  "Figma",
  // "Node.js",
  "REST APIs",
  // "Prisma",
  "Git",
  "Vercel",
  "Webpack",
  // "PostgreSQL",
];

const highlights = [
  {
    Icon: Code2,
    title: "Clean Code",
    description:
      "I write maintainable, scalable code that your future self will thank you for.",
  },
  {
    Icon: Layers,
    title: "Design-Driven",
    description:
      "Every pixel is intentional. I bridge the gap between design and development.",
  },
  {
    Icon: Zap,
    title: "Performance First",
    description:
      "Fast, smooth, and accessible — because users deserve the best experience.",
  },
];

// const stats = [
//   { value: "2", label: "Years Experience" },
//   { value: "20+", label: "Projects Shipped" },
//   { value: "10+", label: "Happy Clients" },
// ];

const currently = [
  {
    Icon: Wrench,
    text: "Building this portfolio (you're looking at it)",
  },
  {
    Icon: BookOpen,
    text: "Exploring GSAP ScrollSmoother & advanced SVG animation",
  },
  {
    Icon: Music,
    text: "Listening to Daniel Caesar while coding",
  },
];

const AboutMe = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from("#about-heading", {
        scrollTrigger: { trigger: "#about", start: "top 75%" },
        xPercent: -15,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("#about-bio", {
        scrollTrigger: { trigger: "#about-bio", start: "top 82%" },
        yPercent: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      });

      gsap.from(".stat-item", {
        scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
        yPercent: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".highlight-card", {
        scrollTrigger: { trigger: ".highlights-grid", start: "top 82%" },
        yPercent: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".skill-tag", {
        scrollTrigger: { trigger: ".skills-grid", start: "top 85%" },
        scale: 0.6,
        opacity: 0,
        duration: 0.45,
        stagger: { each: 0.04, from: "random" },
        ease: "back.out(2)",
      });

      gsap.from("#currently-section", {
        scrollTrigger: { trigger: "#currently-section", start: "top 88%" },
        yPercent: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    });
  });

  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div id="about-heading" className="mb-16">
          <p className="section-label">About Me</p>
          <h2 className="section-heading">
            Turning ideas into
            <br />
            <span className="text-primary-fg">engaging digital</span>{" "}
            experiences.
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio + stats + highlights */}
          <div>
            <p
              id="about-bio"
              className="font-serif text-base xl:text-lg leading-relaxed opacity-75 mb-10"
            >
              Hey! I&apos;m Evant — a front-end developer and UI/UX enthusiast
              based in Indonesia. I specialize in building beautiful, performant
              web interfaces with a strong eye for detail and motion design. I
              love the challenge of translating a static design into a living,
              breathing experience.
              <br />
              <br />
              When I&apos;m not coding, you&apos;ll find me exploring UI design
              trends, tinkering with animation experiments, or obsessing over
              typography.
            </p>

            {/* Stats */}
            {/* <div className="stats-row grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <p className="font-sans font-bold text-3xl xl:text-4xl text-primary-fg">
                    {stat.value}
                  </p>
                  <p className="font-serif text-xs xl:text-sm opacity-50 mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}

            {/* Highlight cards */}
            <div className="highlights-grid flex flex-col gap-3">
              {highlights.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="highlight-card card-base flex gap-4 items-start p-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-foreground/[0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary-fg" />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm mb-1">
                      {title}
                    </p>
                    <p className="font-serif text-sm opacity-60 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills + currently */}
          <div>
            <p className="section-label mb-5">Tech Stack</p>
            <div className="skills-grid flex flex-wrap gap-2.5 mb-12">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag font-serif text-sm px-4 py-2 rounded-full border border-foreground/15 bg-foreground/[0.03] hover:bg-primary/15 hover:border-primary/40 transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Currently section */}
            <div
              id="currently-section"
              className="p-5 rounded-2xl bg-foreground/[0.04] border border-foreground/[0.08]"
            >
              <p className="section-label mb-4">Currently</p>
              <div className="space-y-3.5">
                {currently.map(({ Icon, text }) => (
                  <div key={text} className="flex gap-3 items-start">
                    <Icon className="w-4 h-4 opacity-50 mt-0.5 flex-shrink-0" />
                    <p className="font-serif text-sm opacity-70 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
