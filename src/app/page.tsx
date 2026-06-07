"use client";

import Navbar from "@/components/organisms/Navbar";
import Overview from "./_components/Overview";
import AboutMe from "./_components/AboutMe";
import Experience from "./_components/Experience";
import Contact from "./_components/Contact";

import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, []);

  return (
    <main>
      <Navbar active={active} />
      <Overview />
      <AboutMe />
      <Experience />
      <Contact />
    </main>
  );
}
