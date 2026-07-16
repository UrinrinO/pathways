"use client";

import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/images";

type Line = { t: "h" | "b" | "s"; text: string };
type Session = { tab: string; title: string; lines: Line[] };

/** The six core Pathways sessions — the card cycles through them. */
const SESSIONS: Session[] = [
  {
    tab: "Discover",
    title: "Discover · where you start",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Map your interests and current skills" },
      { t: "s", text: "You don’t need it all figured out" },
      { t: "b", text: "Spot where technology already fits" },
    ],
  },
  {
    tab: "Build",
    title: "Build · digital foundations",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Practical tools that match your niche" },
      { t: "s", text: "No code required to belong here" },
      { t: "b", text: "Turn an idea into a first draft" },
    ],
  },
  {
    tab: "Create",
    title: "Create · make it real",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Ship a small project with the group" },
      { t: "s", text: "Feedback from people your own age" },
      { t: "b", text: "Learn by doing, not by lectures" },
    ],
  },
  {
    tab: "Position",
    title: "Position · find your niche",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Communicate the value of your work" },
      { t: "s", text: "Recognise the right opportunities" },
      { t: "b", text: "Build a clearer sense of direction" },
    ],
  },
  {
    tab: "Amplify",
    title: "Amplify · be seen",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Marketing and digital visibility" },
      { t: "s", text: "Where income pathways come from" },
      { t: "b", text: "Get your work in front of people" },
    ],
  },
  {
    tab: "Progress",
    title: "Progress · your next move",
    lines: [
      { t: "h", text: "What we explored" },
      { t: "b", text: "Mentoring, guidance and connections" },
      { t: "s", text: "A plan you can keep working on" },
      { t: "b", text: "Support that continues after the room" },
    ],
  },
];

/**
 * Right-hand hero composition (à la Granola): a browser-style notes card that
 * transitions through the six core sessions — tabs list all six, the active
 * one highlights, and the notes crossfade + type in on each swap. Behind it,
 * offset colour/photo panels; a floating video-call tile plays the real film.
 */
export function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % SESSIONS.length),
      3400
    );
    return () => clearInterval(id);
  }, []);

  const session = SESSIONS[active];

  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[560px]">
      {/* Back panel — lime, textured, tilted (peeks bottom-left) */}
      <div className="absolute -left-2 top-24 h-[380px] w-56 -rotate-[6deg] overflow-hidden rounded-3xl bg-lime shadow-xl">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg,#0c0f16 0 1px,transparent 1px 10px)",
          }}
        />
      </div>

      {/* Back panel — photo, tilted the other way (peeks top-right) */}
      <div className="absolute right-0 top-0 h-72 w-60 rotate-[6deg] overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={galleryImages[0]}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange/40 via-transparent to-lime/30 mix-blend-overlay" />
      </div>

      {/* Notes card */}
      <div className="absolute left-10 top-8 z-10 w-[420px] max-w-[88%] rounded-2xl bg-snow shadow-2xl ring-1 ring-black/5">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-line/70 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#f4842b]" />
          <span className="h-3 w-3 rounded-full bg-[#e7c33a]" />
          <span className="h-3 w-3 rounded-full bg-lime" />
        </div>

        {/* the six sessions, listed as tabs */}
        <div className="flex flex-wrap gap-1.5 border-b border-line/60 px-4 py-3">
          {SESSIONS.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                i === active
                  ? "bg-ink text-snow"
                  : "text-ink-mute hover:text-ink"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* swapping body */}
        <div key={active} className="card-swap px-5 py-5">
          <h3 className="text-xl font-bold tracking-tight text-ink">
            {session.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft">
              Today
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-soft">
              4 in the room
            </span>
          </div>

          <ul className="mt-4 min-h-[150px] space-y-2">
            {session.lines.map((line, i) => {
              const indent =
                line.t === "s" ? "pl-9" : line.t === "b" ? "pl-5" : "pl-0";
              return (
                <li
                  key={line.text}
                  style={{ animationDelay: `${i * 90}ms` }}
                  className={`rise-in ${indent} ${
                    line.t === "h"
                      ? "pt-1 text-sm font-semibold text-ink"
                      : "text-sm text-ink-soft"
                  }`}
                >
                  {line.t === "b" && <span className="mr-2 text-lime">•</span>}
                  {line.t === "s" && (
                    <span className="mr-2 text-ink-mute">–</span>
                  )}
                  {line.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Floating video-call tile with the real film */}
      <div className="absolute bottom-2 right-0 z-20 w-40 overflow-hidden rounded-2xl bg-ink shadow-2xl ring-1 ring-black/10">
        <video
          className="aspect-[3/4] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/philosophy.mp4" type="video/mp4" />
        </video>
        <div className="flex items-center justify-center gap-2 bg-ink px-3 py-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[10px]">
            🎙
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[10px]">
            🎥
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f24b3d] text-[10px]">
            ✕
          </span>
        </div>
      </div>
    </div>
  );
}
