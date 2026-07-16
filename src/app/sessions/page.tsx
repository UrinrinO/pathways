import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Button, Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { SessionExplorer } from "@/components/pages/sessions/session-explorer";

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
        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-4xl">
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
      <section className="bg-snow">
        <Container className="py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Browse the sessions</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Six sessions. Filter by what interests you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Full themes and facilitators are announced soon — for now, every
              session is upcoming.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <SessionExplorer />
          </Reveal>
        </Container>
      </section>

      {/* Every session page includes */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <Eyebrow>Every session page includes</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              A full record of what happened.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-3xl border border-line bg-snow p-7 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-lime">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-bold text-lime transition-colors group-hover:bg-lime group-hover:text-lime-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="mt-10">
            <p className="inline-flex items-center gap-3 rounded-2xl border border-line bg-snow px-6 py-4 text-sm font-medium text-ink-soft">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime/15">
                <span className="h-2 w-2 rounded-full bg-lime" />
              </span>
              Full themes and facilitators are announced soon.
            </p>
          </Reveal>
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
                Be first in the room
              </p>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-6xl">
                Register your interest for the sessions.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-soft-grey">
                Tell us you&apos;re interested and you&apos;ll be first to hear
                about dates, themes and how to take part.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/join" variant="lime" className="px-8 py-4">
                  Register your interest
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
