import { pillars } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Container, Label } from "@/components/sample-b/ui";

export function WhatIs() {
  return (
    <section className="bg-paper-2 py-24 md:py-32">
      <Container>
        {/* Two-column editorial intro */}
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <Reveal>
            <div>
              <Label>What is Pathways?</Label>
              <h2 className="font-display mt-6 text-5xl leading-[1.02] md:text-6xl">
                A space to explore what comes{" "}
                <span className="italic text-clay">next.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Pathways brings young people together in a relaxed,
                collaborative environment to explore how technology can
                strengthen their creativity, ideas and ambitions.
              </p>
              <p>
                Across six core sessions and six months of continued support,
                you learn from working professionals, share ideas with people
                your own age and build a clearer route forward.
              </p>
              <p className="font-medium text-ink">
                You don’t need everything figured out before you join. Pathways
                is designed to help you find direction.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Connect / Build / Progress pillars */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <div className="flex h-full flex-col rounded-[28px] border border-line bg-paper p-9 transition-colors hover:bg-paper-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl italic text-clay">
                    {p.n}
                  </span>
                  <span className="h-px w-10 bg-line" />
                </div>
                <h3 className="font-display mt-5 text-3xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
