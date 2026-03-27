"use client";

import { Hand } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function PalliativeCare() {
  return (
    <ServiceCard
      title="Pain & Palliative Care"
      description={
        <>
          <p>
            Our WHO-certified palliative care program provides compassionate
            support for patients dealing with chronic pain and serious illness.
            Dr. Premlal holds the BCCPM (Basic Certificate Course in Palliative
            Medicine) from WHO, ensuring care that meets international standards.
          </p>
          <p>
            We also offer dedicated home care services for bedridden patients,
            bringing quality medical attention and comfort to those who need it
            most.
          </p>
        </>
      }
      features={[
        "WHO-certified palliative medicine (BCCPM)",
        "Chronic pain management & relief",
        "Home care for bedridden patients",
        "Compassionate end-of-life support",
        "Family counselling & caregiver guidance",
      ]}
      icon={Hand}
      reversed={false}
      imagePlaceholder="Pain & Palliative Care"
    />
  );
}
