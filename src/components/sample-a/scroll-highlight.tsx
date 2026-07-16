"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Big statement whose words shade from soft-grey → ink as the section scrolls
 * through the viewport (Areto-style). Pure scroll-driven, no dependencies.
 */
export function ScrollHighlight({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [p, setP] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 as the block enters from the bottom, 1 once it passes ~60% up
      const raw = (vh * 0.85 - r.top) / (r.height + vh * 0.35);
      setP(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lit = p * (words.length + 3);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const amt = Math.min(1, Math.max(0, lit - i));
        // interpolate soft-grey (#aab1bc) → ink (#0e1218)
        const c = (a: number, b: number) => Math.round(a + (b - a) * amt);
        const color = `rgb(${c(170, 14)}, ${c(177, 18)}, ${c(188, 24)})`;
        return (
          <span key={i} style={{ color, transition: "color 0.15s linear" }}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
