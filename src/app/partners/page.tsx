import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Button } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { SupportGrid } from "@/components/pages/partners/support-grid";

export const metadata: Metadata = {
  title: "Partners — Pathways",
  description:
    "Pathways works with organisations, founders, professionals, educators and community partners who help young people access clearer routes into technology, creativity and enterprise.",
};

const WHY = [
  {
    title: "Access to people",
    body: "Time with working professionals shows young people what a career actually looks like — beyond the job title.",
  },
  {
    title: "Access to places",
    body: "Studios, workplaces and events make possibility concrete. Being in the room changes what feels achievable.",
  },
  {
    title: "Access to experience",
    body: "Real briefs, visits and opportunities build practical knowledge that no classroom can replace.",
  },
];

const PARTNERS = [
  {
    name: "Youth4Change Wales",
    role: "Lead delivery partner",
    body: "Leads and delivers Pathways — community-led programmes, guidance and opportunities across Cardiff.",
    mark: (
      <>
        <circle cx="23" cy="21" r="9" />
        <circle cx="43" cy="23" r="7" />
        <path d="M7 52c0-9 7-16 16-16s16 7 16 16z" />
        <path d="M37 52c.5-7 4-13 9-14 6 0 11 6 11 14z" opacity="0.85" />
      </>
    ),
  },
  {
    name: "NatWest Accelerator",
    role: "Enterprise partner",
    body: "Supports mentorship, practical advice and connections to wider enterprise networks.",
    mark: (
      <>
        <path d="M32 3c9 7 14 17 14 29l-5 9H23l-5-9C18 20 23 10 32 3z" />
        <path d="M17 41l-9 7 3 9 10-6zM47 41l9 7-3 9-10-6z" />
        <circle cx="32" cy="55" r="3" />
      </>
    ),
  },
  {
    name: "The National Lottery Community Fund",
    role: "Founding funder",
    body: "Funds the first twelve months of Pathways, keeping it free for every participant.",
    mark: (
      <path d="M32 55S8 40 8 23C8 14 15 8 23 8c5 0 8 3 9 6 1-3 4-6 9-6 8 0 15 6 15 15 0 17-24 32-24 32z" />
    ),
  },
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
              <Eyebrow>Partners</Eyebrow>
              <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
                Help build the next generation of creative technologists.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Pathways works with organisations, founders, professionals,
                educators and community partners who want to help young people
                access clearer routes into technology, creativity and
                enterprise.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href="#partner-cta" variant="primary" className="px-7 py-4">
                  Partner with us
                </Button>
                <Button href="#support" variant="secondary" arrow={false}>
                  See ways to support
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Why partnership matters */}
      <section className="relative bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>Why partnership matters</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              More than information — access.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Young people need more than information. They need access to
              people, places, experience and opportunities. Partners help
              participants understand what&apos;s possible, develop practical
              knowledge and build connections beyond the programme.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-3xl bg-snow p-8 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] ring-1 ring-line/60">
                  <span className="text-sm font-bold tracking-[0.15em] text-lime">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                    {w.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Standout — ways to support (interactive) */}
      <section id="support" className="bg-snow">
        <Container className="py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>Ways to support Pathways</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Eight ways to make a difference.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Support looks different for everyone. Hover a way to support to see
              how it helps — then tell us which fits you best.
            </p>
          </Reveal>
          <SupportGrid />
        </Container>
      </section>

      {/* Current partners */}
      <section className="relative bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <Reveal className="max-w-2xl">
            <Eyebrow>Current partners</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
              Who&apos;s building this with us.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              A small group of organisations making the first stage of Pathways
              possible.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="group flex h-full flex-col rounded-3xl bg-snow p-8 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] ring-1 ring-line/60 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-paper-2 text-ink transition-colors duration-300 group-hover:bg-lime group-hover:text-lime-ink">
                      <svg width="40" height="40" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
                        {p.mark}
                      </svg>
                    </span>
                    <span className="rounded-full bg-paper-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                      {p.role}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner CTA */}
      <section id="partner-cta" className="bg-snow">
        <Container className="pb-24 pt-8 md:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-midnight px-8 py-16 md:px-14 md:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 -top-16 h-80 w-80 rounded-full bg-lime/25 blur-[110px]" />
                <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-orange/20 blur-[110px]" />
              </div>

              <div className="relative max-w-2xl">
                <p className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Become a partner
                </p>
                <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
                  Let&apos;s build clearer routes,{" "}
                  <span className="text-lime">together.</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-soft-grey">
                  We&apos;d like to hear from organisations and professionals who
                  can contribute knowledge, opportunities, space, mentorship or
                  resources.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href="#"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-lime-ink transition-transform hover:scale-[1.03]"
                  >
                    Partner with us
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <a
                    href="mailto:hello@pathways.wales"
                    className="rounded-full border border-soft-grey/25 px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-snow hover:text-midnight"
                  >
                    Start a conversation
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
