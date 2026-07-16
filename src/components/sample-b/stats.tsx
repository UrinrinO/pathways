import { stats } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/motion/counter";
import { Container, Eyebrow } from "@/components/sample-b/ui";

/** A focused first cohort — three big lime counters on a raised panel. */
export function Stats() {
  return (
    <section className="relative overflow-hidden bg-panel">
      {/* lime wash for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-lime/10 blur-[130px]" />
      </div>

      <Container className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
            A focused first cohort.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-14 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div
                className={`flex flex-col ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-10" : ""
                }`}
              >
                <Counter
                  value={Number(s.value)}
                  className="text-6xl font-bold tracking-tight text-lime md:text-7xl"
                />
                <p className="mt-4 text-xl font-semibold text-snow">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-soft-grey">
                  {s.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
