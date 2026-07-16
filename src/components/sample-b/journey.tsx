import { journey } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-b/ui";
import { Splashes } from "@/components/sample-a/splashes";

/** Numbered process (Midnight): Discover → Build → Position → Progress. */
export function Journey() {
  return (
    <section className="relative bg-midnight">
      <Splashes variant="c" />
      <Container className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>The journey</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
            How the programme moves you forward.
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {journey.map((stage, i) => (
            <Reveal
              key={stage.n}
              as="li"
              delay={i * 90}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-lime text-base font-bold text-snow shadow-[0_0_18px_-2px_rgba(140,224,30,0.4)]">
                  {stage.n}
                </span>
                {i < journey.length - 1 && (
                  <span className="hidden h-px flex-1 bg-white/10 lg:block" />
                )}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-snow">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-soft-grey">
                {stage.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
