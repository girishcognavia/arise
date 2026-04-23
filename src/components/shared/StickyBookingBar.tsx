"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Phone, MessageCircle, X, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg transform transition-transform duration-300 ease-out">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Next available slot */}
          <div className="hidden sm:flex items-center gap-2 text-sm">
            <Clock size={16} className="text-healing-teal" />
            <span className="text-gray-600">Next available:</span>
            <span className="font-semibold text-charcoal">Today, 5:30 PM</span>
          </div>

          {/* Center/Right: Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 sm:flex-none justify-center sm:justify-end">
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi, I would like to book an appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors text-sm font-medium"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-charcoal rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call Now</span>
            </a>

            {/* Book Appointment - Primary CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-4 py-2 bg-healing-teal text-white rounded-lg hover:bg-deep-teal transition-colors text-sm font-medium"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </Link>

            {/* Dismiss button */}
            <button
              onClick={() => {
                setIsDismissed(true);
                setIsVisible(false);
              }}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss booking bar"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
