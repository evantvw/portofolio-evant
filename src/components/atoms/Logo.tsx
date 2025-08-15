"use client";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/all";

const Logo = () => {
  const logoRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    const logoSplit = SplitText.create("#logo", {
      type: "chars",
    });
    logoRef.current = gsap.to(logoSplit.chars, {
      paused: true,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
      opacity: 0,
      duration: 0.01,
      stagger: { each: 0.25, from: "end" },
      delay: 0.5,
      ease: "none",
    });
  });

  const onMouseEnter = () => {
    logoRef.current?.play();
  };
  const onMouseLeave = () => {
    logoRef.current?.restart();
    logoRef.current?.pause();
  };

  return (
    <p
      id="logo"
      className="font-extrabold font-sans cursor-pointer text-3xl xl:text-4xl "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      Evant
    </p>
  );
};

export default Logo;
