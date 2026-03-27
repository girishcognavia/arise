"use client";

import { Activity } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function DiabeticCare() {
  return (
    <ServiceCard
      title="Diabetic Care & Reversal Program"
      description={
        <>
          <p>
            Our evidence-based approach to diabetes management focuses on
            minimizing medication dependency through lifestyle modifications,
            personalised diet planning, and structured exercise programs.
          </p>
          <p>
            Dr. Premlal holds the CCEBDM (Certificate Course in Evidence Based
            Diabetes Management) accredited by the Public Health Foundation of
            India (PHFI) and Dr. Mohan&apos;s Diabetes Education Academy,
            ensuring patients receive treatment grounded in the latest clinical
            evidence.
          </p>
        </>
      }
      features={[
        "Evidence-based diabetes management (CCEBDM)",
        "Personalized diet & exercise planning",
        "Regular HbA1c monitoring & tracking",
        "Medication optimization & reduction",
        "Lifestyle counselling & support",
      ]}
      icon={Activity}
      reversed={false}
      imagePlaceholder="Diabetic Care & Reversal Program"
    />
  );
}
