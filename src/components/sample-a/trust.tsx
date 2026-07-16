import { partners } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/sample-a/ui";

/** Quiet trust strip: "In partnership with" + partner names. */
export function Trust() {
  return (
    <section className="border-y border-line/70 bg-snow">
      <Container className="py-10">
        <Reveal className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
            In partnership with
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {partners.map((p) => (
              <li
                key={p.name}
                className="text-sm font-medium text-ink-soft md:text-base"
              >
                {p.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
