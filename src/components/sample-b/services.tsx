import { Container } from "@/components/sample-b/ui";
import { ScrollHighlight } from "@/components/sample-b/scroll-highlight";
import { ServicesGrid } from "@/components/sample-b/services-grid";
import { Splashes } from "@/components/sample-a/splashes";

const STATEMENT =
  "Pathways turns creative instinct into real momentum — with mentors, hands-on sessions and genuine opportunities that help young people in Cardiff build a braver, clearer next move.";

/** Scroll-highlight statement + lime CTA, then the width-accordion cards (dark). */
export function Services() {
  return (
    <section className="relative bg-panel">
      <Splashes variant="b" />
      <Container className="relative py-24 md:py-32">
        {/* Upper text — animated statement pushed to the extreme right */}
        <div className="flex justify-end">
          <div className="max-w-2xl text-right">
            <ScrollHighlight
              text={STATEMENT}
              className="text-2xl font-bold leading-[1.2] tracking-tight md:text-3xl xl:text-4xl"
            />
            <div className="mt-9 flex justify-end">
              <a
                href="#"
                className="group inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-4 text-[15px] font-semibold text-lime-ink transition-all duration-200 hover:brightness-105"
              >
                Start your Pathway
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Width-accordion cards with timer bars */}
        <ServicesGrid />
      </Container>
    </section>
  );
}
