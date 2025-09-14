import Logo from "../atoms/Logo";
import gsap from "gsap";
import Underline from "../atoms/Underline";

import { MoonStar } from "lucide-react";
import { cn } from "@/libs/utils";
import { useGSAP } from "@gsap/react";

const Navbar = ({ active }: { active: string }) => {
  useGSAP(() => {
    const activeLink = document.querySelector(
      `.active-section .custom-underline`
    );
    const inactiveLinks = document.querySelectorAll(
      `.link-section:not(.active-section) .custom-underline`
    );

    // Animate active underline in
    gsap.fromTo(
      activeLink,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.3, ease: "power2.in" }
    );

    // Animate all inactive underlines out
    gsap.to(inactiveLinks, {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  }, [active]);
  return (
    <nav className="flex items-end justify-between p-5 xl:px-10 xl:pt-8 sticky top-0 z-50 backdrop-blur-md">
      {/* logo */}
      <Logo />
      {/* contents */}
      <div className="font-serif hidden sm:flex sm:text-base sm:gap-15 lg:gap-25">
        <a
          href="#overview"
          className={cn("link-section", {
            "active-section": active === "overview",
          })}
        >
          Overview
          <Underline />
        </a>
        <a
          href="#about"
          className={cn("link-section", {
            "active-section": active === "about",
          })}
        >
          About
          <Underline />
        </a>
        <a
          href="#works"
          className={cn("link-section", {
            "active-section": active === "works",
          })}
        >
          Works
          <Underline />
        </a>
      </div>
      {/* contacts */}
      <div className="font-serif hidden sm:flex gap-5">
        <a
          href="#contact"
          className={cn("link-section", {
            "active-section": active === "contact",
          })}
        >
          Contact
          <Underline />
        </a>
        <button>
          <MoonStar fill="#689CF0" className="cursor-pointer" />
          {/* <SunMedium fill="#f0bc68" className="cursor-pointer" /> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
