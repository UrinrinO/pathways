import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import {
  SoftCard,
  NumberCard,
  CTABand,
} from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { galleryImages } from "@/lib/images";
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
      <PageHero
        crumb="Partners"
        heading="Help build the next generation."
        sub="Bring mentorship, space or opportunities to young creatives in Cardiff."
        cta={{ label: "Partner with us", href: "#partner-cta" }}
        image={galleryImages[2]}
        badge="Let's build"
      />

      {/* Why partnership matters — split header + number cards */}
      <section className="relative bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <Eyebrow>Why partnership matters</Eyebrow>
                <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                  More than information — access.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-ink-soft">
                Young people need more than information. They need access to
                people, places, experience and opportunities. Partners help
                participants understand what&apos;s possible, develop practical
                knowledge and build connections beyond the programme.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 90}>
                  <NumberCard n={`0${i + 1}`} title={w.title}>
                    {w.body}
                  </NumberCard>
                </Reveal>
              ))}
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Ways to support — lively SoftCard grid */}
      <section id="support" className="bg-snow">
        <Container className="py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>Ways to support Pathways</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Eight ways to make a difference.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Support looks different for everyone. Pick the ones that fit you
                — every kind of help moves a young person forward.
              </p>
            </div>
            <SupportGrid />
          </ScrollFade>
        </Container>
      </section>

      {/* Current partners */}
      <section className="relative bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>Current partners</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Who&apos;s building this with us.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                A small group of organisations making the first stage of Pathways
                possible.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {PARTNERS.map((p, i) => (
                <Reveal key={p.name} delay={i * 90}>
                  <SoftCard className="group flex h-full flex-col">
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
                  </SoftCard>
                </Reveal>
              ))}
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Partner CTA */}
      <div id="partner-cta">
        <CTABand
          eyebrow="Become a partner"
          heading="Let's build clearer routes, together."
          sub="We'd like to hear from organisations and professionals who can contribute knowledge, opportunities, space, mentorship or resources."
          primary={{ href: "#", label: "Partner with us" }}
          secondary={{ href: "mailto:hello@pathways.wales", label: "Start a conversation" }}
        />
      </div>

      <Footer />
    </main>
  );
}
