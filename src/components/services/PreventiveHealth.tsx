"use client";

import { Shield } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function PreventiveHealth() {
  return (
    <ServiceCard
      title="Preventive Health & Checkups"
      description={
        <>
          <p>
            Prevention is the cornerstone of good health. Our comprehensive
            health checkup programs are designed to detect potential health risks
            early, enabling timely intervention and better outcomes.
          </p>
          <p>
            From routine annual exams to specialised occupational health
            screenings, we offer a range of preventive services tailored to your
            age, lifestyle, and risk factors.
          </p>
        </>
      }
      features={[
        "Comprehensive annual health checkups",
        "Pre-employment medical examinations",
        "Periodic medical checkups for corporates",
        "Vaccinations for adults, students & elderly",
        "Cancer prevention vaccination programs",
      ]}
      icon={Shield}
      reversed={false}
      imagePlaceholder="Preventive Health & Checkups"
    />
  );
}
