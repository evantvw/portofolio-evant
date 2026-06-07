"use client";

import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import gsap from "gsap";

const projects = [
  {
    id: 1,
    name: "Lumina Dashboard",
    description:
      "A real-time analytics dashboard with customizable widgets, interactive charts, and smooth data visualizations.",
    tags: ["Next.js", "TypeScript", "Recharts", "TailwindCSS"],
    accent: "#689cf0",
    bgGradient:
      "radial-gradient(ellipse at 20% 50%, #689cf040 0%, transparent 65%), radial-gradient(ellipse at 80% 20%, #689cf025 0%, transparent 55%)",
    type: "Web Application",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    name: "Bloom E-Commerce",
    description:
      "An immersive plant shop with cart animations, product filtering, and a streamlined checkout flow built on Stripe.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    accent: "#f0bc68",
    bgGradient:
      "radial-gradient(ellipse at 70% 60%, #f0bc6840 0%, transparent 65%), radial-gradient(ellipse at 20% 30%, #f0bc6820 0%, transparent 55%)",
    type: "Full Stack",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    name: "Wavelength Player",
    description:
      "A music player UI concept featuring GSAP-powered waveform visualizations, fluid controls, and motion-driven design.",
    tags: ["React", "GSAP", "Figma", "CSS3"],
    accent: "#e58d8d",
    bgGradient:
      "radial-gradient(ellipse at 50% 30%, #e58d8d40 0%, transparent 65%), radial-gradient(ellipse at 80% 80%, #e58d8d20 0%, transparent 50%)",
    type: "UI / Motion",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    name: "Codeflow Template",
    description:
      "An open-source developer portfolio template with built-in animations, MDX blog support, and one-click Vercel deployment.",
    tags: ["Next.js", "TypeScript", "MDX", "Vercel"],
    accent: "#4c3d39",
    bgGradient:
      "radial-gradient(ellipse at 30% 70%, #4c3d3930 0%, transparent 65%), radial-gradient(ellipse at 70% 20%, #4c3d3918 0%, transparent 55%)",
    type: "Open Source",
    github: "#",
    live: "#",
  },
];

const Works = () => {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from("#works-heading", {
      scrollTrigger: { trigger: "#works", start: "top 75%" },
      xPercent: -15,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".project-card", {
      scrollTrigger: { trigger: ".projects-grid", start: "top 80%" },
      yPercent: 35,
      opacity: 0,
      duration: 0.7,
      stagger: { each: 0.12, from: "start" },
      ease: "power3.out",
    });
  });

  return (
    <section id="works" className="py-24 lg:py-32 px-6 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          id="works-heading"
          className="mb-16 flex items-end justify-between gap-4"
        >
          <div>
            <p className="section-label">Selected Works</p>
            <h2 className="section-heading">Projects I&apos;ve built.</h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 font-serif text-sm opacity-50 hover:opacity-100 hover:text-primary transition-all duration-200 link-section group flex-shrink-0"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid sm:grid-cols-2 gap-5 xl:gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group card-base cursor-pointer overflow-hidden"
            >
              {/* Color block / mockup area */}
              <div
                className="relative h-52 xl:h-60 overflow-hidden"
                style={{ background: project.bgGradient }}
              >
                {/* Subtle grid lines */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Project type badge */}
                <span
                  className="absolute top-4 left-4 font-serif text-xs px-3 py-1.5 rounded-full font-semibold z-10"
                  style={{
                    backgroundColor: project.accent + "22",
                    color: project.accent,
                    border: `1px solid ${project.accent}44`,
                  }}
                >
                  {project.type}
                </span>

                {/* Hover action buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-10">
                  <a
                    href={project.github}
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200 shadow-sm"
                    aria-label="GitHub"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    onClick={(e) => e.stopPropagation()}
                    className="w-9 h-9 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200 shadow-sm"
                    aria-label="Live preview"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Decorative accent dot */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-40"
                  style={{ backgroundColor: project.accent }}
                />
              </div>

              {/* Project info */}
              <div className="p-5 xl:p-6">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="font-sans font-bold text-lg xl:text-xl">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 opacity-25 group-hover:opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
                </div>
                <p className="font-serif text-sm opacity-60 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-serif text-xs px-2.5 py-1 rounded-full bg-foreground/[0.06] border border-foreground/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
