import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { Counter } from "@/components/motion/counter";
import { PhaseSwitch } from "@/components/pages/programme/phase-switch";
import { CTABand, Section } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { sessionShots } from "@/lib/images";

export const metadata: Metadata = {
  title: "Programme — Pathways",
  description:
    "Six core sessions and six months of continued support — a 12-month journey towards stronger skills, clearer direction and real progression.",
};

const EXPLORE = [
  "Understanding your current skills and interests",
  "Finding your place in the wider tech space",
  "Building digital confidence",
  "Using tech to strengthen creative work",
  "Developing a clearer niche",
  "Communicating your value",
  "Marketing and visibility",
  "Recognising useful opportunities",
  "Understanding income pathways",
  "Planning realistic next steps",
];

const ROOM = [
  "Sofas and informal seating",
  "A projector and presentation space",
  "Laptops and digital tools",
  "Whiteboards and idea walls",
  "Food and refreshments",
  "Group discussions",
  "Practical exercises",
  "Time to ask direct questions",
];

const STATS = [
  { value: 30, label: "Young people", note: "One focused first cohort." },
  { value: 6, label: "Core sessions", note: "Monthly, in Phase One." },
  { value: 12, label: "Months", note: "Sessions plus progression." },
];

const SUCCESS = [
  "More confidence",
  "Clearer direction",
  "Stronger understanding of digital opportunities",
  "Improved ability to communicate ideas",
  "Greater awareness of income and progression routes",
  "Useful professional connections",
  "Practical next steps",
];

export default function ProgrammePage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <PageHero
        crumb="Programme"
        heading="Six sessions. Six months of support."
        sub="A 12-month journey from curiosity to real progression — in two connected phases."
        cta={{ label: "Join Pathways", href: "/join" }}
        image={sessionShots[1]}
        badge="12 months"
      />

      {/* Standout — two-phase interactive view */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow>Two connected phases</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Select a phase to look inside.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Phase One builds a shared foundation. Phase Two turns that
              momentum into personalised progression.
            </p>
          </div>
          <div className="mt-12">
            <PhaseSwitch />
          </div>
        </ScrollFade>
      </Section>

      {/* What we'll explore */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="c" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>What we&apos;ll explore</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                The ground we cover together.
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {EXPLORE.map((e, i) => (
                <Reveal key={e} delay={i * 55}>
                  <span className="inline-flex items-center gap-2.5 rounded-full bg-snow px-5 py-3 text-[15px] font-medium text-ink shadow-[0_14px_40px_-28px_rgba(14,18,24,0.5)] transition-transform duration-300 hover:-translate-y-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {e}
                  </span>
                </Reveal>
              ))}
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Inside a Pathways session */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <Eyebrow>Inside a Pathways session</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Professional without feeling formal.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                A relaxed room built for real conversation and hands-on work —
                closer to a studio than a classroom.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {ROOM.map((r, i) => (
                <Reveal as="li" key={r} delay={i * 55}>
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime/15">
                      <span className="h-2 w-2 rounded-full bg-lime" />
                    </span>
                    <span className="text-[15px] font-medium text-ink">{r}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </ScrollFade>
      </Section>

      {/* Stats — dark block with counters */}
      <Section className="bg-carbon text-carbon-ink">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">The shape of it</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              One cohort, one year, six sessions.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 border-t border-carbon-ink/15 pt-12 md:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div
                  className={`flex flex-col ${
                    i > 0 ? "md:border-l md:border-carbon-ink/10 md:pl-10" : ""
                  }`}
                >
                  <Counter
                    value={s.value}
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
        </ScrollFade>
      </Section>

      {/* What success looks like */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow>What success looks like</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  Where the year takes you.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                  Not a certificate — a clearer, braver, better-connected next
                  move.
                </p>
              </div>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {SUCCESS.map((s, i) => (
                  <Reveal as="li" key={s} delay={i * 55}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                        ✓
                      </span>
                      <span className="text-[15px] font-medium leading-snug text-ink">
                        {s}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </ScrollFade>
        </Container>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        heading="Start the 12-month journey."
        sub="Thirty places in the first Cardiff cohort. Free to join, and built around what you already make."
        primary={{ href: "/join", label: "Join Pathways" }}
        secondary={{ href: "/sessions", label: "See the sessions" }}
      />

      <Footer />
    </main>
  );
}
