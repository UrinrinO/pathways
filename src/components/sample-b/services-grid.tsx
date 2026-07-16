"use client";

import { useEffect, useState } from "react";
import { pillars } from "@/lib/content";

const CYCLE = 4200;

/** Icons shown on the collapsed (idle) cards. */
const ICONS = [
  // Connect — activity pulse
  <svg key="c" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h3.5l2 6 3.5-13 2.5 9H21" />
  </svg>,
  // Build — loader ring
  <svg key="b" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
    <path d="M12 4a8 8 0 1 1-5.7 2.4" />
  </svg>,
  // Progress — rising bars
  <svg key="p" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
    <path d="M6 20v-6M12 20V6M18 20v-10" />
  </svg>,
];

export function ServicesGrid() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % pillars.length), CYCLE);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="mt-16">
      {/* Desktop — width accordion */}
      <div className="hidden items-stretch gap-6 md:flex">
        {pillars.map((p, i) => {
          const on = i === active;
          return (
            <div
              key={p.n}
              onMouseEnter={() => {
                setActive(i);
                setPaused(true);
              }}
              onMouseLeave={() => setPaused(false)}
              style={{ flexGrow: on ? 2.5 : 1, flexBasis: 0 }}
              className="flex min-w-0 flex-col transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <article
                className={`flex min-h-[360px] flex-1 flex-col rounded-3xl bg-panel p-8 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] transition-all duration-500 md:p-9 ${
                  on ? "ring-1 ring-lime" : "ring-1 ring-white/5"
                }`}
              >
                <span className="text-sm font-semibold tracking-[0.15em] text-lime">
                  {p.n}
                </span>
                <h3 className="mt-5 whitespace-nowrap text-2xl font-bold tracking-tight text-snow">
                  {p.title}
                </h3>

                {/* hairline under title — only on active */}
                <div
                  className="mt-5 h-px origin-left bg-white/15 transition-transform duration-500"
                  style={{ transform: on ? "scaleX(1)" : "scaleX(0)" }}
                />

                {/* description (active) crossfades with icon (idle) */}
                <div className="relative mt-7 flex-1">
                  <p
                    className="absolute inset-0 max-w-sm leading-relaxed text-soft-grey transition-all duration-500"
                    style={{
                      opacity: on ? 1 : 0,
                      transform: on ? "none" : "translateY(8px)",
                      pointerEvents: on ? "auto" : "none",
                    }}
                  >
                    {p.body}
                  </p>
                  <div
                    className="absolute inset-0 flex items-start text-soft-grey transition-opacity duration-500"
                    style={{ opacity: on ? 0 : 1 }}
                    aria-hidden
                  >
                    {ICONS[i]}
                  </div>
                </div>

                <a
                  href="/programme"
                  className="group mt-8 inline-flex w-fit items-center gap-1.5 border-b border-white/25 pb-1 text-sm font-medium text-snow"
                >
                  View more
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </article>

              {/* 2px timer bar */}
              <div className="mt-4 h-0.5 overflow-hidden rounded-full bg-white/10">
                <div
                  key={`${i}-${active}-${paused}`}
                  className="h-full rounded-full bg-lime"
                  style={{
                    width: on ? "0%" : "0%",
                    animation:
                      on && !paused
                        ? `progress-fill ${CYCLE}ms linear both`
                        : on && paused
                        ? undefined
                        : "none",
                    ...(on && paused ? { width: "100%" } : {}),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile — simple stacked cards */}
      <div className="grid gap-4 md:hidden">
        {pillars.map((p) => (
          <article
            key={p.n}
            className="rounded-3xl bg-panel p-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/5"
          >
            <span className="text-sm font-semibold tracking-[0.15em] text-lime">
              {p.n}
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-snow">
              {p.title}
            </h3>
            <div className="mt-4 h-px bg-white/15" />
            <p className="mt-5 leading-relaxed text-soft-grey">{p.body}</p>
            <a
              href="/programme"
              className="group mt-6 inline-flex w-fit items-center gap-1.5 border-b border-white/25 pb-1 text-sm font-medium text-snow"
            >
              View more <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
