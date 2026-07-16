"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { Splashes } from "@/components/sample-a/splashes";
import { Eyebrow } from "@/components/sample-a/ui";
import { SoftCard } from "@/components/pages/shared/blocks";
import { galleryImages, sessionShots } from "@/lib/images";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  img: string;
  read: string;
};

const CATEGORIES = [
  "All",
  "Session Recaps",
  "Participant Stories",
  "Mentor Interviews",
  "Creative Tech Insights",
  "Partner News",
  "Pathways Updates",
  "Opportunities",
];

const ARTICLES: Article[] = [
  {
    title: "Inside the first session: mapping what you already make",
    excerpt:
      "How the opening session turns scattered creative habits into a clearer sense of direction.",
    category: "Session Recaps",
    img: sessionShots[0],
    read: "4 min",
  },
  {
    title: "Meet Amira — from editing videos to building interactive stories",
    excerpt:
      "A participant on recognising the value of the digital skills she already had.",
    category: "Participant Stories",
    img: galleryImages[0],
    read: "6 min",
  },
  {
    title: "A mentor on why curiosity beats a perfect CV",
    excerpt:
      "Our first mentor interview: honest advice on getting into creative technology.",
    category: "Mentor Interviews",
    img: sessionShots[1],
    read: "5 min",
  },
  {
    title: "The tools we actually reach for — and why",
    excerpt:
      "A practical look at the software and workflows behind modern creative-tech work.",
    category: "Creative Tech Insights",
    img: sessionShots[2],
    read: "7 min",
  },
  {
    title: "NatWest Accelerator joins as an enterprise partner",
    excerpt:
      "Bringing mentorship, practical advice and connections to wider enterprise networks.",
    category: "Partner News",
    img: galleryImages[1],
    read: "3 min",
  },
  {
    title: "What we're building this month",
    excerpt:
      "A short update on the space, the sessions and the people shaping Pathways.",
    category: "Pathways Updates",
    img: sessionShots[3],
    read: "4 min",
  },
  {
    title: "Six opportunities worth a look this autumn",
    excerpt:
      "A round-up of internships, grants and events we think are genuinely worth your time.",
    category: "Opportunities",
    img: galleryImages[2],
    read: "5 min",
  },
  {
    title: "Behind the photography: documenting a session",
    excerpt:
      "How we capture the room without turning it into a photoshoot.",
    category: "Creative Tech Insights",
    img: sessionShots[4],
    read: "4 min",
  },
  {
    title: "Session two: from idea to a working first draft",
    excerpt:
      "The recap on turning a rough concept into something you can actually show.",
    category: "Session Recaps",
    img: sessionShots[5],
    read: "5 min",
  },
];

// The three prominent launch stories.
const LAUNCH = [
  {
    tag: "Pathways Updates",
    title: "Pathways has been funded — and we're getting ready to build.",
    body: "Pathways is entering its first stage of development: shaping the programme, building partnerships and preparing to welcome the first group of young people.",
    img: galleryImages[3],
    read: "5 min read",
  },
  {
    tag: "Creative Tech Insights",
    title: "Why Pathways is linking creativity with technology.",
    body: "Creative young people already use technology every day — but many don't recognise the value of their digital experience. Pathways makes that connection clearer.",
    img: sessionShots[2],
    read: "6 min read",
  },
  {
    tag: "Pathways Updates",
    title: "Building a programme that doesn't feel like school.",
    body: "The environment matters. Pathways is a collaborative hub where young people can contribute, question, learn and build together — not sit in rows of desks.",
    img: sessionShots[0],
    read: "4 min read",
  },
];

function ArticleCard({ a }: { a: Article }) {
  return (
    <SoftCard className="group flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={a.img}
          alt={a.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-snow/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink backdrop-blur">
          {a.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">
          {a.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
          {a.excerpt}
        </p>
        <div className="mt-6 flex items-center justify-between">
          <a
            href="#"
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
          >
            Read
            <span
              aria-hidden
              className="text-lime transition-transform duration-200 group-hover/link:translate-x-1"
            >
              →
            </span>
          </a>
          <span className="text-xs font-medium text-ink-mute">{a.read}</span>
        </div>
      </div>
    </SoftCard>
  );
}

export function StoriesExplorer() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? ARTICLES
        : ARTICLES.filter((a) => a.category === active),
    [active]
  );

  return (
    <>
      {/* Launch stories — featured trio */}
      <section className="bg-snow">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrollFade>
            <div className="max-w-2xl">
              <Eyebrow>The launch stories</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
                Where Pathways begins.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                Three pieces on what we&apos;re building, why it matters and how it
                feels to be in the room.
              </p>
            </div>

            {/* Big dark lead + two SoftCards */}
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Lead */}
              <a
                href="#"
                className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[32px] bg-carbon p-8 text-carbon-ink shadow-[0_30px_80px_-40px_rgba(14,18,24,0.5)] transition-transform duration-300 hover:-translate-y-1 md:p-10 lg:min-h-full"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LAUNCH[0].img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/10" />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-lime px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-lime-ink">
                    {LAUNCH[0].tag}
                  </span>
                  <h3 className="mt-5 max-w-xl text-2xl font-bold leading-tight tracking-tight text-snow md:text-3xl">
                    {LAUNCH[0].title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-carbon-ink/75">
                    {LAUNCH[0].body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                    Read the story
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
              </a>

              {/* Two stacked SoftCards */}
              <div className="flex flex-col gap-6">
                {LAUNCH.slice(1).map((s) => (
                  <SoftCard
                    key={s.title}
                    className="group grid flex-1 gap-5 overflow-hidden !p-0 sm:grid-cols-[1fr_1.15fr]"
                  >
                    <a href="#" className="contents">
                      <div className="relative aspect-[4/3] overflow-hidden bg-paper-2 sm:aspect-auto">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={s.img}
                          alt={s.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-6">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-clay">
                          {s.tag}
                        </span>
                        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-ink">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                          {s.body}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                          Read
                          <span
                            aria-hidden
                            className="text-lime transition-transform duration-200 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </a>
                  </SoftCard>
                ))}
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Interactive filterable journal grid */}
      <section className="relative bg-paper">
        <Splashes variant="d" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <ScrollFade>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  From the journal
                </h2>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Articles, photography and short films. Filter by what you want
                  to read.
                </p>
              </div>
              <p className="text-sm text-ink-mute">
                Showing{" "}
                <span className="font-semibold text-ink">
                  {filtered.length}
                </span>{" "}
                of {ARTICLES.length}
              </p>
            </div>

            <div className="no-scrollbar mt-7 flex gap-2.5 overflow-x-auto pb-1">
              {CATEGORIES.map((c) => {
                const on = c === active;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      on
                        ? "bg-ink text-snow"
                        : "bg-snow text-ink-soft shadow-[0_10px_30px_-24px_rgba(14,18,24,0.5)] hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 90}>
                  <ArticleCard a={a} />
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <p className="text-ink-soft">
                  No stories in this category yet — the first pieces are on their
                  way.
                </p>
              )}
            </div>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
