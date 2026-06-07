import { RefObject, useRef } from "react";
import { cn } from "@/libs/utils";
import { LucideIcon } from "lucide-react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import Link from "next/link";

interface Props {
  variant?: "solid" | "outline";
  text: string;
  Icon: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  href?: string;
}

const Button = ({
  variant = "solid",
  text,
  Icon,
  iconPosition = "left",
  href,
}: Props) => {
  // const progressRef = useRef<gsap.core.Timeline | null>(null);
  // const spanRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const { contextSafe } = useGSAP(
    // () => {
    // const tl = gsap.timeline({ paused: true });
    // tl.to(spanRef.current, {
    //   borderRadius: "0.75rem",
    //   scaleX: 1,
    //   duration: 0.5,
    //   ease: "power1.inOut",
    // });
    // progressRef.current = tl;
    // },
    { scope: buttonRef },
  );
  const { contextSafe: linkContextSafe } = useGSAP({ scope: linkRef });

  const handlePressStart = (
    ref:
      | RefObject<HTMLButtonElement | null>
      | RefObject<HTMLAnchorElement | null>,
  ) => {
    const context = href ? linkContextSafe : contextSafe;
    context(() => {
      gsap.to(ref.current, {
        scale: 0.98,
        y: 4,
        duration: 0.1,
        ease: "power1.out",
      });
    })();
  };
  const handlePressEnd = (
    ref:
      | RefObject<HTMLButtonElement | null>
      | RefObject<HTMLAnchorElement | null>,
  ) => {
    const context = href ? linkContextSafe : contextSafe;
    context(() => {
      gsap.to(ref.current, {
        scale: 1,
        y: 0,
        duration: 0.1,
        ease: "power1.inOut",
      });
    })();
  };

  if (href !== undefined)
    return (
      <Link
        href={href}
        ref={linkRef}
        className={cn(
          "cta-button max-w-fit justify-between rounded-xl cursor-pointer relative",
          {
            "bg-primary text-cream": variant === "solid",
            border: variant === "outline",
          },
        )}
        aria-label={text}
        onPointerDown={() => handlePressStart(linkRef)}
        onPointerUp={() => handlePressEnd(linkRef)}
        onPointerLeave={() => handlePressEnd(linkRef)}
      >
        {" "}
        {iconPosition === "left" && (
          <Icon className="z-10 hidden sm:block sm:size-4 xl:size-5" />
        )}
        <span className="font-sans font-medium z-10 text-sm xl:text-base">
          {text}
        </span>
        {iconPosition === "right" && (
          <Icon className="z-10 hidden sm:block sm:size-4 xl:size-5" />
        )}
      </Link>
    );
  return (
    <button
      ref={buttonRef}
      className={cn(
        "cta-button max-w-fit justify-between rounded-xl cursor-pointer relative",
        {
          "bg-primary text-cream": variant === "solid",
          border: variant === "outline",
        },
      )}
      aria-label={text}
      onPointerDown={() => handlePressStart(buttonRef)}
      onPointerUp={() => handlePressEnd(buttonRef)}
      onPointerLeave={() => handlePressEnd(buttonRef)}
    >
      {iconPosition === "left" && (
        <Icon className="z-10 hidden sm:block sm:size-4 xl:size-5" />
      )}
      <span className="font-sans font-medium z-10 text-sm xl:text-base">
        {text}
      </span>
      {iconPosition === "right" && (
        <Icon className="z-10 hidden sm:block sm:size-4 xl:size-5" />
      )}
    </button>
  );
};

export default Button;
