import Link from "next/link";
import { Container } from "@/components/sample-a/ui";

type Cta = { href: string; label: string };

/**
 * Neurixo-style dissolving bottom edge: the NEXT section's white "bites"
 * upward into the hero in pixel steps, so the hero never ends on one line.
 * WHITE_BITES are snow blocks flush with the bottom (w×h in 44px cells);
 * GREY_BLOCKS are slightly-darker accents sitting among / above them.
 */
const CELL = 44;
const WHITE_BITES: { left: string; w: number; h: number }[] = [
  { left: "0%", w: 2, h: 2 },
  { left: "7%", w: 1, h: 1 },
  { left: "13%", w: 2, h: 1 },
  { left: "21%", w: 1, h: 3 },
  { left: "28%", w: 2, h: 1 },
  { left: "37%", w: 1, h: 2 },
  { left: "45%", w: 2, h: 1 },
  { left: "52%", w: 1, h: 2 },
  { left: "60%", w: 2, h: 1 },
  { left: "68%", w: 1, h: 3 },
  { left: "76%", w: 2, h: 1 },
  { left: "85%", w: 1, h: 2 },
  { left: "91%", w: 2, h: 1 },
  { left: "97%", w: 1, h: 2 },
];
const GREY_BLOCKS: { left: string; bottom: number }[] = [
  { left: "10%", bottom: 0 },
  { left: "18%", bottom: 44 },
  { left: "33%", bottom: 0 },
  { left: "41%", bottom: 66 },
  { left: "49%", bottom: 0 },
  { left: "57%", bottom: 88 },
  { left: "65%", bottom: 0 },
  { left: "73%", bottom: 56 },
  { left: "82%", bottom: 0 },
  { left: "94%", bottom: 90 },
];
/** Lone white squares drifting higher, like dissolving pixels. */
const FLOATERS = [
  { left: "5%", bottom: 168 },
  { left: "30%", bottom: 140 },
  { left: "47%", bottom: 190 },
  { left: "63%", bottom: 150 },
  { left: "79%", bottom: 180 },
  { left: "93%", bottom: 155 },
];

function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* dashed grid — vertical + horizontal lines, fading toward the bottom */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 62%, transparent 96%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 62%, transparent 96%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, rgba(14,18,24,0.07) 0 1px, transparent 1px 64px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to bottom, #000 0 7px, transparent 7px 16px)",
            maskImage:
              "repeating-linear-gradient(to bottom, #000 0 7px, transparent 7px 16px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(14,18,24,0.07) 0 1px, transparent 1px 64px)",
            WebkitMaskImage:
              "repeating-linear-gradient(to right, #000 0 7px, transparent 7px 16px)",
            maskImage:
              "repeating-linear-gradient(to right, #000 0 7px, transparent 7px 16px)",
          }}
        />
      </div>

      {/* the next section's white biting up into the hero */}
      {WHITE_BITES.map((b, i) => (
        <span
          key={`w${i}`}
          className="absolute bottom-0 bg-snow"
          style={{ left: b.left, width: b.w * CELL, height: b.h * CELL }}
        />
      ))}
      {/* grey pixel accents among the bites */}
      {GREY_BLOCKS.map((g, i) => (
        <span
          key={`g${i}`}
          className="absolute rounded-[3px] bg-ink/[0.045]"
          style={{ left: g.left, bottom: g.bottom, width: CELL, height: CELL }}
        />
      ))}
      {/* lone white pixels drifting higher */}
      {FLOATERS.map((f, i) => (
        <span
          key={`f${i}`}
          className="absolute rounded-[3px] bg-snow"
          style={{ left: f.left, bottom: f.bottom, width: CELL, height: CELL }}
        />
      ))}
    </div>
  );
}

export function PageHero({
  crumb,
  heading,
  sub,
  cta,
  image,
  badge,
}: {
  crumb: string;
  heading: string;
  sub: string;
  cta?: Cta;
  image?: string;
  badge?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-paper">
      <HeroBackdrop />

      {/* one bold floating image (desktop) */}
      {image && (
        <div className="absolute right-[2%] top-1/2 z-10 hidden w-60 -translate-y-1/2 xl:block 2xl:right-[5%]">
          <div className="anim-bob relative rotate-3 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              aria-hidden
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          {badge && (
            <span className="anim-dance absolute -top-4 left-6 rounded-xl bg-orange px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
              {badge}
            </span>
          )}
        </div>
      )}
      {/* balancing sparkle badge (left) */}
      <div className="absolute left-[6%] top-1/2 z-10 hidden -translate-y-1/2 xl:block">
        <span className="float-y grid h-16 w-16 place-items-center rounded-full bg-snow shadow-xl ring-1 ring-black/5">
          <span className="text-2xl text-lime">✦</span>
        </span>
      </div>

      <Container className="relative z-20 py-24 text-center md:py-32">
        {/* breadcrumb pill */}
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 rounded-full bg-lime/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ring-1 ring-lime/25"
        >
          <Link href="/" className="text-ink-soft transition-colors hover:text-ink">
            Home
          </Link>
          <span aria-hidden className="text-lime">›</span>
          <span className="text-ink">{crumb}</span>
        </nav>

        <h1 className="mx-auto mt-7 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {sub}
        </p>

        {cta && (
          <div className="mt-9 flex justify-center">
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-carbon"
            >
              <span className="text-lime">✦</span>
              {cta.label}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
