"use client";

import { useState } from "react";
import { sessionShots } from "@/lib/images";

const FILTERS = [
  "All Sessions",
  "Upcoming",
  "Completed",
  "Digital Skills",
  "Creativity",
  "Marketing",
  "Enterprise",
  "Opportunities",
] as const;

type Filter = (typeof FILTERS)[number];

type Session = {
  n: string;
  status: "Upcoming" | "Completed";
  tags: string[];
};

const SESSIONS: Session[] = [
  { n: "01", status: "Upcoming", tags: ["Digital Skills", "Creativity"] },
  { n: "02", status: "Upcoming", tags: ["Creativity", "Marketing"] },
  { n: "03", status: "Upcoming", tags: ["Digital Skills", "Enterprise"] },
  { n: "04", status: "Upcoming", tags: ["Marketing", "Opportunities"] },
  { n: "05", status: "Upcoming", tags: ["Enterprise", "Opportunities"] },
  { n: "06", status: "Upcoming", tags: ["Digital Skills", "Opportunities"] },
];

function matches(session: Session, filter: Filter) {
  if (filter === "All Sessions") return true;
  if (filter === "Upcoming" || filter === "Completed")
    return session.status === filter;
  return session.tags.includes(filter);
}

/** Filter chips that highlight/dim a grid of six session cards. */
export function SessionExplorer() {
  const [filter, setFilter] = useState<Filter>("All Sessions");
  const count = SESSIONS.filter((s) => matches(s, filter)).length;

  return (
    <div>
      {/* filter chips */}
      <div className="flex flex-wrap gap-2.5">
        {FILTERS.map((f) => {
          const on = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                on
                  ? "border-ink bg-ink text-snow"
                  : "border-line bg-snow text-ink-soft hover:border-ink/30 hover:text-ink"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm text-ink-mute" aria-live="polite">
        Showing{" "}
        <span className="font-semibold text-ink">
          {count} of {SESSIONS.length}
        </span>{" "}
        sessions
        {filter !== "All Sessions" && (
          <>
            {" "}
            in <span className="font-semibold text-ink">{filter}</span>
          </>
        )}
      </p>

      {/* session grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SESSIONS.map((s, i) => {
          const on = matches(s, filter);
          return (
            <article
              key={s.n}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-line bg-snow shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] transition-all duration-300 ${
                on
                  ? "opacity-100"
                  : "opacity-40 grayscale hover:opacity-70"
              }`}
            >
              {/* image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-paper-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sessionShots[i]}
                  alt={`Placeholder visual for Session ${s.n}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-snow backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {s.status}
                </div>
                <span className="absolute right-4 top-4 text-3xl font-bold tracking-tight text-snow drop-shadow-md">
                  {s.n}
                </span>
              </div>

              {/* body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  Session {s.n}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">
                  Details coming soon.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-paper-2 px-2.5 py-1 text-[11px] font-medium text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                  <span className="font-medium text-ink-mute">
                    Theme announced soon
                  </span>
                  <span
                    aria-hidden
                    className="text-ink transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
