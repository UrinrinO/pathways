import type { ReactNode } from "react";

/**
 * Cinematic film surface — a living aurora that reads as a premium looping
 * video until real footage lands.
 *
 * ↓ DROP REAL FOOTAGE HERE ↓  Replace <AuroraStage /> below with:
 *   <video className="absolute inset-0 h-full w-full object-cover"
 *          autoPlay muted loop playsInline poster="/philosophy-poster.jpg">
 *     <source src="/philosophy.mp4" type="video/mp4" />
 *   </video>
 * Everything else (rounding, vignette, play button, caption) stays.
 */
export function Film({
  caption,
  play = false,
  className = "",
  children,
}: {
  caption?: string;
  play?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] ring-1 ring-ink/10 ${className}`}
    >
      <AuroraStage />

      {/* film grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#000 0 1px,transparent 1px 3px)",
        }}
      />
      {/* vignette for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pine/70 via-transparent to-transparent" />

      {play && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-lime text-lime-ink shadow-2xl transition-transform duration-300 group-hover:scale-110">
            {/* pulsing ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-lime/40" />
            <svg width="20" height="22" viewBox="0 0 22 24" fill="currentColor" aria-hidden>
              <path d="M21 10.27a2 2 0 0 1 0 3.46L3 23.6A2 2 0 0 1 0 21.86V2.14A2 2 0 0 1 3 .4l18 9.87Z" />
            </svg>
          </span>
        </div>
      )}

      {caption && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-pine/55 px-3.5 py-1.5 text-xs text-pine-ink backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
          {caption}
        </div>
      )}

      {children}
    </div>
  );
}

function AuroraStage() {
  return (
    <div className="film-stage absolute inset-0">
      <span className="aurora-blob aurora-a" />
      <span className="aurora-blob aurora-b" />
      <span className="aurora-blob aurora-c" />
      <span className="aurora-blob aurora-d" />
    </div>
  );
}
