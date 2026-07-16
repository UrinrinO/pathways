import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Counter } from "@/components/motion/counter";
import { Breadcrumbs, SoftCard, CTABand } from "@/components/pages/shared/blocks";
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
              <Breadcrumbs page="Opportunities" />
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
                    className="rounded-full bg-paper-2 px-3.5 py-1.5 text-sm font-medium text-ink-soft"
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
                <SoftCard key={s.k} className="bg-paper-2 !p-7">
                  <p className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
                    <Counter value={s.v} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink-soft">
                    {s.k}
                  </p>
                </SoftCard>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Interactive explorer — feature pick, filterable grid, capture + submit */}
      <OpportunitiesExplorer />

      {/* Closing CTA band */}
      <CTABand
        eyebrow="Never miss out"
        heading="Never miss the right opportunity."
        sub="Join the list and we'll email you when new opportunities go live — starting the moment Pathways launches."
        primary={{ href: "/join", label: "Get opportunity updates" }}
        secondary={{ href: "#", label: "Submit an opportunity" }}
      />

      <Footer />
    </main>
  );
}
