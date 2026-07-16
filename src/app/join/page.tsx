import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { SoftCard, NumberCard } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { sessionShots } from "@/lib/images";
import { RegistrationForm } from "@/components/pages/join/registration-form";

export const metadata: Metadata = {
  title: "Join Pathways — Pathways",
  description:
    "Register your interest in Pathways, the Cardiff creative tech hub for young people aged 16–25. Bring your interests and ideas — we'll help you explore what could come next.",
};

const whoCanJoin = [
  "You're aged 16–25",
  "You live in or can travel to Cardiff",
  "You're curious about technology or digital work",
  "You have a creative interest, idea or project",
  "You want more direction",
  "You want to develop your skills",
  "You're open to learning with others",
  "You'd benefit from mentoring and continued support",
];

const youReceive = [
  {
    title: "Six core sessions",
    body: "A focused programme that moves from discovering your interests to planning your next move.",
  },
  {
    title: "Practical learning & group discussion",
    body: "Hands-on, discussion-led sessions — you learn by doing, alongside people your own age.",
  },
  {
    title: "Facilitators & mentors",
    body: "Support from people who've made the moves you want to make, in the room and beyond it.",
  },
  {
    title: "Digital & creative-tech guidance",
    body: "See how creativity, technology and digital opportunity actually connect for you.",
  },
  {
    title: "Access to selected opportunities",
    body: "We connect you with openings, events and experiences that fit where you're heading.",
  },
  {
    title: "Continued progression support",
    body: "Guidance that keeps going after the sessions end — not a one-off workshop.",
  },
  {
    title: "A community of peers",
    body: "A relaxed group of young people building, testing ideas and figuring things out together.",
  },
  {
    title: "A hand in shaping Pathways",
    body: "Real opportunities to help shape the programme and what it becomes next.",
  },
];

function LimeTick() {
  return (
    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-lime-ink">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    </span>
  );
}

export default function JoinPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <PageHero
        crumb="Join"
        heading="You don't need it all figured out."
        sub="Bring your interests and ideas — we'll help with what comes next. Free, for 16–25s in Cardiff."
        cta={{ label: "Start the form", href: "#register" }}
        image={sessionShots[0]}
        badge="Free"
      />

      {/* Who can join — lime-tick checklist */}
      <section className="bg-snow">
        <Container className="py-20 md:py-28">
          <ScrollFade>
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <Eyebrow>Who can join?</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  Pathways is for you if…
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                  You don&apos;t need to tick every box, and you don&apos;t need
                  any previous professional experience. If a few of these sound
                  like you, you belong here.
                </p>
                <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  No previous professional experience needed
                </p>
              </div>

              <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {whoCanJoin.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <LimeTick />
                    <span className="text-[15px] font-medium leading-snug text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* What you'll receive — NumberCards */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade className="max-w-2xl">
            <Eyebrow>What you&apos;ll receive</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Everything the programme puts behind you.
            </h2>
          </ScrollFade>

          <ScrollFade className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {youReceive.map((item, i) => (
              <NumberCard
                key={item.title}
                n={String(i + 1).padStart(2, "0")}
                title={item.title}
              >
                {item.body}
              </NumberCard>
            ))}
          </ScrollFade>
        </Container>
      </section>

      {/* What we ask — dark carbon block */}
      <section className="bg-carbon text-carbon-ink">
        <Container className="py-20 md:py-28">
          <ScrollFade>
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <Eyebrow tone="dark">What we ask from you</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  Show up, take part, keep moving.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-carbon-ink/80">
                  We ask that you attend consistently, take part in discussions,
                  and complete practical next steps between sessions.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-carbon-ink/80">
                  You only need to arrive willing to participate, ask questions
                  and work towards your next move.
                </p>
              </div>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Registration form — the standout */}
      <section id="register" className="relative overflow-hidden bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Register your interest</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Tell us a little about you.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Fill in what you can — a team member will follow up with the next
                steps and dates for the upcoming programme. There&apos;s no
                pressure and nothing to prepare.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink-soft">
                {[
                  "Takes around five minutes",
                  "Only the starred fields are required",
                  "Your details are never shared",
                ].map((line) => (
                  <li key={line} className="flex items-center gap-3">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-lime text-[10px] text-lime-ink">
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <RegistrationForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Refer someone — small closing note */}
      <section className="bg-snow">
        <Container className="pb-24 pt-4 md:pb-32">
          <ScrollFade>
            <SoftCard className="md:p-12">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                    Know someone who could benefit?
                  </h2>
                  <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                    If there&apos;s a young person in your life who&apos;d thrive
                    here, you can refer them in a couple of minutes — we&apos;ll
                    reach out with care.
                  </p>
                </div>
                <a
                  href="/refer"
                  className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
                >
                  Refer someone
                  <span
                    aria-hidden
                    className="text-lime transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </SoftCard>
          </ScrollFade>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
