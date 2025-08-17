"use client";

import gsap from "gsap";

import { ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";

const Providers = ({ children }: { children: ReactNode }) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, GSDevTools);
  return children;
};

export default Providers;
