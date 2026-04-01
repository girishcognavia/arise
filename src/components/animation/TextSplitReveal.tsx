"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function TextSplitReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.06,
}: TextSplitRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const wordElements = el.querySelectorAll<HTMLSpanElement>(".split-word");
    if (wordElements.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(wordElements, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(wordElements, { opacity: 0, y: 20 });

    const tween = gsap.to(wordElements, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay,
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
  }, [text, delay, staggerDelay]);

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="split-word"
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
