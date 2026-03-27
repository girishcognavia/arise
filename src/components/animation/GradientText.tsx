"use client";

import { type ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={`gradient-text ${className ?? ""}`}
      style={{
        background: "linear-gradient(90deg, #0D9488, #0891B2, #0D9488)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "gradient-shift 4s ease infinite",
      }}
    >
      {children}
    </span>
  );
}
