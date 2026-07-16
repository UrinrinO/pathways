import { Counter } from "@/components/motion/counter";

const STATS = [
  { value: 30, label: "young people" },
  { value: 6, label: "core sessions" },
  { value: 12, label: "months" },
];

/**
 * Long-term vision — a dark rounded panel with lime/orange aurora glows and a
 * masked dot grid (the home CTA panel language), the statement with key words
 * in lime, and three counting stats along the bottom.
 */
export function VisionPanel() {
  return (
    <section className="bg-paper px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] bg-carbon px-6 py-16 text-carbon-ink md:px-14 md:py-24">
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

          <div className="relative">
            <p className="mb-8 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Our long-term vision
            </p>
            <p className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight md:text-5xl">
              A recognised creative tech hub in Cardiff — where young people{" "}
              <span className="text-lime">
                learn, collaborate, meet professionals
              </span>{" "}
              and reach{" "}
              <span className="text-lime">real opportunities</span>, connecting
              youth culture with the wider tech, creative and enterprise world.
            </p>

            {/* counting stats */}
            <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-carbon-ink/15 pt-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-4xl font-bold tracking-tight text-carbon-ink md:text-5xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-carbon-ink/60">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
