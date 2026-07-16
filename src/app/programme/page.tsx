import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Counter } from "@/components/motion/counter";
import { PhaseSwitch } from "@/components/pages/programme/phase-switch";

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
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-4xl">
            <Eyebrow>The programme</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Six core sessions. Six months of continued support.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              A 12-month journey from uncertainty towards stronger skills,
              clearer direction and real progression — split into two connected
              phases.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Standout — two-phase interactive view */}
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Two connected phases</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Select a phase to look inside.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Phase One builds a shared foundation. Phase Two turns that
              momentum into personalised progression.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-14">
            <PhaseSwitch />
          </Reveal>
        </Container>
      </section>

      {/* What we'll explore */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="c" />
        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>What we&apos;ll explore</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              The ground we cover together.
            </h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {EXPLORE.map((e, i) => (
              <Reveal key={e} delay={i * 60}>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-snow px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  {e}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Inside a Pathways session */}
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Inside a Pathways session</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Professional without feeling formal.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                A relaxed room built for real conversation and hands-on work —
                closer to a studio than a classroom.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4 sm:grid-cols-2">
                {ROOM.map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime/15 text-lime-ink">
                      <span className="h-2 w-2 rounded-full bg-lime" />
                    </span>
                    <span className="text-[15px] font-medium text-ink">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats — dark block with counters */}
      <section className="bg-carbon text-carbon-ink">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="dark">The shape of it</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
              One cohort, one year, six sessions.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 border-t border-carbon-ink/15 pt-14 md:grid-cols-3">
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
        </Container>
      </section>

      {/* What success looks like */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Eyebrow>What success looks like</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Where the year takes you.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {SUCCESS.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl bg-snow px-5 py-4 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)]"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                      ✓
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-ink">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="bg-paper">
        <Container className="pb-24 pt-4 md:pb-32">
          <div className="relative overflow-hidden rounded-[36px] bg-midnight px-6 py-16 md:px-14 md:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 -top-16 h-80 w-80 rounded-full bg-lime/25 blur-[110px]" />
              <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-orange/20 blur-[110px]" />
            </div>
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
            <Reveal className="relative max-w-2xl">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                Ready when you are
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-6xl">
                Start the 12-month journey.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-soft-grey">
                Thirty places in the first Cardiff cohort. Free to join, and
                built around what you already make.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/join" variant="lime" className="px-8 py-4">
                  Join Pathways
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
