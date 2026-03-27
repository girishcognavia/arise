"use client";

import { HeartPulse } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function WoundCare() {
  return (
    <ServiceCard
      title="Diabetic Wound Care Without Amputation"
      description={
        <>
          <p>
            Our CMC-accredited diabetic foot care program provides specialised
            treatment for diabetic wounds and foot ulcers, with the primary goal
            of preventing amputations.
          </p>
          <p>
            With expert wound management techniques and personalised footwear
            guidance, we help patients preserve limb function and maintain their
            quality of life through advanced, non-surgical approaches.
          </p>
        </>
      }
      features={[
        "CMC-accredited diabetic foot care",
        "Advanced wound management techniques",
        "Diabetic footwear guidance",
        "Regular wound assessment & monitoring",
        "Amputation prevention protocols",
      ]}
      icon={HeartPulse}
      reversed={true}
      imagePlaceholder="Diabetic Wound Care"
    />
  );
}
