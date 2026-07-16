import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Container, Eyebrow, Button } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Reveal } from "@/components/reveal";
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
          <Reveal className="max-w-3xl">
            <Eyebrow>Refer a young person</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Know someone who could thrive here?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              If you know a young person aged 16–25 in Cardiff who&apos;d benefit
              from Pathways, refer them or share the registration link — we&apos;ll
              reach out with care.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Reassurance strip */}
      <section className="bg-snow">
        <Container className="py-14 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            {reassurances.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="flex items-start gap-4 rounded-3xl bg-paper p-6"
              >
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Referral form */}
      <section className="relative bg-paper">
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

      {/* Secondary — they can register themselves */}
      <section className="bg-snow">
        <Container className="pb-24 md:pb-32">
          <Reveal className="overflow-hidden rounded-3xl bg-carbon p-8 text-carbon-ink md:p-12">
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
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
