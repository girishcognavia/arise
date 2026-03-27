"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StarRating } from "@/components/ui/StarRating";
import { Avatar } from "@/components/ui/Avatar";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

const CARD_WIDTH = 400;
const GAP = 24;

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[number] }) => (
  <div
    className="flex-shrink-0"
    style={{ width: `${CARD_WIDTH}px` }}
  >
    <Card
      variant="testimonial"
      className="p-8 flex flex-col"
      style={{ height: "360px" }}
    >
      <span
        className="text-6xl font-serif text-healing-teal/20 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="mt-3">
        <StarRating rating={testimonial.rating} size="sm" />
      </div>

      <p className="text-charcoal text-sm leading-relaxed mt-4 flex-1 overflow-hidden">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3 pt-4 mt-auto border-t border-healing-teal/10">
        <Avatar name={testimonial.name} size="sm" />
        <div>
          <p className="text-charcoal font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-slate">
            Verified Google Review
          </p>
        </div>
      </div>
    </Card>
  </div>
);

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const totalWidth = TESTIMONIALS.length * (CARD_WIDTH + GAP);

  return (
    <section className="py-20 lg:py-28 bg-cloud overflow-hidden">
      {/* Inline keyframe — guaranteed to load */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes testimonialMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
        .testimonial-track {
          display: flex;
          gap: ${GAP}px;
          animation: testimonialMarquee 30s linear infinite;
          will-change: transform;
        }
        .testimonial-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <Container>
        <ScrollReveal animation="fadeUp">
          <SectionHeading
            title="What Our Patients Say"
            subtitle="4.9/5 from 387+ Google Reviews"
          />
        </ScrollReveal>
      </Container>

      {/* Marquee */}
      <div className="mt-16 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-cloud to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-cloud to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="testimonial-track">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={`a${i}`} testimonial={t} />
          ))}
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={`b${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
