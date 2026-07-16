"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/reveal";
import { ScrollFade } from "@/components/sample-a/scroll-fade";
import { Splashes } from "@/components/sample-a/splashes";
import { SoftCard } from "@/components/pages/shared/blocks";

type Mode = "Online" | "In-person" | "Hybrid";

type Opportunity = {
  title: string;
  org: string;
  summary: string;
  location: string;
  deadline: string;
  category: string;
  mode: Mode;
};

const CATEGORIES = [
  "All",
  "Jobs",
  "Internships",
  "Training",
  "Workshops",
  "Grants",
  "Events",
  "Mentoring",
  "Enterprise Support",
  "Volunteering",
  "Pathways Opportunities",
];

const OPPORTUNITIES: Opportunity[] = [
  {
    title: "Creative Technology Internship",
    org: "BBC Cymru Wales",
    summary:
      "A paid summer placement working alongside a digital production team on real audience-facing projects.",
    location: "Cardiff",
    deadline: "Deadline 20 Sept",
    category: "Internships",
    mode: "In-person",
  },
  {
    title: "Digital Skills Bootcamp",
    org: "Code Nation",
    summary:
      "Six weeks of practical, portfolio-first training covering the web, design tools and working in a team.",
    location: "Online",
    deadline: "Applications open",
    category: "Training",
    mode: "Online",
  },
  {
    title: "Youth Enterprise Grant",
    org: "Big Ideas Wales",
    summary:
      "Seed funding of up to £500 plus guidance for young people turning a creative or digital idea into something real.",
    location: "Wales",
    deadline: "Deadline 4 Oct",
    category: "Grants",
    mode: "Hybrid",
  },
  {
    title: "UX & Product Design Workshop",
    org: "Cardiff Design Collective",
    summary:
      "A hands-on Saturday introduction to user research, wireframing and prototyping — no experience needed.",
    location: "Cardiff",
    deadline: "Deadline 12 Sept",
    category: "Workshops",
    mode: "In-person",
  },
  {
    title: "Junior Front-End Developer",
    org: "Nimble Studio",
    summary:
      "An entry-level role for someone who likes building interfaces. Mentored, junior-friendly and open to self-taught applicants.",
    location: "Cardiff / Remote",
    deadline: "Rolling",
    category: "Jobs",
    mode: "Hybrid",
  },
  {
    title: "Creative Mentoring Programme",
    org: "Youth4Change Wales",
    summary:
      "Three months matched with a working creative technologist — regular calls, honest feedback and real connections.",
    location: "Online",
    deadline: "Applications open",
    category: "Mentoring",
    mode: "Online",
  },
  {
    title: "Games & Interactive Meetup",
    org: "Cardiff Games Nights",
    summary:
      "A relaxed monthly evening for anyone making games, tools or interactive work. Bring a project or just come to look.",
    location: "Cardiff",
    deadline: "Every last Thursday",
    category: "Events",
    mode: "In-person",
  },
  {
    title: "Volunteer Digital Assistant",
    org: "Riverside Community Hub",
    summary:
      "Help run digital drop-in sessions for the local community — great for building confidence and people skills.",
    location: "Cardiff",
    deadline: "Ongoing",
    category: "Volunteering",
    mode: "In-person",
  },
  {
    title: "Founders Drop-in Clinic",
    org: "NatWest Accelerator",
    summary:
      "Book a slot with an enterprise advisor to pressure-test an idea, talk finance basics or map your next step.",
    location: "Cardiff / Online",
    deadline: "Weekly slots",
    category: "Enterprise Support",
    mode: "Hybrid",
  },
  {
    title: "Pathways Studio Taster",
    org: "Pathways",
    summary:
      "An early look inside the programme — meet the team, see the space and try a short creative-tech brief.",
    location: "Cardiff",
    deadline: "Launching soon",
    category: "Pathways Opportunities",
    mode: "In-person",
  },
];

const DEADLINES = [
  { title: "UX & Product Design Workshop", date: "12 Sept" },
  { title: "Creative Technology Internship", date: "20 Sept" },
  { title: "Youth Enterprise Grant", date: "4 Oct" },
];

function ModeChip({ mode }: { mode: Mode }) {
  const styles: Record<Mode, string> = {
    Online: "bg-lime/20 text-lime-ink",
    "In-person": "bg-orange/15 text-clay",
    Hybrid: "bg-paper-3 text-ink-soft",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[mode]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {mode}
    </span>
  );
}

const PinIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CalIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
);

function OpportunityCard({ o }: { o: Opportunity }) {
  return (
    <SoftCard className="group flex h-full flex-col !p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-paper-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
          {o.category}
        </span>
        <ModeChip mode={o.mode} />
      </div>

      <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-ink">
        {o.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-clay">{o.org}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
        {o.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-ink-mute">
        <span className="inline-flex items-center gap-1.5">
          {PinIcon}
          {o.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          {CalIcon}
          {o.deadline}
        </span>
      </div>

      <div className="mt-5 border-t border-line/70 pt-4">
        <a
          href="#"
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
        >
          View
          <span
            aria-hidden
            className="text-lime transition-transform duration-200 group-hover/link:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </SoftCard>
  );
}

export function OpportunitiesExplorer() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? OPPORTUNITIES
        : OPPORTUNITIES.filter((o) => o.category === active),
    [active]
  );

  const featured = OPPORTUNITIES[0];

  return (
    <section className="relative bg-paper">
      <Splashes variant="b" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Opportunity of the week — dark feature band, in the flow */}
        <ScrollFade>
          <div className="relative overflow-hidden rounded-[32px] bg-carbon p-8 text-carbon-ink md:p-12">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-lime/25 blur-[100px]" />
              <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-orange/15 blur-[100px]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              {/* The pick */}
              <div>
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                  Opportunity of the week
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-carbon-ink/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-carbon-ink/80">
                    {featured.category}
                  </span>
                  <ModeChip mode={featured.mode} />
                </div>
                <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-snow md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-lime">
                  {featured.org}
                </p>
                <p className="mt-4 max-w-lg leading-relaxed text-carbon-ink/70">
                  {featured.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-carbon-ink/60">
                  <span className="inline-flex items-center gap-1.5">
                    {PinIcon}
                    {featured.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    {CalIcon}
                    {featured.deadline}
                  </span>
                </div>
                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-lime-ink transition-transform hover:scale-[1.03]"
                >
                  View opportunity
                  <span
                    aria-hidden
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Upcoming deadlines — fills the right side */}
              <div className="rounded-3xl bg-carbon-ink/[0.06] p-6 ring-1 ring-carbon-ink/10">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-carbon-ink/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                  Upcoming deadlines
                </p>
                <ul className="mt-4 flex flex-col divide-y divide-carbon-ink/10">
                  {DEADLINES.map((d) => (
                    <li
                      key={d.title}
                      className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                    >
                      <span className="text-sm font-medium leading-snug text-snow">
                        {d.title}
                      </span>
                      <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-xs font-bold text-lime-ink">
                        {d.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollFade>

        {/* Browse — filter + dense grid */}
        <ScrollFade className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Browse opportunities
            </h2>
            <p className="text-sm text-ink-mute">
              Showing{" "}
              <span className="font-semibold text-ink">{filtered.length}</span>{" "}
              of {OPPORTUNITIES.length}
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

          {/* Launch note */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-lime/15 px-5 py-4 text-sm leading-relaxed text-ink">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
              !
            </span>
            <p>
              These are a preview of the kinds of opportunities we&apos;ll share.
              The first live opportunities land as the programme launches — join
              the list to be first to see them.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) * 80}>
                <OpportunityCard o={o} />
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-ink-soft">
                Nothing under this category just yet — check back soon.
              </p>
            )}
          </div>
        </ScrollFade>

        {/* Email capture + submit — content-full, side by side */}
        <ScrollFade className="mt-16 md:mt-20">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Get opportunity updates */}
            <SoftCard className="flex h-full flex-col justify-center bg-paper-2 !p-8 md:!p-10">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                Stay in the loop
              </p>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Get opportunity updates
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                A short, useful email when new opportunities go live. No spam,
                unsubscribe any time.
              </p>
              <form
                className="mt-6 flex flex-col gap-2.5 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="w-full rounded-full bg-snow px-5 py-3.5 text-sm text-ink shadow-[0_10px_30px_-24px_rgba(14,18,24,0.5)] outline-none transition-shadow placeholder:text-ink-mute focus:shadow-[0_0_0_2px_var(--color-lime)]"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-snow transition-colors hover:bg-carbon"
                >
                  Join the list
                  <span
                    aria-hidden
                    className="text-lime transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </form>
            </SoftCard>

            {/* Submit an opportunity */}
            <SoftCard className="flex h-full flex-col !p-8 md:!p-10">
              <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-lime" />
                For organisations &amp; employers
              </p>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Have something worth sharing?
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                If you run jobs, internships, training, grants or events that
                would genuinely help young people in Cardiff, send them our way.
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {[
                  "Reach an engaged group of 16–25 year-olds",
                  "We only share what's relevant and accessible",
                  "Free to submit — reviewed by our team",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime text-[11px] font-bold text-lime-ink">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-snow transition-colors hover:bg-carbon"
              >
                Submit an opportunity
                <span
                  aria-hidden
                  className="text-lime transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </SoftCard>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
