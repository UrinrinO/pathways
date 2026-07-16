"use client";

import { useState } from "react";

const TAGS = [
  "Create",
  "Communicate",
  "Market",
  "Organise",
  "Build businesses",
  "Solve problems",
  "Reach audiences",
];

/**
 * A slowly rotating orbit of disciplines around a central "Technology" node —
 * making the point that tech is far wider than coding. Hover the field to
 * pause the rotation and pick out a single discipline. Brand palette only.
 */
export function TechOrbit() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="group relative mx-auto aspect-square w-full max-w-md">
      {/* concentric guide rings */}
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-[13%] rounded-full border border-dashed border-line/70" />
      <div className="absolute inset-[26%] rounded-full border border-line/50" />

      {/* rotating layer — pauses when the field is hovered */}
      <div className="absolute inset-0 [animation:spin-slow_44s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
        {TAGS.map((t, i) => {
          const a = (i / TAGS.length) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + Math.cos(a) * 40;
          const y = 50 + Math.sin(a) * 40;
          const on = active === i;
          return (
            <div
              key={t}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* counter-rotate so the label stays upright */}
              <div className="[animation:spin-slow_44s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-tight shadow-sm transition-all duration-200 md:text-xs ${
                    on
                      ? "border-lime bg-lime text-lime-ink scale-110"
                      : "border-line bg-snow text-ink-soft hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* soft glow behind the core */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/20 blur-3xl"
      />

      {/* central node */}
      <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink text-center shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] md:h-32 md:w-32">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-lime">
            Wider than
          </span>
          <span className="mt-1 block text-lg font-bold tracking-tight text-snow md:text-xl">
            Technology
          </span>
        </div>
      </div>
    </div>
  );
}
