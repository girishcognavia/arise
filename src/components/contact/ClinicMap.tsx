"use client";

import { CLINIC_INFO } from "@/lib/constants";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function ClinicMap() {
  return (
    <ScrollReveal animation="fadeUp">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={CLINIC_INFO.mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arise Medical Centre Location"
          className="w-full h-[400px]"
        />
      </div>
    </ScrollReveal>
  );
}
