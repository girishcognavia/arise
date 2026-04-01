"use client";

import { Container } from "@/components/ui/Container";
import ScrollReveal from "@/components/animation/ScrollReveal";
import CounterAnimation from "@/components/animation/CounterAnimation";
import { STATS } from "@/lib/constants";

export default function StatsCounter() {
  return (
    <section
      className="py-16 lg:py-20"
      style={{
        background: "linear-gradient(135deg, #0D9488 0%, #0F766E 50%, #065F46 100%)",
      }}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              animation="fadeUp"
              delay={index * 0.15}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <CounterAnimation
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.label === "Star Rating" ? 1 : 0}
                  className="text-4xl lg:text-5xl font-bold text-white font-display" style={{ color: "#FFFFFF" }}
                />
                <span className="text-white/80 text-sm lg:text-base font-medium" style={{ color: "#E2E8F0" }}>
                  {stat.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
