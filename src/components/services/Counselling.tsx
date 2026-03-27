"use client";

import { Brain } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Counselling() {
  return (
    <ServiceCard
      title="Counselling & Psychotherapy"
      description={
        <>
          <p>
            Mental health is an integral part of overall well-being. With an MSc
            in Counselling and Psychotherapy, Dr. Premlal provides professional
            mental health support alongside chronic disease management.
          </p>
          <p>
            We offer specialised care for adolescent emotional challenges and
            provide counselling that addresses the psychological impact of living
            with chronic conditions like diabetes.
          </p>
        </>
      }
      features={[
        "MSc-qualified counselling & psychotherapy",
        "Adolescent emotional care & support",
        "Mental health alongside chronic disease management",
        "Stress & anxiety management techniques",
        "Family & relationship counselling",
      ]}
      icon={Brain}
      reversed={true}
      imagePlaceholder="Counselling & Psychotherapy"
    />
  );
}
