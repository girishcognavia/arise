"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60]">
      <div
        className={cn(
          "h-full bg-gradient-to-r from-healing-teal to-cyan-500",
          "transition-[width] duration-150 ease-out"
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
