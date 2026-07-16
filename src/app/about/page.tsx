import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { ScrollHighlight } from "@/components/sample-a/scroll-highlight";
import { galleryImages, heroImage } from "@/lib/images";
import { CTABand, Section } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { ApproachAccordion } from "@/components/pages/about/approach-accordion";
import { NotShowcase } from "@/components/pages/about/not-showcase";
import { VisionPanel } from "@/components/pages/about/vision-panel";
import { LeadsColumns } from "@/components/pages/about/leads-columns";

export const metadata: Metadata = {
  title: "About — Pathways",
  description:
    "Pathways is a creative tech hub for young people aged 16–25 in Cardiff, helping connect creativity to technology, digital tools and enterprise.",
};

const DIFFERENT = [
  "Relaxed, collaborative sessions",
  "No traditional classroom",
  "Learning tied to your real interests",
  "Experienced facilitators and mentors",
  "Support beyond one-off workshops",
  "Room to contribute and lead",
  "Your journey documented properly",
];

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <PageHero
        crumb="About"
        heading="Creativity, connected to tech."
        sub="A creative tech hub for 16–25s in Cardiff — turning what you already make into a clearer next move."
        cta={{ label: "Explore the programme", href: "/programme" }}
        image={galleryImages[0]}
        badge="Creative"
      />

      {/* 1 — Why we created Pathways (right-aligned scroll-highlight statement) */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="ml-auto max-w-3xl text-right">
            <Eyebrow className="justify-end">Why we created Pathways</Eyebrow>
            <ScrollHighlight
              text="Too many young people are creative, curious and full of ideas — but have no guidance, no networks and no clear route forward. Pathways exists to close that gap."
              className="mt-7 text-3xl font-bold leading-[1.15] tracking-tight md:text-[2.7rem]"
            />
            <a
              href="#approach"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime"
            >
              How we do it
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>
          </div>
        </ScrollFade>
      </Section>

      {/* 2 — Our approach (width-accordion centrepiece) */}
      <section id="approach" className="relative bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>Our approach</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Four principles behind every session.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Hover a principle to open it — or let them cycle.
              </p>
            </div>
            <ApproachAccordion />
          </ScrollFade>
        </Container>
      </section>

      {/* 3 — What Pathways is not (disciplines hover-showcase) */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:pt-4">
              <Eyebrow>What Pathways is not</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Not a coding bootcamp.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                We&apos;re not trying to turn every creative into a coder.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Technology is far wider than code — it&apos;s in how you create,
                communicate, market, organise and build. Pathways helps you find
                where{" "}
                <span className="font-semibold text-orange">you</span> fit.
              </p>
            </div>

            <NotShowcase />
          </div>
        </ScrollFade>
      </Section>

      {/* 4 — What makes Pathways different (sticky photo + divider list) */}
      <section className="relative bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              {/* sticky landscape photo, contained hover-zoom */}
              <div className="group lg:sticky lg:top-24 lg:self-start">
                <Eyebrow>What makes Pathways different</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  A different kind of room.
                </h2>
                <div className="mt-8 overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(14,18,24,0.4)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={heroImage}
                    alt="Inside a relaxed, collaborative Pathways session"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* divider list */}
              <ul className="lg:pt-2">
                {DIFFERENT.map((d, i) => (
                  <Reveal as="li" key={d} delay={i * 60}>
                    <div className="group flex items-center gap-4 border-b border-ink/10 py-5">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                        ✓
                      </span>
                      <span className="flex-1 text-lg font-semibold tracking-tight text-ink">
                        {d}
                      </span>
                      <span
                        aria-hidden
                        className="text-ink/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink"
                      >
                        →
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* 5 — Long-term vision (dark aurora panel + counters) */}
      <ScrollFade>
        <VisionPanel />
      </ScrollFade>

      {/* 6 — Who leads Pathways (hover-reveal columns) */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow>Who leads Pathways</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Led by Youth4Change Wales.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Backed by facilitators, mentors and participant reps who shape how
              Pathways runs. Hover a group to look closer.
            </p>
          </div>
          <LeadsColumns />
        </ScrollFade>
      </Section>

      <CTABand
        eyebrow="Get involved"
        heading="Help shape the first Pathways cohort."
        sub="Whether you want to take part or help build it — there's a place for you in Pathways."
        primary={{ href: "/join", label: "Join Pathways" }}
        secondary={{ href: "/partners", label: "Partner with us" }}
      />

      <Footer />
    </main>
  );
}
