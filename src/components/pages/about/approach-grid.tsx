import { Reveal } from "@/components/reveal";

/** Simple stroke icons, one per principle. */
const ICONS = [
  // person
  <svg key="a" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </svg>,
  // lightning
  <svg key="b" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
  </svg>,
  // chat bubbles
  <svg key="c" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1a5 5 0 0 0 5 5h1l3 3v-3.4A5 5 0 0 0 14 9Z" />
    <path d="M17 8h.5A3.5 3.5 0 0 1 21 11.5v.5a3.5 3.5 0 0 1-3.5 3.5H17l-2 2" />
  </svg>,
  // route / continue
  <svg key="d" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="19" r="2.2" />
    <circle cx="19" cy="5" r="2.2" />
    <path d="M7 17.5 11 14a3.5 3.5 0 0 1 0-5.4l1.6-1.2" />
    <path d="M17 6.8 13.4 9.6" />
  </svg>,
];

const PRINCIPLES = [
  {
    n: "01",
    title: "Start with the person",
    body: "We begin with your interests, ideas and ambitions — never a fixed syllabus.",
  },
  {
    n: "02",
    title: "Keep it practical",
    body: "Real examples, useful tools and clear actions you can take straight away.",
  },
  {
    n: "03",
    title: "Learn together",
    body: "Share ideas, ask questions and learn from each other in a relaxed room.",
  },
  {
    n: "04",
    title: "Continue the support",
    body: "Guidance, check-ins and progression support after the six core sessions.",
  },
];

/** 2×2 flow of principle cards — clean, icon-led, borderless (Neurixo-style). */
export function ApproachGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {PRINCIPLES.map((p, i) => (
        <Reveal key={p.n} delay={(i % 2) * 100}>
          <article className="flex h-full flex-col rounded-3xl bg-snow p-9 shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] transition-transform duration-300 hover:-translate-y-1 md:p-10">
            <div className="text-ink">{ICONS[i]}</div>
            <span className="mt-9 text-sm font-bold tracking-[0.15em] text-lime">
              {p.n}
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
              {p.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
