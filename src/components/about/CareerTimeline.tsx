"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItem {
  year: string;
  title: string;
  institution: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2003–2008",
    title: "MBBS — Mahatma Gandhi Medical College",
    institution: "Pondicherry University, Pondicherry. Graduated December 2008.",
  },
  {
    year: "2008–2009",
    title: "Clerkship Trainee",
    institution: "Mahatma Gandhi Medical College and Research Institute, Pondicherry",
  },
  {
    year: "2009–2011",
    title: "Tutor, Department of Physiology",
    institution: "ACS Medical College, Chennai",
  },
  {
    year: "2011–2014",
    title: "MD (Community Medicine)",
    institution: "Meenakshi Medical College and Research Institute, Kanchipuram. Passed May 2014.",
  },
  {
    year: "2014–2015",
    title: "Assistant Professor, Community Medicine",
    institution: "Saveetha Medical College, Chennai",
  },
  {
    year: "2015–2016",
    title: "Assistant Professor, Community Medicine",
    institution: "Malabar Medical College & Hospital, Calicut",
  },
  {
    year: "2017–2018",
    title: "Assistant Professor, Community Medicine",
    institution: "P.K. Das Institute of Medical Sciences, Palakkad",
  },
  {
    year: "2018–2019",
    title: "Associate Professor, Community Medicine",
    institution: "P.K. Das Institute of Medical Sciences, Palakkad",
  },
  {
    year: "2019–2022",
    title: "Associate Professor, Community Medicine",
    institution: "Malabar Medical College & Hospital, Calicut",
  },
  {
    year: "2022",
    title: "Professor, Community Medicine",
    institution: "Palakkad Institute of Medical Science, Palakkad",
  },
  {
    year: "2022–2024",
    title: "Medical Officer & PGDFM from CMC Vellore",
    institution: "Sukrithi Family Health Centre — Community and Family Medicine",
  },
  {
    year: "2024–2025",
    title: "Professor, Community Medicine",
    institution: "Kannur Medical College",
  },
  {
    year: "Present",
    title: "Consultant Community & Family Physician",
    institution: "Arise Medical Centre — Clinical practice in diabetic care, wound care, and family medicine",
  },
];

export default function CareerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = timelineRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = container.querySelectorAll(".timeline-item");
    const dots = container.querySelectorAll(".timeline-dot");

    if (prefersReducedMotion) {
      gsap.set(line, { scaleY: 1 });
      gsap.set(items, { opacity: 1, x: 0 });
      gsap.set(dots, { scale: 1, opacity: 1 });
      return;
    }

    // Animate the vertical line drawing down
    gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
    const lineTween = gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    // Animate each timeline item
    const itemTweens = Array.from(items).map((item, index) => {
      const isLeft = index % 2 === 0;

      gsap.set(item, { opacity: 0, x: isLeft ? -40 : 40 });

      return gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
      });
    });

    // Animate dots with pulse
    const dotTweens = Array.from(dots).map((dot) => {
      gsap.set(dot, { scale: 0, opacity: 0 });

      return gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: dot,
          start: "top 85%",
          once: true,
          onEnter: () => {
            // Pulse effect
            gsap.to(dot, {
              scale: 1.4,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
              delay: 0.4,
            });
          },
        },
      });
    });

    return () => {
      lineTween.scrollTrigger?.kill();
      lineTween.kill();
      itemTweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
      dotTweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section className="section-padding bg-cloud">
      <Container>
        <SectionHeading
          title="Career Journey"
          subtitle="A dedicated path of learning, growth, and service in medicine"
        />

        <div ref={timelineRef} className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-healing-teal"
          />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-item relative flex items-start gap-8 md:gap-0 ${
                    isLeft
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                  style={{ opacity: 1 }}
                >
                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
                      {item.year && (
                        <span className="inline-block px-3 py-1 rounded-full bg-healing-teal text-white text-xs font-bold mb-2" style={{ color: "#FFFFFF" }}>
                          {item.year}
                        </span>
                      )}
                      <h4 className="text-base font-semibold text-charcoal leading-snug" style={{ color: "#1E293B" }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate mt-1 leading-relaxed" style={{ color: "#64748B" }}>
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="timeline-dot absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-healing-teal border-4 border-white shadow-md z-10 top-5" />

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
