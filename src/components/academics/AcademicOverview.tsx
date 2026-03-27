"use client";

import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DOCTOR_INFO } from "@/lib/constants";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const academicHighlights = [
  {
    icon: GraduationCap,
    title: "Current Position",
    description:
      "Associate Professor, Department of Community Medicine, Malabar Medical College Hospital & Research Centre, Kozhikode (Calicut)",
  },
  {
    icon: BookOpen,
    title: "Previous Appointments",
    description:
      "Assistant Professor at Saveetha Medical College and P. K. Das Institute of Medical Science",
  },
  {
    icon: Award,
    title: "Professional Membership",
    description:
      "Member, Research Society for Study of Diabetes in India (2023\u20132054)",
  },
  {
    icon: ExternalLink,
    title: "Published Researcher",
    description:
      "Google Scholar profile with 22+ citations across peer-reviewed research publications",
  },
];

export default function AcademicOverview() {
  return (
    <section className="py-16 md:py-24 bg-cloud">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Academic Excellence"
            subtitle="Dr. K S Premlal combines clinical expertise with a distinguished academic career, training the next generation of healthcare professionals."
          />
        </ScrollReveal>

        {/* Doctor academic intro */}
        <ScrollReveal animation="fadeUp" delay={0.2}>
          <div className="mt-12 mb-12 max-w-3xl mx-auto text-center">
            <p className="text-slate text-body leading-relaxed">
              With qualifications including{" "}
              <span className="font-semibold text-charcoal">
                {DOCTOR_INFO.fullTitle.replace("Dr. K S Premlal, ", "")}
              </span>
              , Dr. Premlal is recognised as a multitalented faculty member with
              many publications to his credit. His academic career spans
              prestigious institutions across South India.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlights grid */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          staggerDelay={0.15}
        >
          {academicHighlights.map((item) => (
            <Card key={item.title} className="p-6 group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-soft-teal flex items-center justify-center group-hover:bg-healing-teal transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-healing-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-lg text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </StaggerChildren>

        {/* Qualifications badges */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate mb-4 font-medium uppercase tracking-wide">
              Key Qualifications
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {DOCTOR_INFO.qualifications.map((q) => (
                <Badge key={q.degree} variant="default">
                  {q.degree.includes("(")
                    ? q.degree.split("(")[0].trim()
                    : q.degree}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
