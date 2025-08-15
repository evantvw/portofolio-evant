"use client";

import { useGSAP } from "@gsap/react";
import { ArrowRight, FileDown } from "lucide-react";
import { SplitText } from "gsap/all";

import gsap from "gsap";
import Button from "@/components/atoms/Button";
import Image from "next/image";

const Overview = () => {
  useGSAP(() => {
    const mainTimeline = gsap.timeline();
    const sparkleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    const headingSplit = SplitText.create("#overview h1", {
      type: "chars",
    });

    mainTimeline.set("#overview", { opacity: 1 });
    mainTimeline.to("#image-container .strip", {
      transformOrigin: "center bottom",
      scaleY: 0,
      duration: 1,
      ease: "steps(5)",
      stagger: { each: 0.1, from: "start" },
    });
    mainTimeline.fromTo(
      headingSplit.chars,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "steps(1)",
        stagger: 0.05,
      },
      "-=0.5"
    );
    mainTimeline.add(
      [
        sparkleTimeline.to("#sparkle-emoji", {
          scale: 1.3,
          rotation: 15,
          duration: 0.4,
          ease: "power1.out",
        }),
        sparkleTimeline.to("#sparkle-emoji", {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        }),
      ],
      "-=0.4"
    );
    mainTimeline.fromTo(
      "#description",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      "-=0.4"
    );
    mainTimeline.fromTo(
      "#cta",
      {
        yPercent: 100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  });
  return (
    <section
      id="overview"
      className="h-[calc(100vh-100px)] flex gap-10 opacity-0 items-center flex-col-reverse justify-end p-4 lg:flex-row lg:px-30 lg:py-0"
    >
      {/* contents */}
      <div className="flex flex-col space-y-5 xl:flex-2 xl:justify-end">
        {/* headline */}
        <h1 className="text-balance font-sans font-bold text-2xl md:text-3xl xl:text-5xl">
          I craft engaging,
          <br /> high-performance websites. <span id="sparkle-emoji">✨</span>
        </h1>
        {/* description */}
        <div className="overflow-hidden">
          <p
            id="description"
            className="text-balance md:text-lg xl:text-xl font-serif leading-relaxed"
          >
            I&apos;m Evant, a front-end developer passionate about{" "}
            <span className="highlight">animation</span>,{" "}
            <span className="highlight">design</span>, and creating{" "}
            <span className="highlight">memorable</span> user experiences.
          </p>
        </div>
        {/* cta buttons */}
        <div className="overflow-hidden">
          <div id="cta" className="flex gap-x-5 items-center py-1">
            <Button
              Icon={ArrowRight}
              text="View My Work"
              iconPosition="right"
            />
            <Button Icon={FileDown} text="Download CV" variant="outline" />
          </div>
        </div>
      </div>
      {/* photo */}
      <div className="xl:flex-1">
        <div
          id="image-container"
          className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] xl:w-[400px] xl:h-[400px]"
        >
          <Image
            id="portrait"
            src={"/images/evant-portrait.jpg"}
            alt="Evant Portrait"
            fill
            sizes="100%"
            priority
            className="absolute inset-0 w-full h-full rounded-xl object-cover grayscale"
          />
          <div className="absolute inset-0 flex z-100">
            <div className="strip h-full w-1/5 bg-cream rounded-l-xl"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream"></div>
            <div className="strip h-full w-1/5 bg-cream rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
