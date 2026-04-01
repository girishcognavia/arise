"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ServiceHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D9488 0%, #065F46 50%, #1E293B 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <Container className="relative z-10 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors duration-200" style={{ color: "rgba(255,255,255,0.7)" }}>
              Home
            </Link>
            <ChevronRight className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
            <span className="font-medium" style={{ color: "#FFFFFF" }}>Services</span>
          </nav>

          {/* Title */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Our Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Evidence-based treatment, proven patient outcomes, and the
            compassion to treat every person — not just a condition
          </p>
        </div>
      </Container>
    </section>
  );
}
