import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Pathways",
  description: "This page took a different pathway.",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-midnight px-6 py-20 text-center text-snow">
      {/* aurora glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-lime/25 blur-[120px]" />
        <div className="absolute -bottom-24 right-1/4 h-[26rem] w-[26rem] translate-x-1/2 rounded-full bg-orange/20 blur-[120px]" />
      </div>
      {/* dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(170,177,188,0.14) 1px, transparent 1.6px)",
          backgroundSize: "9px 9px",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 50% 42%, #000, transparent 72%)",
          maskImage: "radial-gradient(120% 120% at 50% 42%, #000, transparent 72%)",
        }}
      />

      <div className="relative">
        <p className="mb-6 flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] text-lime">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          Lost the thread
        </p>

        <h1 className="float-y select-none font-bold leading-none tracking-tight text-[clamp(6rem,26vw,22rem)]">
          4<span className="text-lime">0</span>4
        </h1>

        <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-soft-grey">
          This page took a different pathway. It may have moved, or never existed
          — either way, let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-lime-ink transition-transform hover:scale-[1.03]"
          >
            Back to home
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/programme"
            className="rounded-full border border-white/20 px-7 py-4 text-[15px] font-semibold text-snow transition-colors hover:bg-white/10"
          >
            Explore the programme
          </Link>
        </div>
      </div>
    </main>
  );
}
