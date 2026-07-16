import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { Breadcrumbs, CTABand } from "@/components/pages/shared/blocks";
import { StoriesExplorer } from "@/components/pages/stories/stories-explorer";

export const metadata: Metadata = {
  title: "Stories — Pathways",
  description:
    "The Pathways journal — documenting what participants are learning, what ideas are developing and what happens next, through articles, photography and short films.",
};

const FORMATS = ["Articles", "Photography", "Short films"];

export default function Page() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-snow">
        <Splashes variant="a" />
        <Container className="relative py-20 md:py-28">
          <div className="max-w-3xl">
            <Reveal>
              <Breadcrumbs page="Stories" />
              <Eyebrow>Pathways journal</Eyebrow>
              <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
                Documenting what is being built.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
                More than a collection of sessions — this is where we document
                what participants are learning, what ideas are developing,
                who&apos;s contributing and what happens next, through articles,
                photography and short films.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                {FORMATS.map((f) => (
                  <span
                    key={f}
                    className="inline-flex items-center gap-2 rounded-full bg-paper-2 px-4 py-2 text-sm font-medium text-ink"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Launch stories + interactive filterable journal */}
      <StoriesExplorer />

      {/* Stay connected CTA */}
      <CTABand
        eyebrow="Stay connected"
        heading="Follow the story as it's written."
        sub="New articles, photo sets and short films as the programme takes shape. Join the list and we'll send the ones worth your time."
        primary={{ href: "/join", label: "Join the list" }}
        secondary={{ href: "#", label: "Explore the journal" }}
      />

      <Footer />
    </main>
  );
}
