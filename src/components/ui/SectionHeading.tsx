import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={cn("flex flex-col gap-4", alignmentClasses[align], className)}>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight tracking-tight text-charcoal" style={{ color: "#1E293B" }}>
        {title}
      </h2>
      <div className="w-20 h-1 bg-healing-teal rounded-full transition-all duration-500" />
      {subtitle && (
        <p className="text-slate font-sans text-base lg:text-lg max-w-2xl leading-relaxed" style={{ color: "#64748B" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
