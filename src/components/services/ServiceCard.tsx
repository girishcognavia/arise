"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface ServiceCardProps {
  title: string;
  description: ReactNode;
  features: string[];
  icon: LucideIcon;
  reversed?: boolean;
  imagePlaceholder?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  reversed = false,
  imagePlaceholder,
  className = "",
}: ServiceCardProps) {
  const imageContent = (
    <ScrollReveal animation={reversed ? "slideRight" : "slideLeft"}>
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <div
          className="absolute inset-0"
          style={{
            background: reversed
              ? "linear-gradient(135deg, #065F46 0%, #0D9488 50%, #0891B2 100%)"
              : "linear-gradient(135deg, #0D9488 0%, #065F46 50%, #1E293B 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <Icon className="w-16 h-16 text-white/30 mx-auto mb-4" style={{ color: "rgba(255,255,255,0.3)" }} />
            <p className="text-white/60 font-medium text-lg" style={{ color: "#CBD5E1" }}>
              {imagePlaceholder || title}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );

  const textContent = (
    <ScrollReveal animation={reversed ? "slideLeft" : "slideRight"} delay={0.1}>
      <div className="flex flex-col gap-6">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-soft-teal flex items-center justify-center">
          <Icon className="w-7 h-7 text-healing-teal" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-tight tracking-tight" style={{ color: "#1E293B" }}>
          {title}
        </h3>

        {/* Description */}
        <div className="text-slate leading-relaxed space-y-4" style={{ color: "#64748B" }}>
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>

        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-healing-teal mt-0.5 flex-shrink-0" />
              <span className="text-charcoal" style={{ color: "#1E293B" }}>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-2">
          <Link href="/contact">
            <Button variant="primary" size="md">
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <section className={className}>
      <Container className="py-16 md:py-24">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {reversed ? (
            <>
              <div className="lg:order-2">{imageContent}</div>
              <div className="lg:order-1">{textContent}</div>
            </>
          ) : (
            <>
              <div>{imageContent}</div>
              <div>{textContent}</div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
