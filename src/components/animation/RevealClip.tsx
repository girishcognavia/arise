"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "bottom" | "left" | "right";

interface RevealClipProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  className?: string;
}

const clipPaths: Record<Direction, { from: string; to: string }> = {
  bottom: {
    from: "inset(100% 0 0 0)",
    to: "inset(0% 0 0 0)",
  },
  left: {
    from: "inset(0 100% 0 0)",
    to: "inset(0 0% 0 0)",
  },
  right: {
    from: "inset(0 0 0 100%)",
    to: "inset(0 0 0 0%)",
  },
};

export default function RevealClip({
  children,
  direction = "bottom",
  duration = 1,
  className,
}: RevealClipProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(el, { clipPath: "inset(0 0 0 0)" });
      return;
    }

    const clip = clipPaths[direction];

    gsap.set(el, { clipPath: clip.from });

    const tween = gsap.to(el, {
      clipPath: clip.to,
      duration,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, duration]);

  return (
    <div ref={ref} className={className} style={{ clipPath: "inset(100% 0 0 0)" }}>
      {children}
    </div>
  );
}
