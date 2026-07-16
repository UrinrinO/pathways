import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
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
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink"
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

      {/* Standout — launch stories + interactive filterable journal */}
      <StoriesExplorer />

      {/* Stay connected CTA */}
      <section className="bg-snow">
        <Container className="py-20 md:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-midnight px-8 py-16 md:px-14 md:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -right-10 -top-16 h-80 w-80 rounded-full bg-lime/25 blur-[110px]" />
                <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-orange/20 blur-[110px]" />
              </div>

              <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                  <p className="mb-6 flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-lime">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    Stay connected
                  </p>
                  <h2 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
                    Follow the story as it&apos;s{" "}
                    <span className="text-lime">written.</span>
                  </h2>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-soft-grey">
                    New articles, photo sets and short films as the programme
                    takes shape. Join the list and we&apos;ll send the ones
                    worth your time.
                  </p>
                </div>

                <div className="flex flex-col gap-3 rounded-3xl bg-panel p-6 ring-1 ring-white/10">
                  <label
                    htmlFor="stories-email"
                    className="text-sm font-medium text-soft-grey"
                  >
                    Get the journal in your inbox
                  </label>
                  <input
                    id="stories-email"
                    type="email"
                    placeholder="you@email.com"
                    className="w-full rounded-full border border-white/15 bg-midnight px-5 py-3.5 text-sm text-snow outline-none transition-colors placeholder:text-soft-grey/50 focus:border-lime/50"
                  />
                  <button
                    type="button"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-lime-ink transition-transform hover:scale-[1.02]"
                  >
                    Join the list
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                  <p className="text-xs text-soft-grey/60">
                    No spam. Unsubscribe any time.
                  </p>
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
