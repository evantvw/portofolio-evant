"use client";

import { useGSAP } from "@gsap/react";
import { ArrowRight, FileDown } from "lucide-react";
import { SplitText } from "gsap/all";

import gsap from "gsap";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

const roles = ["Front-End Developer", "UI/UX Designer", "Creative Coder"];

const Overview = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set("#overview", { autoAlpha: 1, clearProps: "visibility,opacity" });
      const roleItems = document.querySelectorAll<HTMLElement>(".role-item");
      roleItems.forEach((item, i) => {
        gsap.set(item, { opacity: i === 0 ? 1 : 0, yPercent: 0 });
      });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const mainTimeline = gsap.timeline();
      const sparkleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

      const headingSplit = SplitText.create("#overview h1", { type: "chars" });

      const roleItems = document.querySelectorAll<HTMLElement>(".role-item");
      gsap.set(roleItems, { yPercent: 100, opacity: 0 });
      gsap.set(roleItems[0], { yPercent: 0, opacity: 1 });

      let currentRole = 0;
      const cycleRole = () => {
        const next = (currentRole + 1) % roleItems.length;
        gsap
          .timeline()
          .to(roleItems[currentRole], {
            yPercent: -100,
            opacity: 0,
            duration: 0.45,
            ease: "power2.in",
          })
          .fromTo(
            roleItems[next],
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
            "-=0.1",
          );
        currentRole = next;
        gsap.delayedCall(3, cycleRole);
      };

      mainTimeline
        .from("#overview", { autoAlpha: 0, duration: 0.1 })
        .to("#image-container .strip", {
          transformOrigin: "center bottom",
          scaleY: 0,
          duration: 0.9,
          ease: "steps(5)",
          stagger: { each: 0.08, from: "start" },
        })
        .from(
          headingSplit.chars,
          { opacity: 0, duration: 0.8, ease: "steps(1)", stagger: 0.04 },
          "-=0.5",
        )
        .add(
          sparkleTimeline
            .to("#sparkle-emoji", {
              scale: 1.3,
              rotation: 15,
              duration: 0.4,
              ease: "power1.out",
            })
            .to("#sparkle-emoji", {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "elastic.out(1, 0.3)",
            }),
          "-=0.4",
        )
        .from(
          "#availability-badge",
          { scale: 0.5, opacity: 0, duration: 0.5, ease: "back.out(2)" },
          "-=0.6",
        )
        .from(
          "#role-ticker",
          { yPercent: 60, opacity: 0, duration: 0.4, ease: "power2.out" },
          "-=0.3",
        )
        .from(
          "#description",
          { yPercent: 40, duration: 0.5, ease: "power2.out", opacity: 0 },
          "-=0.2",
        )
        .from(
          "#cta",
          { yPercent: 40, opacity: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .call(() => {
          gsap.delayedCall(3, cycleRole);
        });
    });
  });

  return (
    <section
      id="overview"
      className="min-h-[92vh] flex gap-12 items-center flex-col-reverse justify-around pt-6 pb-20 px-6 lg:flex-row lg:px-20 xl:px-32 lg:py-0 invisible"
    >
      {/* Text content */}
      <div className="flex flex-col space-y-5 flex-1 max-w-2xl">
        {/* Availability badge */}
        <div id="availability-badge" className="w-fit">
          <span className="inline-flex items-center gap-2 font-serif text-sm bg-foreground/[0.05] border border-foreground/10 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block relative">
              <span className="absolute inset-0 rounded-full bg-green-500 motion-safe:animate-ping opacity-75" />
            </span>
            Available for hire
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-sans font-bold text-3xl md:text-4xl xl:text-[3.5rem] xl:leading-[1.15] text-balance">
          I craft engaging,
          <br /> high-performance <br />
          websites.{" "}
          <span id="sparkle-emoji" className="inline-block">
            ✨
          </span>
        </h1>

        {/* Role ticker */}
        <div
          id="role-ticker"
          className="overflow-hidden h-6 md:h-7"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="relative h-full">
            {roles.map((role) => (
              <span
                key={role}
                className="role-item absolute inset-0 font-serif text-primary font-semibold text-sm md:text-base leading-6 md:leading-7"
              >
                ↳ {role}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="overflow-hidden pt-1">
          <p
            id="description"
            className="font-serif text-base md:text-lg leading-relaxed opacity-75 max-w-lg"
          >
            I&apos;m Evant, a front-end developer passionate about{" "}
            <span className="highlight">animation</span>,{" "}
            <span className="highlight">design</span>, and creating{" "}
            <span className="highlight">memorable</span> user experiences.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="overflow-hidden">
          <div
            id="cta"
            className="flex gap-x-4 gap-y-3 items-center flex-wrap py-1"
          >
            <Button
              Icon={ArrowRight}
              text="View My Experiences"
              iconPosition="right"
              href="#experience"
            />
            <Link href={"/pdf/cv.pdf"} target="_blank" download={"evant-cv"}>
              <Button Icon={FileDown} text="Download CV" variant="outline" />
            </Link>
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="flex-shrink-0">
        <div
          id="image-container"
          className="relative w-[270px] h-[330px] sm:w-[310px] sm:h-[380px] xl:w-[360px] xl:h-[440px] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/10"
        >
          <Image
            id="portrait"
            src={"/images/evant-portrait.jpg"}
            alt="Evant Portrait"
            fill
            sizes="(max-width: 640px) 270px, (max-width: 1280px) 310px, 360px"
            priority
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          {/* Subtle inner shadow for depth */}
          <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-2xl z-10 pointer-events-none" />
          {/* Reveal strips */}
          <div className="absolute inset-0 flex z-50">
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
