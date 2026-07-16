import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Film } from "@/components/film";

/**
 * "Our Philosophy" — the emotional centrepiece (à la Oralic).
 * A deep pine-green block wrapped around a large, living film that scales
 * into view as you scroll to it.
 */
export function Philosophy() {
  return (
    <section className="bg-pine text-pine-ink">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Statement */}
          <Reveal>
            <Eyebrow tone="pine">Our philosophy</Eyebrow>
            <h2 className="font-display text-5xl leading-[1.02] md:text-6xl">
              Not a normal <span className="italic text-lime">classroom.</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-pine-ink/75">
              No rows of desks. No long lectures. Young people sit together,
              share ideas, ask questions and learn from people working across
              technology, creativity and enterprise.
            </p>

            <ul className="mt-9 space-y-3.5">
              {[
                "Practical, discussion-led sessions",
                "Mentors and experienced facilitators",
                "Space to test and develop ideas",
                "Support that continues after the sessions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-pine-ink/90"
                >
                  <span
                    aria-hidden
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-lime-ink"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* The film — scales + fades in for a cinematic transition */}
          <Reveal delay={120} className="film-reveal">
            <Film
              play
              caption="Inside the hub · Cardiff, 2026"
              className="aspect-[4/3] ring-pine-ink/15 md:aspect-[16/11]"
            >
              <span className="absolute right-4 top-4 rounded-full bg-lime-ink/40 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-lime">
                Silent loop · placeholder
              </span>
            </Film>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
