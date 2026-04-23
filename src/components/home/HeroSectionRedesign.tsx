"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Star,
  Phone,
  MessageCircle,
  Heart,
  Shield,
  Activity,
  Users,
  Play
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/lib/constants";

type JourneyOption = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
};

const journeyOptions: JourneyOption[] = [
  {
    id: "newly-diagnosed",
    icon: <Activity size={24} />,
    title: "I was recently diagnosed with diabetes",
    subtitle: "Learn how we can help you take control",
    link: "/services#diabetic-care",
  },
  {
    id: "uncontrolled",
    icon: <Shield size={24} />,
    title: "My diabetes is not under control",
    subtitle: "Discover our reversal program",
    link: "/services#diabetic-care",
  },
  {
    id: "wound-care",
    icon: <Heart size={24} />,
    title: "I have a wound that won't heal",
    subtitle: "We specialize in saving limbs",
    link: "/services#wound-care",
  },
  {
    id: "prevention",
    icon: <Users size={24} />,
    title: "I want to prevent complications",
    subtitle: "Proactive care for long-term health",
    link: "/services#preventive-health",
  },
];

export default function HeroSectionRedesign() {
  const [selectedJourney, setSelectedJourney] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-warm-cream via-white to-soft-teal/20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(244, 168, 150, 0.08) 0%, transparent 50%)`,
        }}
      />

      <Container className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Trust bar - moved to top */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12 text-sm">
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              <span className="font-bold text-charcoal">4.9</span>
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-gray-600">387+ Google Reviews</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="font-bold text-charcoal">10,000+</span>
            <span className="text-gray-600">Patients Treated</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="font-bold text-charcoal">17+</span>
            <span className="text-gray-600">Years Experience</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Empathetic headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              You&apos;re Not Alone in This Journey
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Whether you&apos;re newly diagnosed, struggling to control your diabetes,
              or worried about a wound — we&apos;ve helped thousands find hope and healing.
            </p>

            {/* Key differentiator */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-healing-teal/10 border border-healing-teal/20 rounded-xl mb-8">
              <Shield size={20} className="text-healing-teal" />
              <span className="text-charcoal font-medium">
                CMC Vellore trained • WHO certified • Evidence-based care
              </span>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-healing-teal text-white rounded-xl font-semibold hover:bg-deep-teal transition-colors shadow-lg shadow-healing-teal/20"
              >
                Book Your First Visit
                <ChevronRight size={20} />
              </Link>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white border-2 border-gray-200 text-charcoal rounded-xl font-semibold hover:border-healing-teal hover:text-healing-teal transition-colors"
              >
                <Phone size={20} />
                Call: {CLINIC_INFO.phone}
              </a>
            </div>

            {/* WhatsApp quick connect */}
            <a
              href={`https://wa.me/${CLINIC_INFO.phone.replace(/[^0-9]/g, "")}?text=Hi, I would like to know more about your services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle size={18} />
              <span>Prefer WhatsApp? Chat with us instantly</span>
            </a>
          </div>

          {/* Right: Doctor + Video CTA */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Doctor image with video play button */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doctor/dr-premlal.jpg"
                  alt="Dr. K S Premlal - Diabetes & Wound Care Specialist"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

                {/* Doctor info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm opacity-80 mb-1">Your Doctor</p>
                  <h3 className="font-serif text-2xl mb-2">Dr. K S Premlal</h3>
                  <p className="text-sm opacity-90">
                    MBBS, MD, PGDFM, CCEBDM, BCCPM
                  </p>
                </div>

                {/* Video play button - commented out until video is available */}
                {/* <button
                  onClick={() => setShowVideo(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all group"
                  aria-label="Watch doctor introduction video"
                >
                  <Play size={32} className="text-healing-teal ml-1 group-hover:scale-110 transition-transform" />
                </button> */}
              </div>

              {/* Floating credential cards */}
              <div className="absolute -left-4 sm:-left-8 top-1/4 bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-[160px]">
                <div className="text-xs text-gray-500 mb-1">Registration</div>
                <div className="font-semibold text-charcoal text-sm">TMC 85605</div>
                <div className="text-xs text-healing-teal">Verified Doctor</div>
              </div>

              <div className="absolute -right-4 sm:-right-8 top-1/3 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-1">
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                  <Star size={14} className="text-amber-500 fill-amber-500" />
                </div>
                <div className="text-xs text-gray-500">&quot;Saved my foot from amputation&quot;</div>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Journey Navigator */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-3">
              How Can We Help You Today?
            </h2>
            <p className="text-gray-600">
              Select your situation for personalized guidance
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journeyOptions.map((option) => (
              <Link
                key={option.id}
                href={option.link}
                className={`journey-option group ${
                  selectedJourney === option.id ? "selected" : ""
                }`}
                onMouseEnter={() => setSelectedJourney(option.id)}
                onMouseLeave={() => setSelectedJourney(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-healing-teal/10 rounded-xl flex items-center justify-center text-healing-teal group-hover:bg-healing-teal group-hover:text-white transition-colors">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1 group-hover:text-healing-teal transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {option.subtitle}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-healing-teal group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Video Modal - for future use */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="bg-white rounded-2xl p-2 max-w-3xl w-full aspect-video">
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">Video coming soon</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
