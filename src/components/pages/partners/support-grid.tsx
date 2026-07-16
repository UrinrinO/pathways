"use client";

import { useState, type ReactNode } from "react";

type Support = {
  title: string;
  desc: string;
  paths: ReactNode;
};

function Icon({ paths, size }: { paths: ReactNode; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths}
    </svg>
  );
}

const SUPPORTS: Support[] = [
  {
    title: "Mentorship",
    desc: "Share your time one-to-one — honest guidance from someone who's done the work.",
    paths: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9.5" r="2.4" />
        <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
        <path d="M15.5 19c0-2.3 1.3-4 3.3-4" />
      </>
    ),
  },
  {
    title: "Professional insight",
    desc: "Talks, Q&As and real stories about how creative-tech careers actually work.",
    paths: (
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3Z" />
    ),
  },
  {
    title: "Opportunities",
    desc: "Internships, work experience, jobs and events to share with participants.",
    paths: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 12h18" />
      </>
    ),
  },
  {
    title: "Space",
    desc: "Offer a room, studio or desk where young people can meet, work and build.",
    paths: (
      <>
        <path d="M4 11l8-6 8 6" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
  },
  {
    title: "Live briefs",
    desc: "Set a real challenge for the group to respond to — the best kind of practice.",
    paths: (
      <>
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
  {
    title: "Visits",
    desc: "Open your doors for a studio or workplace visit — show what's possible up close.",
    paths: (
      <>
        <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  {
    title: "Equipment & resources",
    desc: "Hardware, software, licences or materials that put better tools in their hands.",
    paths: (
      <>
        <rect x="3" y="4.5" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16.5V20" />
      </>
    ),
  },
  {
    title: "Sponsorship",
    desc: "Back the programme financially and help keep Pathways free for every participant.",
    paths: (
      <path d="M12 21S4 15 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 15 12 21 12 21Z" />
    ),
  },
];

export function SupportGrid() {
  const [active, setActive] = useState(0);
  const current = SUPPORTS[active];

  return (
    <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
      {/* Left — support list */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {SUPPORTS.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                on
                  ? "border-transparent bg-snow shadow-[0_18px_50px_-30px_rgba(14,18,24,0.35)]"
                  : "border-line bg-paper/40 hover:border-ink/20"
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                  on ? "bg-lime text-lime-ink" : "bg-paper-2 text-ink-soft"
                }`}
              >
                <Icon paths={s.paths} size={22} />
              </span>
              <span className="min-w-0">
                <span
                  className={`block text-base font-bold tracking-tight transition-colors ${
                    on ? "text-ink" : "text-ink/70"
                  }`}
                >
                  {s.title}
                </span>
                <span className="mt-1 line-clamp-2 block text-sm leading-snug text-ink-soft">
                  {s.desc}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Right — animated feature panel */}
      <div className="relative overflow-hidden rounded-[32px] bg-carbon p-8 text-carbon-ink md:p-10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-14 h-56 w-56 rounded-full bg-lime/25 blur-[80px]" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-orange/15 blur-[80px]" />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(170,177,188,0.14) 1px, transparent 1.6px)",
              backgroundSize: "10px 10px",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 70% 30%, #000, transparent 72%)",
              maskImage:
                "radial-gradient(120% 120% at 70% 30%, #000, transparent 72%)",
            }}
          />
        </div>

        <div key={active} className="card-swap relative flex h-full flex-col">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-lime text-lime-ink">
            <Icon paths={current.paths} size={30} />
          </span>
          <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
            Ways to support · {String(active + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-snow">
            {current.title}
          </h3>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-carbon-ink/75">
            {current.desc}
          </p>
          <a
            href="#partner-cta"
            className="group mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-semibold text-snow"
          >
            <span className="border-b border-lime/50 pb-0.5">
              Partner with us
            </span>
            <span
              aria-hidden
              className="text-lime transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
