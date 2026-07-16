"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

/**
 * Progress (0→1) of an element travelling through the viewport.
 * 0 when the element's top hits the bottom of the viewport,
 * 1 when its bottom hits the top. Drives every scroll effect below.
 */
export function useElementProgress(ref: RefObject<HTMLElement | null>) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = r.height + vh;
      const seen = vh - r.top;
      setP(Math.min(1, Math.max(0, seen / total)));
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
  }, [ref]);
  return p;
}

/** Vertical parallax drift. `speed` in px of total travel (± speed/2). */
export function Parallax({
  speed = 80,
  className = "",
  children,
}: {
  speed?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = useElementProgress(ref);
  const y = (0.5 - p) * speed;
  return (
    <div
      ref={ref}
      style={{ transform: `translate3d(0, ${y.toFixed(1)}px, 0)` }}
      className={className}
    >
      {children}
    </div>
  );
}
