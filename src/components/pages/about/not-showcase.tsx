"use client";

import { useState } from "react";
import { sessionShots } from "@/lib/images";

const DISCIPLINES = [
  { title: "Create", line: "Design, music, film, content — tech amplifies it." },
  { title: "Communicate", line: "Tell your story so the right people actually listen." },
  { title: "Market", line: "Get your work in front of an audience that cares." },
  { title: "Organise", line: "Run projects, events and teams without the chaos." },
  { title: "Build businesses", line: "Turn a side project into something that pays." },
  { title: "Solve problems", line: "Use digital tools to fix real, everyday things." },
  { title: "Reach audiences", line: "Grow a following that genuinely sticks around." },
];

/**
 * Interactive hover-list of the seven disciplines (ported from the home
 * sessions-showcase): hover/tap a discipline to crossfade a landscape photo
 * and swap the one-line orange caption beneath it.
 */
export function NotShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Landscape photo — crossfades */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-paper-2 shadow-[0_30px_70px_-30px_rgba(14,18,24,0.4)]">
        {DISCIPLINES.map((d, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={d.title}
            src={sessionShots[i % sessionShots.length]}
            alt={d.title}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Orange caption — changes with the active discipline */}
      <div key={active} className="rise-in mt-5 flex items-start gap-2.5">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
        <p className="text-[15px] font-semibold leading-snug text-orange">
          {DISCIPLINES[active].line}
        </p>
      </div>

      {/* Hoverable discipline list */}
      <ul className="mt-6">
        {DISCIPLINES.map((d, i) => {
          const on = i === active;
          return (
            <li key={d.title}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-4 border-b border-ink/10 py-4 text-left"
              >
                <span
                  className={`text-xs font-bold tabular-nums transition-colors ${
                    on ? "text-lime" : "text-ink/25"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-xl font-bold tracking-tight transition-colors md:text-2xl ${
                    on ? "text-ink" : "text-ink/40"
                  }`}
                >
                  {d.title}
                </span>
                <span
                  aria-hidden
                  className={`text-lg transition-all duration-300 ${
                    on
                      ? "translate-x-0 text-orange opacity-100"
                      : "-translate-x-2 text-ink/30 opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
