import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { Parallax } from "@/components/motion/parallax";
import { galleryImages } from "@/lib/images";
import {
  SoftCard,
  NumberCard,
  CTABand,
  Section,
} from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";

export const metadata: Metadata = {
  title: "About — Pathways",
  description:
    "Pathways is a creative tech hub for young people aged 16–25 in Cardiff, helping connect creativity to technology, digital tools and enterprise.",
};

const DISCIPLINES = [
  "Create",
  "Communicate",
  "Market",
  "Organise",
  "Build businesses",
  "Solve problems",
  "Reach audiences",
];

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
      <PageHero
        crumb="About"
        heading="Creativity, connected to tech."
        sub="A creative tech hub for 16–25s in Cardiff — turning what you already make into a clearer next move."
        cta={{ label: "Explore the programme", href: "/programme" }}
        image={galleryImages[0]}
        badge="Creative"
      />

      {/* Why we created Pathways */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
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
            </div>

            <div className="space-y-6 lg:pt-16">
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
            </div>
          </div>
        </ScrollFade>
      </Section>

      {/* What Pathways is not */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
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
                  <span className="font-semibold text-clay">you</span> fit in
                  that wider world.
                </p>
              </div>

              <SoftCard>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
                  Technology touches all of this
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {DISCIPLINES.map((d) => (
                    <span
                      key={d}
                      className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2.5 text-sm font-semibold text-ink"
                    >
                      <span className="h-2 w-2 rounded-full bg-lime" />
                      {d}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
                  Coding is one door into that world. Pathways opens the rest of
                  them too.
                </p>
              </SoftCard>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Our approach */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Four principles behind every session.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <NumberCard n={String(i + 1).padStart(2, "0")} title={a.title}>
                  {a.body}
                </NumberCard>
              </Reveal>
            ))}
          </div>
        </ScrollFade>
      </Section>

      {/* What makes Pathways different */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <Eyebrow>What makes Pathways different</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  A different kind of room.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                  It adds up to a space that feels unlike a classroom the moment
                  you walk in.
                </p>
              </div>
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {DIFFERENT.map((d, i) => (
                  <Reveal as="li" key={d} delay={i * 60}>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                        ✓
                      </span>
                      <span className="text-[15px] font-medium leading-snug text-ink">
                        {d}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Long-term vision — dark statement */}
      <Section className="bg-carbon text-carbon-ink">
        <ScrollFade>
          <div className="max-w-4xl">
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
          </div>
        </ScrollFade>
      </Section>

      {/* Who leads Pathways */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow>Who leads Pathways</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Led by Youth4Change Wales.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Supported by a project team, facilitators, mentors, partners and
              participant representatives. Team profiles will be added soon.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.role} delay={i * 80}>
                <SoftCard className="flex items-center gap-4 p-6">
                  <span
                    aria-hidden
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-lime"
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
                </SoftCard>
              </Reveal>
            ))}
          </div>
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
