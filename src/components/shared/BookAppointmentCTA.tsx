"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CLINIC_INFO } from "@/lib/constants";

export function BookAppointmentCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden",
        "bg-white/90 backdrop-blur-lg border-t border-gray-200",
        "transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        {/* Call link */}
        <a
          href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 text-charcoal hover:text-healing-teal transition-colors duration-200"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-healing-teal/10">
            <Phone className="w-4 h-4 text-healing-teal" />
          </div>
          <span className="text-xs font-medium hidden sm:inline">Call Now</span>
        </a>

        {/* Book Appointment button */}
        <Link
          href="/contact"
          className="flex-1 max-w-xs text-center px-5 py-2.5 rounded-full bg-healing-teal text-white text-sm font-semibold transition-all duration-300 hover:bg-deep-teal active:scale-95"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}
