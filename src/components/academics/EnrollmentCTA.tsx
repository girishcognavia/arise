"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function EnrollmentCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-healing-teal to-deep-teal">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight mb-4">
              Interested in Our Courses?
            </h2>
            <p className="text-white/80 text-body leading-relaxed mb-8">
              Contact us for enrollment details, upcoming schedules, and
              information about our training programmes for healthcare
              professionals.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-deep-teal"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
