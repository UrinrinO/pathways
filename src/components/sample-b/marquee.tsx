const WORDS = [
  "Ideas",
  "Skills",
  "Direction",
  "Opportunity",
  "Creativity",
  "Community",
];

/** Seamless scrolling word strip (Midnight). */
export function Marquee() {
  // duplicate the strip so the -50% keyframe loops seamlessly
  const strip = [...WORDS, ...WORDS];
  return (
    <section className="overflow-hidden border-y border-white/10 bg-midnight py-7">
      <div className="marquee-track">
        {strip.map((word, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-9 text-3xl font-bold tracking-tight text-snow/80 md:text-4xl"
          >
            {word}
            <span className="ml-9 text-lg text-orange">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
