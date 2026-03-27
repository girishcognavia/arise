"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  animation?: AnimationType;
  className?: string;
}

const animationConfigs: Record<AnimationType, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  fadeUp: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  slideLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0 },
  },
  slideRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0 },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
  },
};

export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  animation = "fadeUp",
  className,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const directChildren = el.children;
    if (directChildren.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(directChildren, { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    const config = animationConfigs[animation];

    gsap.set(directChildren, config.from);

    const tween = gsap.to(directChildren, {
      ...config.to,
      duration: 0.4,
      ease: "power3.out",
      stagger: staggerDelay,
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
  }, [staggerDelay, animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
