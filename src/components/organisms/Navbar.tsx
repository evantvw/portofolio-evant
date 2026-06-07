"use client";

import Logo from "../atoms/Logo";
import gsap from "gsap";
import Underline from "../atoms/Underline";

import { Menu, X, MoonStar, SunMedium } from "lucide-react";
import { cn } from "@/libs/utils";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "#overview", label: "Overview", id: "overview" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = ({ active }: { active: string }) => {
  const { theme, setTheme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { contextSafe } = useGSAP({ scope: toggleRef });

  useGSAP(() => {
    const activeLink = document.querySelector(
      `.active-section .custom-underline`
    );
    const inactiveLinks = document.querySelectorAll(
      `.link-section:not(.active-section) .custom-underline`
    );

    gsap.fromTo(
      activeLink,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.3, ease: "power2.in" }
    );

    gsap.to(inactiveLinks, {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, [active]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleToggle = contextSafe(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    gsap.fromTo(
      toggleRef.current,
      { rotate: 0, scale: 1 },
      {
        rotate: 360,
        scale: 1.25,
        duration: 0.45,
        ease: "back.out(2)",
        clearProps: "all",
      }
    );
  });

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="flex items-end justify-between p-5 xl:px-10 xl:pt-8">
        {/* Logo */}
        <Logo />

        {/* Desktop nav links */}
        <div className="font-serif hidden sm:flex sm:text-base sm:gap-15 lg:gap-25">
          {navLinks.slice(0, 3).map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              className={cn("link-section", {
                "active-section": active === id,
              })}
            >
              {label}
              <Underline />
            </a>
          ))}
        </div>

        {/* Desktop: Contact + theme toggle | Mobile: theme toggle + hamburger */}
        <div className="font-serif flex gap-2 sm:gap-5 items-center">
          <a
            href="#contact"
            className={cn("link-section hidden sm:inline-flex", {
              "active-section": active === "contact",
            })}
          >
            Contact
            <Underline />
          </a>
          <button
            ref={toggleRef}
            onClick={handleToggle}
            className="cursor-pointer p-1.5 rounded-lg hover:bg-foreground/10 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {mounted && theme === "dark" ? (
              <SunMedium fill="#f0bc68" stroke="#f0bc68" className="size-5" />
            ) : (
              <MoonStar fill="#689CF0" stroke="#689CF0" className="size-5" />
            )}
          </button>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden cursor-pointer p-1.5 rounded-lg hover:bg-foreground/10 transition-colors duration-200"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        aria-hidden={!mobileOpen}
        className={cn(
          "sm:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 pb-5 pt-1 border-b border-foreground/10">
          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "font-serif text-base py-2 link-section w-fit transition-colors duration-200",
                active === id ? "text-primary-fg" : "opacity-70 hover:opacity-100"
              )}
            >
              {label}
              <Underline />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
