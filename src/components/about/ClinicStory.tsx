"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { CLINIC_INFO } from "@/lib/constants";
import GradientText from "@/components/animation/GradientText";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { Quote, Eye, Target, ShieldCheck } from "lucide-react";

export default function ClinicStory() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Clinic Name */}
          <ScrollReveal animation="fadeUp">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-tight" style={{ color: "#1E293B" }}>
              {CLINIC_INFO.name}
            </h2>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal animation="fadeUp" delay={0.15}>
            <p className="mt-4 text-2xl md:text-3xl font-serif">
              <GradientText>{CLINIC_INFO.tagline}</GradientText>
            </p>
          </ScrollReveal>

          {/* Mission Statement */}
          <ScrollReveal animation="fadeUp" delay={0.3}>
            <Card variant="glass" className="mt-12 p-8 md:p-10 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-healing-teal/20" />
              <Quote className="absolute bottom-4 right-4 w-8 h-8 text-healing-teal/20 rotate-180" />

              <div className="flex items-center justify-center gap-2 mb-4">
                <Target className="w-5 h-5 text-healing-teal" />
                <h3 className="font-serif text-xl text-charcoal" style={{ color: "#1E293B" }}>
                  Our Mission
                </h3>
              </div>
              <blockquote className="text-lg md:text-xl text-slate leading-relaxed italic font-serif" style={{ color: "#64748B" }}>
                &ldquo;{CLINIC_INFO.mission}&rdquo;
              </blockquote>
            </Card>
          </ScrollReveal>

          {/* Vision Statement */}
          <ScrollReveal animation="fadeUp" delay={0.45}>
            <div className="mt-10 p-8 rounded-xl bg-gradient-to-br from-healing-teal to-deep-teal text-white relative overflow-hidden" style={{ color: "#FFFFFF" }}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Eye className="w-5 h-5 text-white/80" style={{ color: "#E2E8F0" }} />
                  <h3 className="font-serif text-xl text-white" style={{ color: "#FFFFFF" }}>Our Vision</h3>
                </div>
                <blockquote className="text-xl md:text-2xl font-serif italic leading-relaxed" style={{ color: "#FFFFFF" }}>
                  &ldquo;{CLINIC_INFO.vision}&rdquo;
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          {/* NICPR Certification */}
          <ScrollReveal animation="fadeUp" delay={0.6}>
            <div className="mt-10 flex items-center justify-center gap-3 p-4 rounded-lg bg-cloud border border-healing-teal/20">
              <ShieldCheck className="w-6 h-6 text-healing-teal shrink-0" />
              <p className="text-sm text-slate" style={{ color: "#64748B" }}>
                Cancer screening certified by{" "}
                <span className="font-semibold text-charcoal" style={{ color: "#1E293B" }}>
                  NICPR (National Institute of Cancer Prevention and Research)
                </span>{" "}
                under ICMR protocols
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
