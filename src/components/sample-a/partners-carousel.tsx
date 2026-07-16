import { galleryImages } from "@/lib/images";

/** Silhouette logo placeholders (swap for real partner logos later). */
const LOGOS = [
  // community / people
  <svg key="c" width="52" height="52" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <circle cx="23" cy="21" r="9" />
    <circle cx="43" cy="23" r="7" />
    <path d="M7 52c0-9 7-16 16-16s16 7 16 16z" />
    <path d="M37 52c.5-7 4-13 9-14 6 0 11 6 11 14z" opacity="0.85" />
  </svg>,
  // accelerator / rocket
  <svg key="r" width="52" height="52" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <path d="M32 3c9 7 14 17 14 29l-5 9H23l-5-9C18 20 23 10 32 3z" />
    <path d="M17 41l-9 7 3 9 10-6zM47 41l9 7-3 9-10-6z" />
    <circle cx="32" cy="55" r="3" />
  </svg>,
  // fund / heart
  <svg key="h" width="52" height="52" viewBox="0 0 64 64" fill="currentColor" aria-hidden>
    <path d="M32 55S8 40 8 23C8 14 15 8 23 8c5 0 8 3 9 6 1-3 4-6 9-6 8 0 15 6 15 15 0 17-24 32-24 32z" />
  </svg>,
];

const CARDS = [
  {
    n: 0,
    title: "Youth4Change Wales",
    desc: "The lead organisation delivering Pathways across Cardiff.",
    img: galleryImages[0],
  },
  {
    n: 1,
    title: "NatWest Accelerator",
    desc: "Mentorship, practical advice and enterprise connections.",
    img: galleryImages[1],
  },
  {
    n: 2,
    title: "National Lottery Community Fund",
    desc: "Funding the first twelve months of Pathways.",
    img: galleryImages[2],
  },
];

const Arrow = (
  <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M1 10V6h17M14 2l4 4-4 4" />
  </svg>
);

/** Partners — minimal columns; the photo fades in on hover. */
export function PartnersCarousel() {
  return (
    <div className="mt-16 grid divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {CARDS.map((card) => (
        <div
          key={card.title}
          className="group relative flex min-h-[300px] flex-col items-center px-8 py-12 text-center"
        >
          {/* photo — hidden until hover */}
          <div className="pointer-events-none absolute inset-2 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.img}
              alt={card.title}
              className="h-full w-full scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-midnight/75" />
          </div>

          {/* content */}
          <div className="relative z-10 flex flex-1 flex-col items-center">
            <div className="text-ink transition-colors duration-500 group-hover:text-snow">
              {LOGOS[card.n]}
            </div>
            <h3 className="mt-7 max-w-[16ch] text-xl font-bold leading-snug tracking-tight text-ink transition-colors duration-500 group-hover:text-snow">
              {card.title}
            </h3>
            <p className="mt-3 max-w-[26ch] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-snow/80">
              {card.desc}
            </p>
            <a
              href="/partners"
              className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-ink transition-colors duration-500 group-hover:text-snow"
            >
              {Arrow}
              Explore more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
