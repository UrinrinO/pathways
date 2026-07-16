import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Container, Eyebrow, ArrowLink } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { SoftCard, CTABand } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { galleryImages } from "@/lib/images";
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
      <PageHero
        crumb="Contact"
        heading="Get in touch."
        sub="Joining, partnering or just curious — we'd like to hear from you."
        image={galleryImages[3]}
        badge="Hello"
      />

      {/* Routed contact cards */}
      <section className="bg-snow">
        <Container className="py-16 md:py-24">
          <ScrollFade className="grid gap-5 md:grid-cols-3">
            {routes.map((r, i) => (
              <SoftCard key={r.title} className="flex h-full flex-col">
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
              </SoftCard>
            ))}
          </ScrollFade>
        </Container>
      </section>

      {/* Details + general form */}
      <section className="relative overflow-hidden bg-paper">
        <Splashes variant="c" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* Details block — dark card for contrast */}
            <Reveal className="flex flex-col justify-between overflow-hidden rounded-3xl bg-carbon p-8 text-carbon-ink shadow-[0_18px_50px_-30px_rgba(14,18,24,0.5)] md:p-10">
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

      {/* Closing CTA */}
      <CTABand
        eyebrow="Ready to take part?"
        heading="Register your interest today."
        sub="It takes a couple of minutes, and we'll be in touch with the next steps and dates for the upcoming programme."
        primary={{ href: "/join", label: "Register your interest" }}
        secondary={{ href: "/programme", label: "Explore the programme" }}
      />

      <Footer />
    </main>
  );
}
