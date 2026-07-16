"use client";

import { useState } from "react";
import { sessionShots } from "@/lib/images";

const SESSIONS = [
  {
    n: "01",
    title: "Discover",
    blurb:
      "Map your interests, current skills and the directions actually worth exploring — no pressure to have it figured out.",
  },
  {
    n: "02",
    title: "Build",
    blurb:
      "Practical tools and workflows that match your niche. You don’t need to code to belong in the room.",
  },
  {
    n: "03",
    title: "Create",
    blurb:
      "Ship a small project alongside the group and get honest, useful feedback from people your own age.",
  },
  {
    n: "04",
    title: "Position",
    blurb:
      "Learn to communicate the value of your work and recognise the opportunities that are right for you.",
  },
  {
    n: "05",
    title: "Amplify",
    blurb:
      "Marketing, visibility and the real income pathways behind creative and digital work.",
  },
  {
    n: "06",
    title: "Progress",
    blurb:
      "Mentoring, professional connections and a next-step plan you keep working on after the sessions end.",
  },
];

export function SessionsShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      {/* Left — hoverable list */}
      <ul className="order-2 lg:order-1">
        {SESSIONS.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.n}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-5 border-b border-white/10 py-6 text-left"
              >
                <span
                  className={`text-sm font-bold tracking-tight transition-colors ${
                    on ? "text-lime" : "text-snow/25"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`flex-1 text-2xl font-bold tracking-tight transition-colors md:text-3xl ${
                    on ? "text-snow" : "text-snow/40"
                  }`}
                >
                  {s.title}
                </span>
                <span
                  aria-hidden
                  className={`text-xl transition-all duration-300 ${
                    on
                      ? "translate-x-0 text-lime opacity-100"
                      : "-translate-x-2 text-snow/30 opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Right — landscape image (crossfades) + changing caption */}
      <div className="order-1 lg:order-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-panel shadow-[0_40px_90px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
          {SESSIONS.map((s, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={s.n}
              src={sessionShots[i]}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
          {/* subtle lime edge glow for depth */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-lime/10"
          />
        </div>

        {/* bottom caption — changes with the hovered item */}
        <div key={active} className="rise-in mt-6">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Session {SESSIONS[active].n} · {SESSIONS[active].title}
          </div>
          <p className="mt-3 max-w-md leading-relaxed text-soft-grey">
            {SESSIONS[active].blurb}
          </p>
        </div>
      </div>
    </div>
  );
}
