"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animation/ScrollReveal";
import {
  Sparkles,
  UserCheck,
  Video,
  Home,
  Accessibility,
  ShieldCheck,
} from "lucide-react";

interface FacilityItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FACILITIES: FacilityItem[] = [
  {
    icon: Sparkles,
    title: "Clean & Modern Environment",
    description:
      "Consistently praised in Google reviews for cleanliness — a hygienic, well-maintained space where you feel at ease from the moment you walk in.",
  },
  {
    icon: UserCheck,
    title: "Walk-in Patients Welcome",
    description:
      "No appointment? No problem. Walk in during operating hours (Mon-Sat, 7 AM - 7 PM) and receive prompt, attentive care without the wait.",
  },
  {
    icon: Video,
    title: "Video Consultation Available",
    description:
      "Can't make it to Thrissur? Connect with Dr. Premlal via secure video call — ideal for follow-ups, NRI consultations, and ongoing care management.",
  },
  {
    icon: Home,
    title: "Home Care for Bedridden Patients",
    description:
      "Quality medical care shouldn't require a commute. We bring palliative care, wound management, and compassionate support directly to your home.",
  },
  {
    icon: Accessibility,
    title: "Inclusive & Accessible Facilities",
    description:
      "Gender-neutral restrooms and accessibility-friendly design ensure every patient feels welcome, respected, and comfortable.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Infection Control",
    description:
      "Rigorous sanitisation, proper ventilation, and established safety protocols protect every patient who walks through our doors.",
  },
];

export default function Infrastructure() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Our Facilities"
          subtitle="Every detail of our clinic is designed around one thing — your comfort and recovery"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FACILITIES.map((facility, index) => (
            <ScrollReveal
              key={facility.title}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <div className="group h-full bg-cloud rounded-xl p-6 border border-transparent hover:border-healing-teal/20 hover:bg-white hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-soft-teal flex items-center justify-center mb-4 group-hover:bg-healing-teal group-hover:shadow-glow transition-all duration-300">
                  <facility.icon className="w-6 h-6 text-healing-teal group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-base font-semibold text-charcoal mb-2" style={{ color: "#1E293B" }}>
                  {facility.title}
                </h4>
                <p className="text-sm text-slate leading-relaxed" style={{ color: "#64748B" }}>
                  {facility.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
