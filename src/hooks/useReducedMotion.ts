"use client";

import { useEffect, useState } from "react";
import { useAnimationContext } from "@/providers/AnimationProvider";

export function useReducedMotion(): boolean {
  const [fallback, setFallback] = useState(false);

  let contextValue: { reducedMotion: boolean } | undefined;
  try {
    contextValue = useAnimationContext();
  } catch {
    // Context not available, will use fallback
  }

  useEffect(() => {
    if (contextValue !== undefined) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setFallback(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setFallback(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [contextValue]);

  if (contextValue !== undefined) {
    return contextValue.reducedMotion;
  }

  return fallback;
}
