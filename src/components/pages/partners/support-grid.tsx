import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { SoftCard } from "@/components/pages/shared/blocks";

type Support = {
  title: string;
  desc: string;
  paths: ReactNode;
};

function Icon({ paths, size }: { paths: ReactNode; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths}
    </svg>
  );
}

const SUPPORTS: Support[] = [
  {
    title: "Mentorship",
    desc: "Share your time one-to-one — honest guidance from someone who's done the work.",
    paths: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9.5" r="2.4" />
        <path d="M3.5 19c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
        <path d="M15.5 19c0-2.3 1.3-4 3.3-4" />
      </>
    ),
  },
  {
    title: "Professional insight",
    desc: "Talks, Q&As and real stories about how creative-tech careers actually work.",
    paths: (
      <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.4 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3Z" />
    ),
  },
  {
    title: "Opportunities",
    desc: "Internships, work experience, jobs and events to share with participants.",
    paths: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 12h18" />
      </>
    ),
  },
  {
    title: "Space",
    desc: "Offer a room, studio or desk where young people can meet, work and build.",
    paths: (
      <>
        <path d="M4 11l8-6 8 6" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
  },
  {
    title: "Live briefs",
    desc: "Set a real challenge for the group to respond to — the best kind of practice.",
    paths: (
      <>
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
  {
    title: "Visits",
    desc: "Open your doors for a studio or workplace visit — show what's possible up close.",
    paths: (
      <>
        <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
  },
  {
    title: "Equipment & resources",
    desc: "Hardware, software, licences or materials that put better tools in their hands.",
    paths: (
      <>
        <rect x="3" y="4.5" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16.5V20" />
      </>
    ),
  },
  {
    title: "Sponsorship",
    desc: "Back the programme financially and help keep Pathways free for every participant.",
    paths: (
      <path d="M12 21S4 15 4 9.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 3.5C20 15 12 21 12 21Z" />
    ),
  },
];

export function SupportGrid() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {SUPPORTS.map((s, i) => (
        <Reveal key={s.title} delay={(i % 4) * 80}>
          <SoftCard className="group flex h-full flex-col !p-7">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-paper-2 text-ink transition-colors duration-300 group-hover:bg-lime group-hover:text-lime-ink">
              <Icon paths={s.paths} size={26} />
            </span>
            <span className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-ink">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
              {s.desc}
            </p>
            <a
              href="#partner-cta"
              className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-ink"
            >
              How it helps
              <span
                aria-hidden
                className="text-lime transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </SoftCard>
        </Reveal>
      ))}
    </div>
  );
}
