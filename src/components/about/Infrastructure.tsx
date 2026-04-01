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
      "A hygienic, well-maintained clinic praised by patients for its cleanliness and comfortable atmosphere.",
  },
  {
    icon: UserCheck,
    title: "Walk-in Patients Welcome",
    description:
      "No appointment needed for consultations. Walk in during operating hours and receive prompt, attentive care.",
  },
  {
    icon: Video,
    title: "Video Consultation Available",
    description:
      "Connect with our doctors remotely through secure video consultations for convenient healthcare access from anywhere.",
  },
  {
    icon: Home,
    title: "Home Care for Bedridden Patients",
    description:
      "Compassionate palliative and medical care delivered to the homes of bedridden patients who cannot visit the clinic.",
  },
  {
    icon: Accessibility,
    title: "Gender-Neutral Restroom",
    description:
      "Inclusive facilities ensuring every patient feels welcome and comfortable during their visit.",
  },
  {
    icon: ShieldCheck,
    title: "COVID Safety Protocols",
    description:
      "Strict infection control measures including sanitization, ventilation, and safety protocols for patient protection.",
  },
];

export default function Infrastructure() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Our Facilities"
          subtitle="A patient-first environment designed for comfort, accessibility, and quality care"
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
