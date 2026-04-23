"use client";

import { useState } from "react";
import {
  Type,
  Eye,
  Pause,
  Languages,
  Settings,
  X,
  ChevronLeft
} from "lucide-react";
import { useAccessibility } from "@/providers/AccessibilityProvider";

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    fontSize,
    setFontSize,
    language,
    setLanguage,
    reducedMotion,
    setReducedMotion,
    highContrast,
    setHighContrast,
  } = useAccessibility();

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-healing-teal text-white p-3 rounded-l-xl shadow-lg hover:bg-deep-teal transition-colors"
        aria-label="Open accessibility options"
        title="Accessibility Options"
      >
        <Settings size={20} />
      </button>

      {/* Panel */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-white rounded-l-2xl shadow-2xl border border-gray-200 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "280px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="font-semibold text-charcoal">Accessibility</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close accessibility panel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Options */}
        <div className="p-4 space-y-6">
          {/* Font Size */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Type size={16} />
              Text Size
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setFontSize("normal")}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  fontSize === "normal"
                    ? "bg-healing-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize("large")}
                className={`flex-1 py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  fontSize === "large"
                    ? "bg-healing-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize("xlarge")}
                className={`flex-1 py-2 px-3 rounded-lg text-lg font-medium transition-colors ${
                  fontSize === "xlarge"
                    ? "bg-healing-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                A++
              </button>
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Languages size={16} />
              Language
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  language === "en"
                    ? "bg-healing-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage("ml")}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  language === "ml"
                    ? "bg-healing-teal text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                മലയാളം
              </button>
            </div>
          </div>

          {/* High Contrast */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Eye size={16} />
              High Contrast
            </label>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                highContrast
                  ? "bg-healing-teal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {highContrast ? "On" : "Off"}
            </button>
          </div>

          {/* Reduced Motion */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
              <Pause size={16} />
              Reduce Animations
            </label>
            <button
              onClick={() => setReducedMotion(!reducedMotion)}
              className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                reducedMotion
                  ? "bg-healing-teal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {reducedMotion ? "On" : "Off"}
            </button>
          </div>
        </div>

        {/* Footer note */}
        <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Your preferences are saved automatically
          </p>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
