import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Container, Eyebrow, ArrowLink } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/pages/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact — Pathways",
  description:
    "Get in touch with Pathways — whether you're thinking about joining, supporting the programme or sharing an opportunity, we'd like to hear from you.",
};

const routes = [
  {
    title: "Thinking about joining?",
    body: "Questions about eligibility, sessions, access needs or registration — we're happy to help you figure out if Pathways is right for you.",
    cta: "Ask about joining",
    href: "/join",
  },
  {
    title: "Interested in working with Pathways?",
    body: "Organisations, mentors, employers, founders and professionals who want to support young people and shape what comes next.",
    cta: "Discuss a partnership",
    href: "/partners",
  },
  {
    title: "General enquiries",
    body: "Media, community, programme or general questions — anything that doesn't quite fit the boxes above. Just send us a note.",
    cta: "Email the team",
    href: "mailto:hello@pathways.wales",
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function ContactPage() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="b" />
        <Container className="relative py-20 md:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
              Get in touch.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Whether you&apos;re thinking about joining Pathways, supporting the
              programme or sharing an opportunity, we&apos;d like to hear from
              you.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Routed contact cards */}
      <section className="bg-snow">
        <Container className="py-16 md:py-24">
          <div className="grid gap-5 md:grid-cols-3">
            {routes.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 90}
                className="flex flex-col rounded-3xl border border-line bg-paper p-8 transition-colors hover:border-ink/15"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-lime-ink">
                  <span className="text-sm font-bold">{i + 1}</span>
                </span>
                <h2 className="mt-6 text-xl font-bold tracking-tight text-ink">
                  {r.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {r.body}
                </p>
                <div className="mt-6">
                  <ArrowLink href={r.href}>{r.cta}</ArrowLink>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Details + general form */}
      <section className="relative bg-paper">
        <Splashes variant="c" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* Details block — dark card for contrast */}
            <Reveal className="flex flex-col justify-between overflow-hidden rounded-3xl bg-carbon p-8 text-carbon-ink md:p-10">
              <div>
                <Eyebrow tone="dark">Contact details</Eyebrow>
                <h2 className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl">
                  We&apos;re based in Cardiff.
                </h2>

                <dl className="mt-10 space-y-8">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-carbon-ink/50">
                      Email
                    </dt>
                    <dd className="mt-2">
                      <a
                        href="mailto:hello@pathways.wales"
                        className="text-lg font-medium text-carbon-ink transition-colors hover:text-lime"
                      >
                        hello@pathways.wales
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-carbon-ink/50">
                      Location
                    </dt>
                    <dd className="mt-2 text-lg font-medium text-carbon-ink">
                      Cardiff, Wales
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-12 border-t border-carbon-ink/15 pt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-carbon-ink/50">
                  Follow along
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-[15px] font-medium">
                  {socials.map((s, i) => (
                    <span key={s.label} className="flex items-center gap-2">
                      {i > 0 && (
                        <span aria-hidden className="text-carbon-ink/30">
                          ·
                        </span>
                      )}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-carbon-ink/80 transition-colors hover:text-lime"
                      >
                        {s.label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={120}>
              <div className="mb-6">
                <Eyebrow>Send a message</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-ink md:text-4xl">
                  Drop us a line.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                  A short message is all we need — we&apos;ll point you to the
                  right person and get back to you.
                </p>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Foot CTA to join */}
      <section className="bg-snow">
        <Container className="pb-24 md:pb-32">
          <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-paper p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Ready to take part?
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                Register your interest in a couple of minutes and we&apos;ll be
                in touch with the next steps.
              </p>
            </div>
            <Link
              href="/join"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
            >
              Register your interest
              <span
                aria-hidden
                className="text-lime transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
