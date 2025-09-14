"use client";

import gsap from "gsap";
import Blob from "../atoms/Blob";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const BlobBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.to(".blob", {
      duration: () => gsap.utils.random(5, 10),
      x: () => gsap.utils.random(0, containerRef.current!.clientWidth - 500),
      y: () => gsap.utils.random(0, containerRef.current!.clientHeight - 500),
      rotation: () => gsap.utils.random(-360, 360),
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-[1] h-screen overflow-hidden blur-3xl"
    >
      <Blob className="blob bg-utility-2 absolute left-10 top-10" />
      <Blob className="blob bg-primary absolute top-70 left-80" />
      <Blob className="blob bg-utility absolute right-50 bottom-80" />
    </div>
  );
};

export default BlobBackground;
