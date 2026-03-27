"use client";

import { Video } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function TeleConsultation() {
  return (
    <ServiceCard
      title="Video / Tele Consultation"
      description={
        <>
          <p>
            Access quality healthcare from the comfort of your home. Our video
            consultation service makes it easy for patients who cannot visit the
            clinic in person to receive expert medical advice and follow-up care.
          </p>
          <p>
            Whether you need a follow-up consultation, medication review, or
            general health guidance, our tele-consultation service brings
            Sukrithi&apos;s care directly to you.
          </p>
        </>
      }
      features={[
        "Remote access to expert medical consultation",
        "Convenient follow-up appointments",
        "Medication review & adjustment",
        "Accessible from anywhere in India",
        "Easy online booking & scheduling",
      ]}
      icon={Video}
      reversed={false}
      imagePlaceholder="Video / Tele Consultation"
    />
  );
}
