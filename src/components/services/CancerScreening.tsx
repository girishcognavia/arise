"use client";

import { Search } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function CancerScreening() {
  return (
    <ServiceCard
      title="Cancer Screening"
      description={
        <>
          <p>
            Early detection saves lives. Our ICMR-certified clinical cancer
            screening program follows the protocols established by the National
            Institute of Cancer Prevention and Research (NICPR) to identify
            cancer risks at the earliest possible stage.
          </p>
          <p>
            Using evidence-based screening methods, we provide thorough
            assessments to help patients stay ahead of potential health threats.
          </p>
        </>
      }
      features={[
        "ICMR-certified cancer screening protocols",
        "Early detection through evidence-based methods",
        "NICPR-accredited assessment procedures",
        "Personalised risk evaluation & counselling",
        "Referral coordination for advanced diagnostics",
      ]}
      icon={Search}
      reversed={true}
      imagePlaceholder="Cancer Screening"
    />
  );
}
