"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Register GSAP ScrollTrigger without Lenis to avoid scroll conflicts
    // Native CSS smooth scrolling + GSAP ScrollTrigger is more performant
    ScrollTrigger.defaults({
      toggleActions: "play none none none",
    });

    setReady(true);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <LenisContext.Provider value={null}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}
