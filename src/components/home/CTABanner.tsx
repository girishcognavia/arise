"use client";

import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO, OPERATING_HOURS } from "@/lib/constants";

export default function CTABanner() {
  const weekdayHours = OPERATING_HOURS[0]?.hours ?? "7:00 AM - 7:00 PM";

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-charcoal">
      {/* Decorative glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-healing-teal/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-healing-teal/15 blur-[80px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="font-serif leading-tight text-3xl sm:text-4xl lg:text-5xl"
            style={{ color: "#FFFFFF" }}
          >
            Your Diabetes Doesn&apos;t Have to Define Your Life
          </h2>

          <p
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: "#CBD5E1" }}
          >
            Mon - Sat: {weekdayHours} | Sunday: Closed
          </p>

          <p className="flex items-center gap-2 justify-center">
            <Phone size={16} className="text-healing-teal" />
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="hover:text-healing-teal transition-colors font-semibold text-lg"
              style={{ color: "#FFFFFF" }}
            >
              {CLINIC_INFO.phone}
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link href="/contact">
              <Button size="lg" variant="primary">
                Book Appointment
              </Button>
            </Link>
            <a href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-charcoal transition-all duration-200"
                style={{ color: "#FFFFFF" }}
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          <a
            href={CLINIC_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-whatsapp transition-colors mt-2"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
