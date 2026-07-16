"use client";

import { useState } from "react";

type Phase = {
  tag: string;
  title: string;
  range: string;
  months: [number, number];
  lead: string;
  items: string[];
};

const PHASES: Phase[] = [
  {
    tag: "Phase One",
    title: "Core Sessions",
    range: "Months 1–6",
    months: [1, 6],
    lead: "Six monthly sessions in a relaxed, collaborative space — building a shared foundation and a clear individual next step.",
    items: [
      "Group discussion",
      "Practical activities",
      "Facilitator insight",
      "Real-world examples",
      "Peer feedback",
      "Individual next-step planning",
    ],
  },
  {
    tag: "Phase Two",
    title: "Progression Support",
    range: "Months 7–12",
    months: [7, 12],
    lead: "Six months of continued, personalised support — turning the momentum of the sessions into real, workable direction.",
    items: [
      "Mentoring",
      "Regular check-ins",
      "Niche development",
      "Opportunity guidance",
      "Application support",
      "Enterprise advice",
      "Introductions and referrals",
      "Final progression planning",
    ],
  },
];

/** Interactive two-phase view: switch phase to reveal its detail + timeline. */
export function PhaseSwitch() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <div>
      {/* segmented control */}
      <div className="flex flex-col gap-3 sm:flex-row">
        {PHASES.map((p, i) => {
          const on = active === i;
          return (
            <button
              key={p.tag}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={on}
              className={`group flex flex-1 items-center gap-4 rounded-3xl px-6 py-5 text-left transition-all duration-300 ${
                on
                  ? "bg-ink text-snow shadow-[0_22px_60px_-30px_rgba(14,18,24,0.6)]"
                  : "bg-snow text-ink shadow-[0_18px_50px_-32px_rgba(14,18,24,0.4)] hover:-translate-y-0.5"
              }`}
            >
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-bold transition-colors ${
                  on ? "bg-lime text-lime-ink" : "border-2 border-lime text-ink"
                }`}
              >
                {i + 1}
              </span>
              <span>
                <span
                  className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${
                    on ? "text-lime" : "text-ink-mute"
                  }`}
                >
                  {p.tag}
                </span>
                <span className="mt-0.5 block text-lg font-bold tracking-tight">
                  {p.title}
                </span>
                <span
                  className={`block text-sm ${
                    on ? "text-snow/70" : "text-ink-soft"
                  }`}
                >
                  {p.range}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* 12-month timeline */}
      <div className="mt-8">
        <div className="flex gap-1.5">
          {Array.from({ length: 12 }, (_, i) => {
            const m = i + 1;
            const inPhase = m >= phase.months[0] && m <= phase.months[1];
            return (
              <div key={m} className="flex-1">
                <div
                  className={`h-2 rounded-full transition-colors duration-300 ${
                    inPhase ? "bg-lime" : "bg-line"
                  }`}
                />
                <span className="mt-1.5 block text-center text-[10px] font-medium text-ink-mute">
                  {m}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
          Month of the 12-month journey
        </p>
      </div>

      {/* detail panel — re-keyed so it re-animates on switch */}
      <div
        key={active}
        className="card-swap mt-8 grid gap-8 rounded-3xl bg-snow p-8 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:p-12"
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-paper-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {phase.tag} · {phase.range}
          </span>
          <h3 className="mt-5 text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {phase.title}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            {phase.lead}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {phase.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3.5 text-sm font-medium text-ink"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
