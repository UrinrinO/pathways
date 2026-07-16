import { galleryImages } from "@/lib/images";

/** Silhouette marks (swap for real photography / logos later). */
const MARKS = [
  // Organisation — people cluster
  <svg key="o" width="50" height="50" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <circle cx="23" cy="21" r="9" />
    <circle cx="43" cy="23" r="7" />
    <path d="M7 52c0-9 7-16 16-16s16 7 16 16z" />
    <path d="M37 52c.5-7 4-13 9-14 6 0 11 6 11 14z" opacity="0.85" />
  </svg>,
  // Facilitators — guiding hand / spark
  <svg key="f" width="50" height="50" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <circle cx="32" cy="18" r="9" />
    <path d="M14 54c0-11 8-19 18-19s18 8 18 19z" />
    <path d="M32 3l2.4 5.4L40 11l-5.6 2.6L32 19l-2.4-5.4L24 11l5.6-2.6z" opacity="0.85" />
  </svg>,
  // Participant reps — raised voice / person + arrow
  <svg key="p" width="50" height="50" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <circle cx="26" cy="22" r="9" />
    <path d="M10 54c0-9 7-16 16-16s16 7 16 16z" />
    <path d="M46 10v14M39 17l7-7 7 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const COLUMNS = [
  {
    n: 0,
    title: "Youth4Change Wales",
    desc: "The lead organisation delivering Pathways across Cardiff.",
    img: galleryImages[0],
  },
  {
    n: 1,
    title: "Facilitators & mentors",
    desc: "Experienced people guiding every session, check-in and next step.",
    img: galleryImages[1],
  },
  {
    n: 2,
    title: "Participant reps",
    desc: "Young people helping shape how Pathways is built and run.",
    img: galleryImages[2],
  },
];

/**
 * Who leads Pathways — minimal uniform columns (ported from partners-carousel):
 * on hover a photo fades and scales in behind a midnight overlay and the text
 * flips white.
 */
export function LeadsColumns() {
  return (
    <>
      <div className="mt-12 grid divide-y divide-line overflow-hidden rounded-3xl bg-snow shadow-[0_18px_50px_-30px_rgba(14,18,24,0.3)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {COLUMNS.map((c) => (
          <div
            key={c.title}
            className="group relative flex min-h-[300px] flex-col items-center px-8 py-12 text-center"
          >
            {/* photo — hidden until hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.title}
                className="h-full w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-midnight/75" />
            </div>

            {/* content */}
            <div className="relative z-10 flex flex-1 flex-col items-center">
              <div className="text-ink transition-colors duration-500 group-hover:text-snow">
                {MARKS[c.n]}
              </div>
              <h3 className="mt-7 max-w-[16ch] text-xl font-bold leading-snug tracking-tight text-ink transition-colors duration-500 group-hover:text-snow">
                {c.title}
              </h3>
              <p className="mt-3 max-w-[28ch] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-snow/80">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-ink-mute">
        Team profiles coming soon.
      </p>
    </>
  );
}
