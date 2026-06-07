"use client";

import gsap from "gsap";
import Blob from "../atoms/Blob";

import { useGSAP } from "@gsap/react";

const BlobBackground = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const blobs = document.querySelectorAll<HTMLElement>(".blob");
      blobs.forEach((blob) => {
        gsap.to(blob, {
          duration: () => gsap.utils.random(6, 12),
          x: () => gsap.utils.random(0, window.innerWidth - 300),
          y: () => gsap.utils.random(0, window.innerHeight - 300),
          rotation: () => gsap.utils.random(-360, 360),
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-[1] overflow-hidden blur-3xl pointer-events-none">
      <Blob className="blob bg-utility-2 absolute left-[-50px] top-[-50px]" />
      <Blob className="blob bg-primary absolute top-[40vh] left-[20vw]" />
      <Blob className="blob bg-utility absolute right-[-100px] bottom-[20vh]" />
    </div>
  );
};

export default BlobBackground;
