"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

interface CounterAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export default function CounterAnimation({
  target,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const obj = { value: 0 };

            gsap.to(obj, {
              value: target,
              duration,
              ease: "power2.out",
              onUpdate: () => {
                if (el) {
                  el.textContent = `${prefix}${obj.value.toFixed(decimals)}${suffix}`;
                }
              },
              onComplete: () => {
                if (el) {
                  el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
                }
              },
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, suffix, prefix, decimals, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{target.toFixed(decimals)}{suffix}
    </span>
  );
}
