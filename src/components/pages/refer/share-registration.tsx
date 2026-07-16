"use client";

import { useState } from "react";

/**
 * A small "share the registration link" card with copy-to-clipboard, for the
 * secondary block on /refer — for young people who'd rather register themselves.
 */
export function ShareRegistration() {
  const [copied, setCopied] = useState(false);
  const path = "/join";

  const copy = async () => {
    const url =
      typeof window !== "undefined" ? `${window.location.origin}${path}` : path;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-snow p-3 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0 text-ink-mute"
        >
          <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
        </svg>
        <span className="truncate font-mono text-sm text-ink">
          pathways.wales/join
        </span>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-live="polite"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-snow transition-colors hover:bg-carbon"
      >
        {copied ? (
          <>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-lime"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Copied
          </>
        ) : (
          "Copy link"
        )}
      </button>
    </div>
  );
}
