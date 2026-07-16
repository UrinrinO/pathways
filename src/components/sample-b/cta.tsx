"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/sample-b/ui";
import { Counter } from "@/components/motion/counter";

/**
 * "Register your interest" — an interactive Cohort Pass. The pass tilts toward
 * the cursor in 3D, floats gently, and animates its "places" counter. Brand
 * palette only (Midnight / Panel / Soft Grey / Lime / Orange).
 */
export function CTA() {
  const card = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 10, ry: px * 14, gx: (px + 0.5) * 100, gy: (py + 0.5) * 100 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 0 });

  return (
    <section className="bg-midnight">
      <Container className="py-24 md:py-32">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-panel px-6 py-16 md:px-14 md:py-20">
          {/* aurora glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-10 -top-16 h-80 w-80 rounded-full bg-lime/25 blur-[110px]" />
            <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-orange/20 blur-[110px]" />
          </div>
          {/* dot grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(170,177,188,0.14) 1px, transparent 1.6px)",
              backgroundSize: "9px 9px",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 70% 40%, #000, transparent 75%)",
              maskImage:
                "radial-gradient(120% 120% at 70% 40%, #000, transparent 75%)",
            }}
          />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_auto]">
            {/* Left — the invitation */}
            <div>
              <p className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Register your interest
              </p>
              <h2 className="max-w-xl text-4xl font-bold leading-[1.03] tracking-tight text-snow md:text-6xl">
                Claim your place in the{" "}
                <span className="text-lime">first cohort.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-soft-grey">
                Thirty seats, one relaxed room in Cardiff. Tell us you&apos;re
                interested and you&apos;ll be first to hear about dates, sessions
                and how to join.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="/join"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-lime-ink transition-transform hover:scale-[1.03]"
                >
                  Register Your Interest
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="/refer"
                  className="rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-snow hover:text-midnight"
                >
                  Refer a Young Person
                </a>
              </div>
              <p className="mt-6 text-sm text-soft-grey/70">
                Free · Launching August 2026
              </p>
            </div>

            {/* Right — the interactive Cohort Pass */}
            <div className="float-y [perspective:1200px]">
              <div
                ref={card}
                onMouseMove={onMove}
                onMouseLeave={reset}
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                  transition: "transform 0.2s ease-out",
                }}
                className="relative w-[320px] rounded-3xl bg-panel-2 p-7 shadow-2xl ring-1 ring-white/10 [transform-style:preserve-3d]"
              >
                {/* moving sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(140,224,30,0.18), transparent 55%)`,
                  }}
                />

                {/* header */}
                <div className="relative flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-bold tracking-tight text-snow">
                    <span className="h-2 w-2 rounded-full bg-lime" />
                    Pathways
                  </span>
                  <span className="text-xs font-medium text-soft-grey/70">
                    N° 001
                  </span>
                </div>

                {/* big field */}
                <div className="relative mt-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-lime">
                    Access pass
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight text-snow">
                    Cohort 01
                  </p>
                  <p className="mt-1 text-sm text-soft-grey">
                    Cardiff · August 2026
                  </p>
                </div>

                {/* perforation */}
                <div className="relative my-7">
                  <div className="absolute -left-10 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-midnight" />
                  <div className="absolute -right-10 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-midnight" />
                  <div className="border-t border-dashed border-white/15" />
                </div>

                {/* stub details */}
                <div className="relative grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Places", v: <Counter value={30} /> },
                    { k: "Ages", v: "16–25" },
                    { k: "Cost", v: "Free" },
                  ].map((d) => (
                    <div key={d.k}>
                      <p className="text-xl font-bold text-snow">{d.v}</p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-soft-grey/60">
                        {d.k}
                      </p>
                    </div>
                  ))}
                </div>

                {/* barcode */}
                <div className="relative mt-7 flex items-end justify-between">
                  <div className="flex items-end gap-[3px]">
                    {[9, 4, 7, 3, 8, 5, 9, 4, 6, 8, 3, 7, 5, 9].map((h, i) => (
                      <span
                        key={i}
                        className="w-[3px] rounded-sm bg-lime/70"
                        style={{ height: `${h * 2 + 6}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lime">
                    Admit one
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
