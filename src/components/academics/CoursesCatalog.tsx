"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface Course {
  id: string;
  title: string;
  audience: string;
  description: string;
  status: "coming-soon" | "enquire";
}

const courses: Course[] = [
  {
    id: "diabetic-foot-care",
    title: "Diabetic Foot Care & Management",
    audience: "For healthcare professionals",
    description:
      "A comprehensive course covering evidence-based approaches to diabetic foot care, wound assessment, footwear prescription, and amputation prevention strategies. Accredited curriculum based on CMC (Christian Medical College) standards and real-world clinical experience.",
    status: "enquire",
  },
  {
    id: "evidence-based-diabetes",
    title: "Evidence-Based Diabetes Management",
    audience: "For primary care physicians",
    description:
      "Learn the latest protocols in diabetes management including reversal strategies through lifestyle modification, minimal medication approaches, and monitoring techniques. Curriculum informed by the CCEBDM programme from PHFI and Dr. Mohan\u2019s Diabetes Education Academy.",
    status: "coming-soon",
  },
  {
    id: "palliative-care",
    title: "Palliative Care Essentials",
    audience: "For nurses and caregivers",
    description:
      "A foundational course in palliative medicine covering pain management, patient communication, home care for bedridden patients, and compassionate end-of-life care. Based on the WHO-certified BCCPM curriculum with practical clinical applications.",
    status: "coming-soon",
  },
  {
    id: "cancer-screening",
    title: "Cancer Screening Protocols",
    audience: "For medical students",
    description:
      "Training in clinical evidence-based cancer screening following ICMR (National Institute of Cancer Prevention and Research) protocols. Covers early detection methodologies, screening tools, and preventive oncology fundamentals.",
    status: "enquire",
  },
];

function AccordionItem({ course, isOpen, onToggle }: {
  course: Course;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-2 border-gray-100 rounded-xl overflow-hidden transition-colors duration-300 hover:border-healing-teal/30">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-cloud/50 transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex-1 pr-4">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="font-serif text-lg md:text-xl text-charcoal" style={{ color: "#1E293B" }}>
              {course.title}
            </h3>
            <Badge
              variant={course.status === "enquire" ? "default" : "warning"}
            >
              {course.status === "enquire" ? "Enquire" : "Coming Soon"}
            </Badge>
          </div>
          <p className="text-sm text-slate" style={{ color: "#64748B" }}>{course.audience}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated expandable content using grid-rows trick */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 pt-2 border-t border-gray-100">
            <p className="text-slate text-body leading-relaxed" style={{ color: "#64748B" }}>
              {course.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoursesCatalog() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Courses & Training Programs"
            subtitle="Educational programs designed for medical students and healthcare professionals, drawing from Dr. Premlal's clinical and academic expertise."
          />
        </ScrollReveal>

        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-4">
            {courses.map((course) => (
              <AccordionItem
                key={course.id}
                course={course}
                isOpen={openId === course.id}
                onToggle={() => handleToggle(course.id)}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fadeIn" delay={0.3}>
          <p className="text-center text-sm text-slate mt-8 max-w-lg mx-auto" style={{ color: "#64748B" }}>
            Course details and schedules are being finalised. Contact us for
            early enrollment enquiries or to express interest in upcoming
            programmes.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
