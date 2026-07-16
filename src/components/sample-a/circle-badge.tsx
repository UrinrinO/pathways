/** Rotating circular text badge with a small stacked mark in the centre. */
export function CircleBadge() {
  const label = "PATHWAYS · CREATIVE TECH HUB · CARDIFF · SINCE 2026 · ";
  return (
    <div className="relative h-40 w-40 shrink-0 md:h-48 md:w-48">
      <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink" style={{ fontSize: "12.5px", letterSpacing: "2px" }}>
          <textPath href="#badge-circle" startOffset="0">
            {label + label}
          </textPath>
        </text>
      </svg>

      {/* centre mark — stacked ellipses */}
      <div className="absolute inset-0 grid place-items-center">
        <svg width="46" height="40" viewBox="0 0 46 40" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-ink">
          <ellipse cx="23" cy="12" rx="16" ry="7" />
          <ellipse cx="23" cy="20" rx="16" ry="7" />
          <ellipse cx="23" cy="28" rx="16" ry="7" />
        </svg>
      </div>
    </div>
  );
}
