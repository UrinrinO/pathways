"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useElementProgress } from "@/components/motion/parallax";

/**
 * Two-way scroll animation: fades + rises in on entrance, fades + rises out on
 * exit. Scroll-linked (not a one-shot reveal). Respects reduced-motion.
 */
export function ScrollFade({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useElementProgress(ref);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  let opacity = 1;
  let ty = 0;
  if (!reduced) {
    if (p < 0.22) {
      const t = p / 0.22;
      opacity = t;
      ty = (1 - t) * 46;
    } else if (p > 0.8) {
      const t = (p - 0.8) / 0.2;
      opacity = 1 - t;
      ty = -t * 38;
    }
  }

  return (
    <div
      ref={ref}
      style={{ opacity, transform: `translate3d(0, ${ty.toFixed(1)}px, 0)` }}
      className={className}
    >
      {children}
    </div>
  );
}
