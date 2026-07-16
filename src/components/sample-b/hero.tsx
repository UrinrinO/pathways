import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow } from "@/components/sample-b/ui";
import { HeroShowcase } from "@/components/sample-b/hero-showcase";

/** Split hero (Midnight): headline + CTA left, animated showcase right. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-midnight">
      {/* Ambient lime glow behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-32 h-[36rem] w-[36rem] rounded-full bg-lime/20 blur-[140px]" />
        <div className="absolute -left-44 top-56 h-[28rem] w-[28rem] rounded-full bg-orange/10 blur-[140px]" />
      </div>

      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Left — headline */}
        <Reveal>
          <Eyebrow>A creative tech hub · ages 16–25 · Cardiff</Eyebrow>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-snow md:text-6xl xl:text-7xl">
            Pathways links <span className="text-lime">creativity</span> to tech.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-soft-grey">
            Notes, mentors and momentum. Turn what you already make into a
            clearer next move.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/join" variant="lime" className="px-8 py-4">
              Join Pathways
            </Button>
            <Button href="/programme" variant="onDark" arrow={false}>
              Explore the Programme
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-soft-grey/70">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-[11px] text-lime-ink">
              ✓
            </span>
            Free · launching August 2026 · Cardiff
          </p>
        </Reveal>

        {/* Right — animated showcase */}
        <Reveal delay={140}>
          <HeroShowcase />
        </Reveal>
      </Container>
    </section>
  );
}
