"use client";

import { useRef } from "react";
import { useElementProgress, Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/reveal";

type Img = { src: string; caption?: string };

type Props = {
  theme?: "dark" | "light";
  eyebrow: string;
  heading: string;
  italicWord?: string;
  body: string;
  points?: string[];
  images: Img[];
  videoSrc?: string;
};

/**
 * "Our Philosophy" — Oralic-style. The real video scroll-scales up (parallax
 * transition) as it centres, then a row of 3 parallax images reveals below.
 */
export function PhilosophyParallax({
  theme = "dark",
  eyebrow,
  heading,
  italicWord,
  body,
  points = [],
  images,
  videoSrc = "/philosophy.mp4",
}: Props) {
  const videoWrap = useRef<HTMLDivElement>(null);
  const p = useElementProgress(videoWrap);
  const t = Math.min(1, p / 0.72); // full by 72% of travel
  const scale = (0.84 + 0.16 * t).toFixed(3);
  const radius = Math.round(40 - 30 * t);

  const dark = theme === "dark";
  const sectionBg = dark ? "bg-pine text-pine-ink" : "bg-paper text-ink";
  const eyebrowClr = dark ? "text-lime" : "text-clay";
  const bodyClr = dark ? "text-pine-ink/75" : "text-ink-soft";
  const capClr = dark ? "text-pine-ink/60" : "text-ink-mute";
  const chipBg = dark ? "bg-pine/55 text-pine-ink" : "bg-ink/70 text-paper";

  return (
    <section className={sectionBg}>
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Statement */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p
            className={`mb-5 flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[0.22em] ${eyebrowClr}`}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
            {eyebrow}
          </p>
          <h2 className="font-display text-5xl leading-[1.03] md:text-7xl">
            {heading}{" "}
            {italicWord && <span className="italic text-lime">{italicWord}</span>}
          </h2>
          <p className={`mx-auto mt-7 max-w-xl text-lg leading-relaxed ${bodyClr}`}>
            {body}
          </p>
        </Reveal>

        {/* The film — scroll-scales into view */}
        <div ref={videoWrap} className="mt-14 md:mt-20">
          <div
            style={{
              transform: `scale(${scale})`,
              borderRadius: `${radius}px`,
              transformOrigin: "center",
            }}
            className="group relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden shadow-2xl ring-1 ring-black/10 transition-[border-radius] duration-100 will-change-transform"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {/* legibility vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div
              className={`absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs backdrop-blur ${chipBg}`}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              Inside the hub · Cardiff, 2026
            </div>
          </div>
        </div>

        {/* Points */}
        {points.length > 0 && (
          <Reveal className="mx-auto mt-16 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4">
            {points.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2.5 text-sm md:text-base"
              >
                <span
                  aria-hidden
                  className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-lime-ink"
                >
                  ✓
                </span>
                {item}
              </span>
            ))}
          </Reveal>
        )}

        {/* 3 parallax images */}
        <div className="mt-20 grid gap-5 sm:grid-cols-3">
          {images.slice(0, 3).map((img, i) => (
            <Reveal key={img.src} delay={i * 120}>
              <Parallax speed={i === 1 ? 110 : 60}>
                <figure className={i === 1 ? "sm:-mt-8" : "sm:mt-4"}>
                  <div className="group overflow-hidden rounded-3xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.caption ?? "Pathways"}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className={`mt-3 px-1 text-sm ${capClr}`}>
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              </Parallax>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
