import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-white shadow-md rounded-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
      glass:
        "backdrop-blur-xl bg-white/70 border border-white/30 shadow-lg rounded-xl",
      testimonial:
        "bg-gradient-to-br from-soft-teal/30 to-emerald-50/50 rounded-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card, cardVariants };
