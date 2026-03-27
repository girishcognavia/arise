"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AnimationContextValue {
  reducedMotion: boolean;
}

const AnimationContext = createContext<AnimationContextValue>({
  reducedMotion: false,
});

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ reducedMotion }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  return useContext(AnimationContext);
}
