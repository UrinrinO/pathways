import { stats } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/motion/counter";
import { Container, Eyebrow } from "@/components/sample-a/ui";

/** Dark stats block with animated counters for contrast in the alternation. */
export function Stats() {
  return (
    <section className="bg-carbon text-carbon-ink">
      <Container className="py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="dark">By the numbers</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            A focused first cohort.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-carbon-ink/15 pt-14 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div
                className={`flex flex-col ${
                  i > 0 ? "md:border-l md:border-carbon-ink/10 md:pl-10" : ""
                }`}
              >
                <Counter
                  value={Number(s.value)}
                  className="text-6xl font-bold tracking-tight text-lime md:text-7xl"
                />
                <p className="mt-4 text-xl font-semibold">{s.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-carbon-ink/60">
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
