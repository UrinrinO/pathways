import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Parallax } from "@/components/motion/parallax";
import { galleryImages } from "@/lib/images";
import { TechOrbit } from "@/components/pages/about/tech-orbit";

export const metadata: Metadata = {
  title: "About — Pathways",
  description:
    "Pathways is a creative tech hub for young people aged 16–25 in Cardiff, helping connect creativity to technology, digital tools and enterprise.",
};

const HERO_CHIPS = ["Ages 16–25", "Cardiff", "Free to join", "Creative tech hub"];

const APPROACH = [
  {
    title: "Start with the person",
    body: "We begin with your interests, experiences and ambitions — not a fixed syllabus.",
  },
  {
    title: "Keep it practical",
    body: "Useful knowledge, real examples and clear actions you can take straight away.",
  },
  {
    title: "Learn together",
    body: "Share ideas, ask questions and learn from each other in a relaxed room.",
  },
  {
    title: "Continue the support",
    body: "Guidance, check-ins and progression support after the six core sessions.",
  },
];

const DIFFERENT = [
  "Relaxed, collaborative sessions",
  "No traditional classroom structure",
  "Learning connected to your real interests",
  "Experienced facilitators and mentors",
  "Support beyond one-off workshops",
  "Opportunities to contribute and lead",
  "Strong visual documentation of the journey",
];

const TEAM = [
  { role: "Lead partner", name: "Youth4Change Wales" },
  { role: "Project team", name: "Profiles coming soon" },
  { role: "Facilitators", name: "Profiles coming soon" },
  { role: "Mentors", name: "Profiles coming soon" },
  { role: "Partners", name: "Profiles coming soon" },
  { role: "Participant reps", name: "Profiles coming soon" },
];

export default function AboutPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-4xl">
            <Eyebrow>About Pathways</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Creativity is already there. Pathways helps connect it to what
              comes next.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              A creative tech hub for young people aged 16–25 in Cardiff —
              helping you explore how technology, digital tools and enterprise
              can strengthen the interests, ideas and ambitions you already
              have.
            </p>
          </Reveal>
          <Reveal delay={140} className="mt-9 flex flex-wrap gap-2.5">
            {HERO_CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-snow px-4 py-2 text-sm font-medium text-ink-soft"
              >
                {c}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Why we created Pathways */}
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <Eyebrow>Why we created Pathways</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                The gap between creative energy and a clear next move.
              </h2>
              <div className="image-blend-b mt-10 overflow-hidden rounded-3xl">
                <Parallax speed={60}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={galleryImages[0]}
                    alt="Young people collaborating in a Pathways session"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6 lg:pt-16">
              <p className="text-lg leading-relaxed text-ink-soft">
                Many young people are creative, digitally curious and full of
                ideas, but lack clear guidance, relevant networks and practical
                progression routes.
              </p>
              <p className="text-lg leading-relaxed text-ink-soft">
                Some are interested in tech but don&apos;t know where they fit;
                others already create content, design, produce music, build
                communities or run small projects but don&apos;t know how to
                turn that into a clear niche, career or opportunity.
              </p>
              <p className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Pathways exists to close that gap.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What Pathways is not — standout orbit */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>What Pathways is not</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                We&apos;re not trying to turn every creative into a coder.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Technology is much wider than coding — it shapes how people
                create, communicate, market, organise, build businesses, solve
                problems and reach audiences.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                Pathways helps you find where{" "}
                <span className="font-semibold text-clay">you</span> fit in that
                wider world.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <TechOrbit />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Our approach */}
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Four principles behind every session.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)]">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-bold text-lime transition-colors group-hover:bg-lime group-hover:text-lime-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What makes Pathways different */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <Eyebrow>What makes Pathways different</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                A different kind of room.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {DIFFERENT.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 rounded-2xl bg-snow px-5 py-4 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)]"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                      ✓
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-ink">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Long-term vision — bold dark statement */}
      <section className="bg-carbon text-carbon-ink">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-4xl">
            <Eyebrow tone="dark">Our long-term vision</Eyebrow>
            <p className="mt-8 text-3xl font-bold leading-[1.12] tracking-tight md:text-5xl">
              To build a recognised creative tech hub in Cardiff where young
              people{" "}
              <span className="text-lime">
                learn, collaborate, test ideas, meet professionals
              </span>{" "}
              and access meaningful opportunities — a platform connecting youth
              culture with the wider technology, creative and enterprise
              ecosystem.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Who leads Pathways */}
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Who leads Pathways</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Led by Youth4Change Wales.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Supported by a project team, facilitators, mentors, partners and
              participant representatives. Team profiles will be added soon.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-3xl border border-line bg-paper p-6">
                  <span
                    aria-hidden
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-paper-3 text-lg font-bold text-ink-mute"
                  >
                    {m.name === "Youth4Change Wales" ? "Y4C" : "•"}
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-mute">
                      {m.role}
                    </p>
                    <p className="mt-0.5 font-bold tracking-tight text-ink">
                      {m.name}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
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
                Get involved
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-6xl">
                Help shape the first Pathways cohort.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-soft-grey">
                Whether you want to take part or help build it — there&apos;s a
                place for you in Pathways.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/join" variant="lime" className="px-8 py-4">
                  Join Pathways
                </Button>
                <Button href="/partners" variant="ghostDark">
                  Partner with us
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
