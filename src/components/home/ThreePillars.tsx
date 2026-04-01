"use client";

import Link from "next/link";
import { Activity, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import ScrollReveal from "@/components/animation/ScrollReveal";

const pillars = [
  {
    title: "Diabetic Care & Reversal",
    description:
      "Patients have brought their HbA1c from 9.2 down to 6.5 in just 3 months — with minimal medication. Our CCEBDM-accredited program combines personalised diet plans, structured exercise, and continuous monitoring to help you take control of diabetes.",
    icon: Activity,
    href: "/services#diabetic-care-reversal",
    color: "bg-teal-50 text-healing-teal",
  },
  {
    title: "Wound Care Without Amputation",
    description:
      "Before you consider amputation, consider us. Our CMC-accredited diabetic foot care program has helped patients heal wounds that others deemed untreatable — preserving limbs and restoring independence.",
    icon: Heart,
    href: "/services#wound-care",
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Academic Excellence",
    description:
      "The same expertise that trains tomorrow's doctors at Malabar Medical College is available to you today. Dr. Premlal brings research-grade knowledge directly into patient care.",
    icon: GraduationCap,
    href: "/academics",
    color: "bg-amber-50 text-warm-gold",
  },
];

export default function ThreePillars() {
  return (
    <section id="pillars" className="section-padding bg-cloud">
      <Container>
        <ScrollReveal animation="fadeUp">
          <SectionHeading
            title="Our Expertise"
            subtitle="Real results in diabetes reversal, limb-saving wound care, and medical education"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pillars.map((pillar, index) => (
            <ScrollReveal
              key={pillar.title}
              animation="scaleUp"
              delay={index * 0.1}
            >
              <Link href={pillar.href} className="block h-full">
                <Card className="p-8 h-full border-t-3 border-t-transparent hover:border-t-healing-teal hover:-translate-y-2 transition-all duration-300 group">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${pillar.color}`}
                  >
                    <pillar.icon size={28} />
                  </div>

                  <h3 className="font-serif text-xl text-charcoal mb-3 leading-tight" style={{ color: "#1E293B" }}>
                    {pillar.title}
                  </h3>

                  <p className="text-slate text-sm leading-relaxed mb-6" style={{ color: "#64748B" }}>
                    {pillar.description}
                  </p>

                  <span className="inline-flex items-center gap-1 text-healing-teal font-semibold text-sm group-hover:gap-2 transition-all duration-200">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
