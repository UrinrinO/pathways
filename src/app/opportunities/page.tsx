import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Button } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Counter } from "@/components/motion/counter";
import { OpportunitiesExplorer } from "@/components/pages/opportunities/opportunities-explorer";

export const metadata: Metadata = {
  title: "Opportunities — Pathways",
  description:
    "Carefully selected opportunities across technology, digital work, creativity and enterprise — relevant, accessible and worth your time.",
};

const HERO_STATS = [
  { v: 10, suffix: "", k: "Categories" },
  { v: 100, suffix: "%", k: "Free to browse" },
  { v: 1, suffix: "", k: "Place for it all" },
];

const HERO_TAGS = [
  "Jobs",
  "Internships",
  "Training",
  "Workshops",
  "Grants",
  "Events",
  "Mentoring",
  "Enterprise Support",
  "Volunteering",
];

export default function Page() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-snow">
        <Splashes variant="c" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Opportunities</Eyebrow>
              <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
                Useful opportunities, all in one place.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
                We share carefully selected opportunities across technology,
                digital work, creativity and enterprise — relevant, accessible
                and worth your time.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap gap-2.5">
                {HERO_TAGS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stat strip */}
          <Reveal delay={180}>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {HERO_STATS.map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl bg-paper-2 px-7 py-8"
                >
                  <p className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
                    <Counter value={s.v} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink-soft">
                    {s.k}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Standout — interactive explorer */}
      <OpportunitiesExplorer />

      {/* Submit an opportunity */}
      <section className="bg-snow">
        <Container className="py-8 md:py-12">
          <Reveal>
            <div className="grid items-center gap-10 rounded-[36px] bg-paper-2 px-8 py-12 md:grid-cols-[1.4fr_1fr] md:px-12 md:py-14">
              <div>
                <Eyebrow>For organisations &amp; employers</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
                  Have something worth sharing?
                </h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                  If you run jobs, internships, training, grants or events that
                  would genuinely help young people in Cardiff, send them our
                  way. We share what&apos;s relevant, accessible and worth
                  their time.
                </p>
                <div className="mt-8">
                  <Button href="#" variant="primary" className="px-7 py-4">
                    Submit an opportunity
                  </Button>
                </div>
              </div>

              <ul className="flex flex-col gap-3">
                {[
                  "Reach an engaged group of 16–25 year-olds",
                  "We only share what's relevant and accessible",
                  "Free to submit — reviewed by our team",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-snow px-5 py-4 text-sm leading-relaxed text-ink shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)]"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Closing CTA band */}
      <section className="bg-snow">
        <Container className="pb-24 pt-4 md:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-midnight px-8 py-16 text-center md:px-14 md:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-10 -top-16 h-72 w-72 rounded-full bg-lime/25 blur-[110px]" />
                <div className="absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-orange/20 blur-[110px]" />
              </div>
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
                  Never miss the right{" "}
                  <span className="text-lime">opportunity.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-soft-grey">
                  Join the list and we&apos;ll email you when new opportunities
                  go live — starting the moment Pathways launches.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="/join"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-lime-ink transition-transform hover:scale-[1.03]"
                  >
                    Get opportunity updates
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="#"
                    className="rounded-full border border-soft-grey/25 px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-snow hover:text-midnight"
                  >
                    Submit an opportunity
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
