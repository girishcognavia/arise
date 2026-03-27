"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice =
      "ontouchstart" in window ||
      window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let isNearInteractive = false;
    let animationId: number;

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if cursor is near interactive elements
      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-grow]") ||
        target.closest('input[type="submit"]');

      isNearInteractive = !!interactive;
    };

    const animate = () => {
      dotX = lerp(dotX, mouseX, 0.15);
      dotY = lerp(dotY, mouseY, 0.15);

      if (dot) {
        dot.style.transform = `translate(${dotX - 10}px, ${dotY - 10}px) scale(${isNearInteractive ? 1.8 : 1})`;
      }

      animationId = requestAnimationFrame(animate);
    };

    // Show dot on first move
    const handleMouseEnter = () => {
      if (dot) dot.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (dot) dot.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-follower"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "rgba(13, 148, 136, 0.4)",
        boxShadow: "0 0 15px rgba(13, 148, 136, 0.3), 0 0 30px rgba(13, 148, 136, 0.15)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 0.3s ease, width 0.3s ease, height 0.3s ease",
        willChange: "transform",
        mixBlendMode: "normal",
      }}
    />
  );
}
