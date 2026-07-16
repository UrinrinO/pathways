import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Container, Eyebrow, Button } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import {
  Breadcrumbs,
  SoftCard,
  CTABand,
} from "@/components/pages/shared/blocks";
import { ReferralForm } from "@/components/pages/refer/referral-form";
import { ShareRegistration } from "@/components/pages/refer/share-registration";

export const metadata: Metadata = {
  title: "Refer a young person — Pathways",
  description:
    "Know a young person aged 16–25 in Cardiff who'd benefit from Pathways? Refer them or share the registration link — we'll reach out with care.",
};

const reassurances = [
  {
    title: "Handled with care",
    body: "Every referral is treated thoughtfully and in line with our safeguarding approach.",
  },
  {
    title: "Never shared",
    body: "We only use the details you give us to reach out — they're never passed on.",
  },
  {
    title: "No pressure",
    body: "A gentle, respectful first contact — it's always their choice whether to take part.",
  },
];

export default function ReferPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="d" />
        <Container className="relative py-20 md:py-28">
          <ScrollFade className="max-w-3xl">
            <Breadcrumbs page="Refer a young person" />
            <Eyebrow>Refer a young person</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Know someone who could thrive here?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              If you know a young person aged 16–25 in Cardiff who&apos;d benefit
              from Pathways, refer them or share the registration link —
              we&apos;ll reach out with care.
            </p>
          </ScrollFade>
        </Container>
      </section>

      {/* Reassurance strip */}
      <section className="bg-snow">
        <Container className="py-16 md:py-20">
          <ScrollFade className="grid gap-5 md:grid-cols-3">
            {reassurances.map((r) => (
              <SoftCard key={r.title}>
                <div className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime text-lime-ink">
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-base font-bold tracking-tight text-ink">
                      {r.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                      {r.body}
                    </p>
                  </div>
                </div>
              </SoftCard>
            ))}
          </ScrollFade>
        </Container>
      </section>

      {/* Referral form */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Make a referral</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                A few gentle details.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                You don&apos;t need to fill in much — just enough for us to reach
                out respectfully. We&apos;ll take it from there, at their pace.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ReferralForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* They can register themselves — dark share block */}
      <section className="bg-snow">
        <Container className="py-16 md:py-20">
          <ScrollFade className="overflow-hidden rounded-3xl bg-carbon p-8 text-carbon-ink shadow-[0_18px_50px_-30px_rgba(14,18,24,0.5)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow tone="dark">Prefer to share it?</Eyebrow>
                <h2 className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl">
                  They can register themselves.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-carbon-ink/80">
                  If they&apos;d rather take the first step on their own terms,
                  send them the registration link. It&apos;s free, takes a few
                  minutes, and there&apos;s nothing to prepare.
                </p>
                <div className="mt-8">
                  <Button href="/join" variant="lime">
                    Go to registration
                  </Button>
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-carbon-ink/50">
                  Registration link
                </p>
                <ShareRegistration />
              </div>
            </div>
          </ScrollFade>
        </Container>
      </section>

      {/* Closing CTA */}
      <CTABand
        eyebrow="Rather talk it through?"
        heading="We're here to help you decide."
        sub="If you're not sure Pathways is the right fit, get in touch — we're happy to talk through eligibility, sessions and next steps."
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/programme", label: "Explore the programme" }}
      />

      <Footer />
    </main>
  );
}
