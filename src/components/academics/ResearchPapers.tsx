"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren from "@/components/animation/StaggerChildren";

const RESEARCH_PAPERS = [
  {
    title: "Prevalence of Overweight and Obesity Among College Going Students at Kancheepuram Town, Tamil Nadu",
    journal: "International Journal of Preventive and Public Health Sciences",
    year: "2016",
    authors: "K.S. Premlal, Balaji Arumugam, Saranya Nagalingam",
  },
  {
    title: "A Cross Sectional Study on Pattern and Associated Risk Factors of Musculoskeletal Morbidities Among Government Bus Drivers",
    journal: "International Journal of Community Medicine and Public Health",
    year: "2018",
    authors: "Vinu, K.S. Premlal, Saranya Nagalingam",
  },
  {
    title: "Prevalence of Cardiovascular Risk Factors Among College Students Aged 18-25 Years",
    journal: "International Journal of Community Medicine and Public Health",
    year: "2018",
    authors: "Premlal KS et al.",
  },
  {
    title: "Nutrigenomics: Future for Sustenance (Review Article)",
    journal: "International Journal of Research in Medical Sciences",
    year: "2022",
    authors: "Prem Lal, Remya Ramachandran, P.T. James et al.",
  },
  {
    title: "Effect of Webinars in Teaching-Learning Process During COVID-19 Pandemic",
    journal: "Journal of Education and Health Promotion",
    year: "2022",
    authors: "Janani Sivaramalingam, K.S. Premlal et al.",
  },
  {
    title: "Health Status of Adolescent School Students During COVID-19 Pandemic",
    journal: "Apollo Medicine",
    year: "2022",
    authors: "Shrinath G, Premlal KS et al.",
  },
  {
    title: "Health Status of Working Women in Tertiary Care Center During COVID-19 Pandemic",
    journal: "Apollo Medicine",
    year: "2024",
    authors: "Joseph R, Premlal KS, Anuja R",
  },
  {
    title: "Knowledge, Attitude and Practice of Hepatitis B",
    journal: "Apollo Medicine",
    year: "2024",
    authors: "Divya CV, Nithya G, Premlal KS",
  },
];

export default function ResearchPapers() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Published Research"
            subtitle="16+ peer-reviewed publications across international journals"
          />
        </ScrollReveal>

        <StaggerChildren
          className="mt-12 space-y-4"
          staggerDelay={0.1}
        >
          {RESEARCH_PAPERS.map((paper, index) => (
            <div
              key={paper.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-cloud hover:bg-soft-teal/20 border border-transparent hover:border-healing-teal/20 transition-all duration-300 group"
            >
              {/* Paper number circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{ backgroundColor: "#0F766E", color: "#FFFFFF" }}
              >
                {index + 1}
              </div>

              {/* Paper details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h3
                    className="font-semibold text-sm sm:text-base leading-snug flex-1"
                    style={{ color: "#1E293B" }}
                  >
                    {paper.title}
                  </h3>
                  <Badge variant="default" className="shrink-0">
                    {paper.year}
                  </Badge>
                </div>
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "#475569" }}
                >
                  {paper.journal}
                </p>
                <p
                  className="text-xs mt-1.5"
                  style={{ color: "#94A3B8" }}
                >
                  {paper.authors}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Bottom note */}
        <ScrollReveal animation="fadeUp" delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-sm italic" style={{ color: "#64748B" }}>
              Showing 8 of 16+ publications. Full list available on{" "}
              <a
                href="https://scholar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-healing-teal transition-colors duration-200"
                style={{ color: "#0F766E" }}
              >
                Google Scholar
              </a>
              .
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
