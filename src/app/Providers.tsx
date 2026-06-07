"use client";

import gsap from "gsap";

import { ReactNode, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ThemeProvider } from "next-themes";

// Core plugins are safe to register at module level (no browser APIs)
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      import("gsap/GSDevTools").then(({ GSDevTools }) => {
        gsap.registerPlugin(GSDevTools);
      });
    }
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange={false}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
