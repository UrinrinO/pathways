"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useElementProgress } from "@/components/motion/parallax";

/**
 * Smooth entrance: content fades + rises in as it scrolls into view, then
 * LATCHES visible so it never fades back out while you're reading it. (An
 * earlier two-way version faded tall sections out mid-read — don't do that.)
 * Respects reduced-motion.
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
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (p >= 0.22) setSeen(true);
  }, [p]);

  let opacity = 1;
  let ty = 0;
  if (!reduced && !seen) {
    const t = Math.min(1, p / 0.22);
    opacity = t;
    ty = (1 - t) * 42;
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
