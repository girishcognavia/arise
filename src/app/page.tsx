import HeroSectionRedesign from "@/components/home/HeroSectionRedesign";
import ThreePillars from "@/components/home/ThreePillars";
import DoctorBrief from "@/components/home/DoctorBrief";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesPreview from "@/components/home/ServicesPreview";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSectionRedesign />
      <ThreePillars />
      <DoctorBrief />
      <StatsCounter />
      <ServicesPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}
