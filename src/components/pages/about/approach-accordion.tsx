"use client";

import { useEffect, useState } from "react";

const CYCLE = 4200;

const APPROACH = [
  {
    n: "01",
    title: "Start with the person",
    body: "We begin with your interests, ideas and ambitions — never a fixed syllabus.",
  },
  {
    n: "02",
    title: "Keep it practical",
    body: "Real examples, useful tools and clear actions you can take straight away.",
  },
  {
    n: "03",
    title: "Learn together",
    body: "Ideas, questions and honest feedback, shared with people your own age.",
  },
  {
    n: "04",
    title: "Continue the support",
    body: "Guidance, check-ins and progression long after the six core sessions end.",
  },
];

/** Simple stroke icons shown on the collapsed (idle) cards. */
const ICONS = [
  // Person
  <svg key="p" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>,
  // Practical — bolt
  <svg key="b" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M13 3 5 13h5l-1 8 8-11h-5l1-7z" />
  </svg>,
  // Together — speech bubble
  <svg key="t" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  </svg>,
  // Continue — curving forward arrow
  <svg key="c" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 20a8 8 0 0 1 8-8h5" />
    <path d="M13 8l4 4-4 4" />
  </svg>,
];

/**
 * Width-accordion of the four principles (ported from the home services-grid):
 * the active card grows wider and reveals number/title/hairline/description,
 * idle cards shrink to an icon, a lime timer bar auto-advances, hover pauses.
 */
export function ApproachAccordion() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % APPROACH.length),
      CYCLE
    );
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="mt-12">
      {/* Desktop — width accordion */}
      <div className="hidden items-stretch gap-5 md:flex">
        {APPROACH.map((a, i) => {
          const on = i === active;
          return (
            <div
              key={a.n}
              onMouseEnter={() => {
                setActive(i);
                setPaused(true);
              }}
              onMouseLeave={() => setPaused(false)}
              style={{ flexGrow: on ? 2.6 : 1, flexBasis: 0 }}
              className="flex min-w-0 flex-col transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <article className="relative min-h-[380px] flex-1 overflow-hidden rounded-3xl bg-snow shadow-[0_18px_50px_-30px_rgba(14,18,24,0.35)]">
                {/* idle — icon only */}
                <div
                  className="absolute inset-0 grid place-items-center text-ink-mute transition-opacity duration-500"
                  style={{ opacity: on ? 0 : 1 }}
                  aria-hidden
                >
                  {ICONS[i]}
                </div>

                {/* active — full content */}
                <div
                  className="absolute inset-0 flex flex-col p-8 transition-opacity duration-500 md:p-9"
                  style={{
                    opacity: on ? 1 : 0,
                    pointerEvents: on ? "auto" : "none",
                  }}
                >
                  <span className="text-sm font-semibold tracking-[0.15em] text-lime">
                    {a.n}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-ink">
                    {a.title}
                  </h3>
                  <div
                    className="mt-5 h-px origin-left bg-line transition-transform duration-500"
                    style={{ transform: on ? "scaleX(1)" : "scaleX(0)" }}
                  />
                  <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              </article>

              {/* 2px lime timer bar */}
              <div className="mt-4 h-0.5 overflow-hidden rounded-full bg-line/80">
                <div
                  key={`${i}-${active}-${paused}`}
                  className="h-full rounded-full bg-lime"
                  style={{
                    width: "0%",
                    animation:
                      on && !paused
                        ? `progress-fill ${CYCLE}ms linear both`
                        : "none",
                    ...(on && paused ? { width: "100%" } : {}),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile — stacked cards */}
      <div className="grid gap-4 md:hidden">
        {APPROACH.map((a) => (
          <article
            key={a.n}
            className="rounded-3xl bg-snow p-7 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.35)]"
          >
            <span className="text-sm font-semibold tracking-[0.15em] text-lime">
              {a.n}
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-ink">
              {a.title}
            </h3>
            <div className="mt-4 h-px bg-line" />
            <p className="mt-5 leading-relaxed text-ink-soft">{a.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
