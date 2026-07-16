import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow } from "@/components/sample-a/ui";
import { HeroShowcase } from "@/components/sample-a/hero-showcase";

/** Split hero (à la Granola): headline + CTA left, animated showcase right. */
export function Hero() {
  return (
    <section className="overflow-hidden bg-snow">
      <Container className="grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        {/* Left — headline */}
        <Reveal>
          <Eyebrow>A creative tech hub · ages 16–25 · Cardiff</Eyebrow>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl xl:text-7xl">
            Pathways links creativity to tech.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Notes, mentors and momentum. Turn what you already make into a
            clearer next move.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/join" variant="primary" className="px-8 py-4">
              Join Pathways
            </Button>
            <Button href="/programme" variant="secondary" arrow={false}>
              Explore the Programme
            </Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-ink-mute">
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
