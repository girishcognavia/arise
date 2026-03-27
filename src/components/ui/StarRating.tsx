import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: 14,
  md: 18,
  lg: 24,
};

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  className,
}: StarRatingProps) {
  const iconSize = sizeMap[size];

  return (
    <div className={cn("inline-flex items-center gap-0.5", className)}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;
        const isFull = rating >= starIndex;
        const isHalf = !isFull && rating >= starIndex - 0.5;

        if (isFull) {
          return (
            <Star
              key={i}
              size={iconSize}
              className="text-warm-gold fill-warm-gold"
            />
          );
        }

        if (isHalf) {
          return (
            <div key={i} className="relative" style={{ width: iconSize, height: iconSize }}>
              <Star
                size={iconSize}
                className="absolute inset-0 text-gray-200 fill-gray-200"
              />
              <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star
                  size={iconSize}
                  className="text-warm-gold fill-warm-gold"
                />
              </div>
            </div>
          );
        }

        return (
          <Star
            key={i}
            size={iconSize}
            className="text-gray-200 fill-gray-200"
          />
        );
      })}
    </div>
  );
}
