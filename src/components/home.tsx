import {
  pillars,
  journey,
  forYou,
  stats,
  latest,
  sessions,
  partners,
} from "@/lib/content";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Film } from "@/components/film";

/* ------------------------------------------------------------------ Hero */

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* warm ambient wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-lime/25 blur-[120px]" />
        <div className="absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-clay/15 blur-[120px]" />
      </div>

      <Container className="relative pb-16 pt-16 md:pb-20 md:pt-24">
        <Reveal>
          <p className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-ink-soft">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
            A creative tech hub · ages 16–25 · Cardiff
          </p>
          <h1 className="font-display max-w-[15ch] text-6xl leading-[0.98] md:text-8xl">
            Pathways links{" "}
            <span className="italic text-clay">creativity</span> to tech.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            We help young people turn ideas, interests and existing skills into
            clearer direction, stronger digital knowledge and real
            opportunities.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/join">Join Pathways</Button>
            <Button href="/programme" variant="outline">
              Explore the Programme
            </Button>
          </div>
        </Reveal>
      </Container>

      {/* Wide hero media band — living placeholder for the promo film */}
      <Container className="relative">
        <Reveal delay={120} className="film-reveal">
          <Film
            caption="Silent looping promo · placeholder"
            className="aspect-[16/7] w-full"
          />
        </Reveal>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Marquee */

export function Marquee() {
  const words = [
    "Ideas",
    "Skills",
    "Direction",
    "Opportunity",
    "Creativity",
    "Enterprise",
    "Digital",
    "Community",
  ];
  const strip = [...words, ...words];
  return (
    <section className="border-y border-line py-6">
      <div className="marquee-track">
        {strip.map((w, i) => (
          <span
            key={i}
            className="font-display flex items-center whitespace-nowrap px-8 text-3xl text-ink/80 md:text-4xl"
          >
            {w}
            <span className="ml-8 text-clay">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- What is? */

export function WhatIs() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-start">
        <Reveal>
          <Eyebrow>What is Pathways?</Eyebrow>
          <h2 className="font-display text-5xl leading-[1.03] md:text-6xl">
            A space to explore what comes next.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Pathways brings young people together in a relaxed, collaborative
              environment to explore how technology can strengthen their
              creativity, ideas and ambitions.
            </p>
            <p>
              Across six core sessions and six months of continued support,
              participants learn from professionals, share ideas with each
              other, build useful digital knowledge and develop a clearer route
              forward.
            </p>
            <p className="font-medium text-ink">
              You do not need to have everything figured out before joining.
              Pathways is designed to help you find direction.
            </p>
          </div>
        </Reveal>
      </Container>

      {/* Connect / Build / Progress */}
      <Container className="mt-16">
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="h-full rounded-3xl border border-line bg-paper-2 p-8 transition-colors hover:bg-paper-3">
                <span className="font-display text-2xl text-clay">{p.n}</span>
                <h3 className="font-display mt-2 text-3xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Programme journey */

export function Journey() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>The journey</Eyebrow>
          <h2 className="font-display max-w-2xl text-5xl leading-[1.03] md:text-6xl">
            From curiosity to a clearer next move.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {journey.map((stage, i) => (
            <Reveal key={stage.n} delay={i * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper-2 p-7">
                <span className="font-display text-5xl text-ink/25">
                  {stage.n}
                </span>
                <h3 className="font-display mt-3 text-2xl">{stage.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {stage.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/programme" variant="outline">
            View the Full Programme
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------- Latest + live rail (70 / 30) */

function ArticleCard({ kicker, title, body, cta }: (typeof latest)[number]) {
  return (
    <article className="group rounded-3xl border border-line bg-paper-2 p-8 transition-colors hover:bg-paper-3">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-clay">
        {kicker}
      </p>
      <h3 className="font-display mt-3 text-3xl leading-tight">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{body}</p>
      <p className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        {cta}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </p>
    </article>
  );
}

function RailBox({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl border border-line bg-paper p-6">
      <h4 className="font-display text-2xl">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
      <p className="mt-4 text-sm font-medium text-ink">{cta} →</p>
    </div>
  );
}

export function LatestAndRail() {
  return (
    <section className="bg-paper-2 py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Latest from Pathways</Eyebrow>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[7fr_3fr]">
          {/* Main column — 70% */}
          <div className="grid gap-6">
            {latest.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <ArticleCard {...a} />
              </Reveal>
            ))}
          </div>

          {/* Live rail — 30% */}
          <Reveal delay={120}>
            <aside className="space-y-5">
              <RailBox
                title="Next session"
                body="Full details announced soon. Register your interest to hear first."
                cta="Register Interest"
              />
              <RailBox
                title="Opportunity of the week"
                body="Selected opportunities across tech, creativity, digital work and enterprise."
                cta="View Opportunities"
              />
              {/* Mailing list — dark accent card */}
              <div className="rounded-3xl bg-ink p-6 text-paper">
                <h4 className="font-display text-2xl">Stay connected</h4>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">
                  Session news, resources and opportunities. No unnecessary
                  emails.
                </p>
                <form className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full border border-paper/20 bg-paper/5 px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:border-lime focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-lime px-4 py-2.5 text-sm font-medium text-lime-ink transition-transform hover:scale-105"
                  >
                    Join
                  </button>
                </form>
              </div>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------- Programme at a glance */

export function Stats() {
  return (
    <section className="py-24 md:py-28">
      <Container className="grid gap-10 border-y border-line py-14 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div>
              <div className="font-display text-7xl leading-none text-ink md:text-8xl">
                {s.value}
              </div>
              <div className="mt-3 text-lg font-medium text-ink">{s.label}</div>
              <p className="mt-1.5 text-sm text-ink-soft">{s.note}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Who for */

export function WhoFor() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div>
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <h2 className="font-display text-5xl leading-[1.03] md:text-6xl">
              You don&apos;t need a tech background to join.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Pathways is for young people aged 16–25 in Cardiff who are curious
              about technology, creativity, digital work or enterprise.
            </p>
            <div className="mt-8">
              <Button href="/join">Join Pathways</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-0 self-center">
            {forYou.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-b border-line py-4 text-ink"
              >
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-clay/15 text-xs text-clay"
                >
                  ✦
                </span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Core sessions */

export function Sessions() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Core sessions</Eyebrow>
          <h2 className="font-display max-w-2xl text-5xl leading-[1.03] md:text-6xl">
            Six sessions. One clearer direction.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Full session themes and facilitators will be announced soon.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-paper-2 p-6 transition-colors hover:bg-paper-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-ink/20">
                    {s.n}
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-soft">
                    {s.status}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  Short description, facilitator, date and status will appear
                  here.
                </p>
                <p className="mt-5 text-sm font-medium text-ink">
                  View session →
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/sessions" variant="outline">
            View All Sessions
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Partners */

export function Partners() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>Built through collaboration</Eyebrow>
          <h2 className="font-display max-w-2xl text-5xl leading-[1.03] md:text-6xl">
            Built with people who believe in young talent.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div className="h-full rounded-3xl border border-line bg-paper-2 p-8">
                <h3 className="font-display text-3xl leading-tight">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.role}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/partners">Partner With Us</Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA */

export function FinalCta() {
  return (
    <section className="px-6 pb-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-ink px-6 py-24 text-center text-paper md:py-32">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-clay/20 blur-[100px]" />
          <h2 className="font-display relative mx-auto max-w-3xl text-5xl leading-[1.02] md:text-7xl">
            Your next move could{" "}
            <span className="italic text-lime">start here.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            Whether you&apos;re exploring tech for the first time or sharpening
            existing experience, Pathways gives you the space, guidance and
            community to move forward.
          </p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/join" variant="dark">
              Register Your Interest
            </Button>
            <Button
              href="/refer"
              className="border border-paper/25 text-paper hover:bg-paper hover:text-ink"
            >
              Refer a Young Person
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
