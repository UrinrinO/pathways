import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { SessionExplorer } from "@/components/pages/sessions/session-explorer";
import {
  Breadcrumbs,
  NumberCard,
  CTABand,
  Section,
} from "@/components/pages/shared/blocks";

export const metadata: Metadata = {
  title: "Sessions — Pathways",
  description:
    "Inside the Pathways sessions — built around real questions about what you're trying to build, what's getting in the way, and where technology can help.",
};

const INCLUDES = [
  {
    title: "What we explored",
    body: "The theme, questions and ideas at the centre of the session.",
  },
  {
    title: "Who led the room",
    body: "The facilitators, mentors and guests who shaped the conversation.",
  },
  {
    title: "Key takeaways",
    body: "The most useful points to carry into your own work.",
  },
  {
    title: "Photo + video",
    body: "Strong visual documentation of the session as it happened.",
  },
  {
    title: "Participant voices",
    body: "Reflections and reactions from the young people in the room.",
  },
  {
    title: "Tools and resources",
    body: "Links, references and digital tools worth keeping.",
  },
  {
    title: "Your next move",
    body: "A clear, practical action to take before the next session.",
  },
];

export default function SessionsPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="c" />
        <Container className="relative pb-20 pt-14 md:pb-28 md:pt-20">
          <Reveal className="max-w-4xl">
            <Breadcrumbs page="Sessions" />
            <Eyebrow>The sessions</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Inside the Pathways sessions
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Every session is built around real questions. What are you trying
              to build? What&apos;s getting in the way? Where can technology
              help? What could come next?
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Standout — interactive session explorer */}
      <Section className="bg-snow">
        <ScrollFade>
          <div className="max-w-2xl">
            <Eyebrow>Browse the sessions</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Six sessions. Filter by what interests you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Full themes and facilitators are announced soon — for now, every
              session is upcoming.
            </p>
          </div>
          <div className="mt-12">
            <SessionExplorer />
          </div>
        </ScrollFade>
      </Section>

      {/* Every session page includes */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>Every session page includes</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                A full record of what happened.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Seven parts to every write-up, so nothing from the room gets
                lost.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDES.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <NumberCard
                    n={String(i + 1).padStart(2, "0")}
                    title={item.title}
                  >
                    {item.body}
                  </NumberCard>
                </Reveal>
              ))}

              {/* Closing note — completes the grid, no dead space */}
              <Reveal delay={INCLUDES.length * 70}>
                <div className="flex h-full flex-col justify-center rounded-3xl bg-carbon p-8 text-carbon-ink shadow-[0_18px_50px_-30px_rgba(14,18,24,0.5)]">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-lime/15">
                    <span className="h-2.5 w-2.5 rounded-full bg-lime" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight">
                    More announced soon
                  </h3>
                  <p className="mt-3 leading-relaxed text-carbon-ink/70">
                    Full themes and facilitators for each session are on the way.
                    Register your interest to hear first.
                  </p>
                </div>
              </Reveal>
            </div>
          </ScrollFade>
        </Container>
      </section>

      <CTABand
        eyebrow="Be first in the room"
        heading="Register your interest for the sessions."
        sub="Tell us you're interested and you'll be first to hear about dates, themes and how to take part."
        primary={{ href: "/join", label: "Register your interest" }}
        secondary={{ href: "/programme", label: "See the programme" }}
      />

      <Footer />
    </main>
  );
}
