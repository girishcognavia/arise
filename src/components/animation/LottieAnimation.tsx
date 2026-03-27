"use client";

import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  path: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  playOnView?: boolean;
}

export default function LottieAnimation({
  path,
  loop = false,
  autoplay = false,
  className,
  playOnView = true,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<ReturnType<typeof Lottie> extends React.ReactElement ? unknown : unknown>(null);
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy-load the Lottie JSON
  useEffect(() => {
    let cancelled = false;

    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch((err) => {
        console.error("Failed to load Lottie animation:", err);
      });

    return () => {
      cancelled = true;
    };
  }, [path]);

  // IntersectionObserver to detect visibility
  useEffect(() => {
    if (!playOnView || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [playOnView]);

  const shouldPlay = autoplay || (playOnView && isVisible);

  if (!animationData) {
    return <div ref={containerRef} className={className} />;
  }

  return (
    <div ref={containerRef} className={className}>
      <Lottie
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lottieRef={lottieRef as any}
        animationData={animationData}
        loop={loop}
        autoplay={shouldPlay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
