"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type FontSize = "normal" | "large" | "xlarge";
type Language = "en" | "ml";

interface AccessibilityContextType {
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  highContrast: boolean;
  setHighContrast: (value: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}

interface AccessibilityProviderProps {
  children: ReactNode;
}

export function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [language, setLanguage] = useState<Language>("en");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("arise-font-size") as FontSize;
    const savedLanguage = localStorage.getItem("arise-language") as Language;
    const savedReducedMotion = localStorage.getItem("arise-reduced-motion");
    const savedHighContrast = localStorage.getItem("arise-high-contrast");

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedReducedMotion === "true") setReducedMotion(true);
    if (savedHighContrast === "true") setHighContrast(true);

    // Check system preference for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !savedReducedMotion) {
      setReducedMotion(true);
    }
  }, []);

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem("arise-font-size", fontSize);

    switch (fontSize) {
      case "large":
        root.style.setProperty("--text-body", "1.25rem");
        root.style.setProperty("--text-small", "1.125rem");
        root.classList.add("text-lg");
        root.classList.remove("text-xl");
        break;
      case "xlarge":
        root.style.setProperty("--text-body", "1.5rem");
        root.style.setProperty("--text-small", "1.25rem");
        root.classList.add("text-xl");
        root.classList.remove("text-lg");
        break;
      default:
        root.style.removeProperty("--text-body");
        root.style.removeProperty("--text-small");
        root.classList.remove("text-lg", "text-xl");
    }
  }, [fontSize]);

  // Apply language
  useEffect(() => {
    localStorage.setItem("arise-language", language);
    document.documentElement.lang = language;
  }, [language]);

  // Apply reduced motion
  useEffect(() => {
    localStorage.setItem("arise-reduced-motion", String(reducedMotion));
    if (reducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [reducedMotion]);

  // Apply high contrast
  useEffect(() => {
    localStorage.setItem("arise-high-contrast", String(highContrast));
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        language,
        setLanguage,
        reducedMotion,
        setReducedMotion,
        highContrast,
        setHighContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
