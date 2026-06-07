"use client";

import { useGSAP } from "@gsap/react";
import { MapPin, Calendar, GraduationCap } from "lucide-react";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const experiences = [
  {
    id: 1,
    company: "PT Bank Sinarmas",
    role: "Frontend Engineer",
    badge: "Contract",
    period: "Oct 2025 – Present",
    location: "Jakarta, Indonesia",
    current: true,
    bullets: [
      "Built and refactored core UI for post-approval debtor management across the Collection, Write-Off, and Foreclosed Assets modules of the Loan Management System.",
      "Developed the Role Management interface and Credit Decision Engine (CDE) eligibility screens for the LAMOS loan origination platform.",
      "Resolved complex MR conflicts and provided dedicated front-end support throughout System Integration Testing (SIT).",
    ],
    stack: ["React", "Next.js", "TypeScript", "Material UI", "Redux", "React Query"],
  },
  {
    id: 2,
    company: "PT Mitra Kasih Perkasa",
    role: "Junior Software Engineer",
    badge: null,
    period: "Jul 2024 – Oct 2025",
    location: "Semarang, Indonesia",
    current: false,
    bullets: [
      "Delivered 3 self-service payment portals — Retribusi Pintar, PDAM Takalar, and Telkom University — with QR scanning, transaction history filtering, and secure payment API integrations.",
      "Expanded the MINT Partner module with full CRUD operations and API-driven partner data management.",
      "Led migration and optimization of legacy Billing Management System and UDBM dashboards, improving performance with zero downtime.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Material UI", "Zustand", "React Query", "Axios"],
  },
  {
    id: 3,
    company: "PT Mitra Kasih Perkasa",
    role: "Front-End Developer",
    badge: "Intern",
    period: "Jan 2024 – Jul 2024",
    location: "Semarang, Indonesia",
    current: false,
    bullets: [
      "Rebuilt the legacy Billing Management System dashboard from scratch using React, Tailwind CSS, and Material UI.",
      "Developed reusable, modular UI components for the UDBM dashboard, adopted across cross-functional engineering teams.",
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "Material UI"],
  },
];

const education = {
  school: "Universitas Katolik Soegijapranata",
  degree: "Bachelor of Computer Science — Informatics Engineering",
  location: "Semarang, Indonesia",
  gpa: "3.94 / 4.00",
  period: "2020 – 2024",
};

const Experience = () => {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.from("#experience-heading", {
      scrollTrigger: { trigger: "#experience", start: "top 75%" },
      xPercent: -15,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 65%",
          end: "bottom 55%",
          scrub: 0.8,
        },
      }
    );

    gsap.from(".timeline-dot", {
      scrollTrigger: { trigger: ".timeline-container", start: "top 70%" },
      scale: 0,
      duration: 0.4,
      stagger: { each: 0.2, from: "start" },
      ease: "back.out(2)",
    });

    gsap.from(".timeline-card", {
      scrollTrigger: { trigger: ".timeline-container", start: "top 70%" },
      xPercent: 3,
      opacity: 0,
      duration: 0.65,
      stagger: { each: 0.18, from: "start" },
      ease: "power3.out",
    });
  });

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-20 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div id="experience-heading" className="mb-16">
          <p className="section-label">Work Experience</p>
          <h2 className="section-heading">
            Two years shipping
            <br />
            <span className="text-primary-fg">real-world</span> products.
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          {/* Vertical connecting line */}
          <div className="timeline-line absolute left-[10px] top-5 bottom-28 w-px bg-foreground/20" />

          <div className="space-y-10 xl:space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 xl:pl-12">
                {/* Dot */}
                <div
                  className={cn(
                    "timeline-dot absolute left-0 top-5 w-[21px] h-[21px] rounded-full border-2 bg-background",
                    exp.current ? "border-primary-fg" : "border-foreground/30"
                  )}
                >
                  {exp.current && (
                    <span className="absolute inset-[3px] rounded-full bg-primary-fg motion-safe:animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="timeline-card card-base p-5 xl:p-6">
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-sans font-bold text-base xl:text-lg">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="font-serif text-xs px-2 py-0.5 rounded-full bg-foreground/[0.07] border border-foreground/10">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-serif text-sm font-semibold text-primary-fg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 font-serif text-xs opacity-50">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 items-start font-serif text-sm opacity-65 leading-relaxed"
                      >
                        <span className="text-primary-fg mt-0.5 flex-shrink-0 font-bold">
                          →
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-serif text-xs px-2.5 py-1 rounded-full bg-foreground/[0.06] border border-foreground/[0.08]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-10 xl:pl-12">
              <div className="timeline-dot absolute left-0 top-5 w-[21px] h-[21px] rounded-full border-2 border-foreground/25 bg-background flex items-center justify-center">
                <GraduationCap className="w-2.5 h-2.5 text-foreground/40" />
              </div>

              <div className="timeline-card card-base p-5 xl:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-sans font-bold text-base xl:text-lg">
                        {education.school}
                      </h3>
                    </div>
                    <p className="font-serif text-sm opacity-65">
                      {education.degree}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1 font-serif text-xs opacity-50">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 flex-shrink-0" />
                      {education.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      {education.location}
                    </span>
                  </div>
                </div>
                <p className="font-serif text-sm font-semibold text-primary-fg">
                  GPA {education.gpa}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
