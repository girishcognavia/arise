import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, MessageCircle } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";

import DoctorProfile from "@/components/about/DoctorProfile";
import CareerTimeline from "@/components/about/CareerTimeline";
import ClinicStory from "@/components/about/ClinicStory";
import TeamSection from "@/components/about/TeamSection";
import Infrastructure from "@/components/about/Infrastructure";

export const metadata: Metadata = {
  title: "About Us | Sukrithi Family Health Centre",
  description:
    "Learn about Dr. K S Premlal, our experienced medical team, and the mission of Sukrithi Family Health Centre in Thrissur, Kerala. 17+ years of compassionate healthcare.",
  keywords: [
    "Dr K S Premlal",
    "Sukrithi Health Centre",
    "about sukrithi",
    "diabetologist thrissur",
    "family doctor thrissur kerala",
    "TMC 85605",
  ],
  openGraph: {
    title: "About Us | Sukrithi Family Health Centre",
    description:
      "Meet Dr. K S Premlal and the team behind Sukrithi Family Health Centre. 17+ years of expert diabetic care, preventive health, and compassionate medicine in Thrissur.",
    locale: "en_IN",
    type: "website",
    siteName: "Sukrithi Family Health Centre",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1E293B 0%, #0F766E 50%, #0D9488 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center">
            <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors duration-200" style={{ color: "rgba(255,255,255,0.7)" }}>
                Home
              </Link>
              <ChevronRight className="w-4 h-4" style={{ color: "rgba(255,255,255,0.5)" }} />
              <span className="font-medium" style={{ color: "#FFFFFF" }}>About</span>
            </nav>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
              About Us
            </h1>

            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              Dedicated to nurturing a healthy and happy community through
              integrated and compassionate healthcare services.
            </p>
          </div>
        </Container>
      </section>

      <DoctorProfile />
      <CareerTimeline />
      <ClinicStory />
      <TeamSection />
      <Infrastructure />

      {/* CTA Section */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D9488 0%, #0891B2 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full border border-white/5 animate-[pulse_4s_ease-in-out_infinite]" />
          <div className="absolute w-72 h-72 rounded-full border border-white/10 animate-[pulse_4s_ease-in-out_infinite_0.5s]" />
          <div className="absolute w-48 h-48 rounded-full border border-white/15 animate-[pulse_4s_ease-in-out_infinite_1s]" />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: "#FFFFFF" }}>
            Take the First Step Towards
            <br />a Healthier Life
          </h2>
          <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Book an appointment with Dr. K S Premlal and our expert team today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-healing-teal font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </Link>

            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/15 font-semibold text-base border border-white/30 hover:bg-white/25 transition-all duration-300"
              style={{ color: "#FFFFFF" }}
            >
              <Phone className="w-4 h-4" />
              {CLINIC_INFO.phone}
            </a>

            <a
              href={CLINIC_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-whatsapp font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ color: "#FFFFFF" }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
