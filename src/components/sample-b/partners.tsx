import { Container, Eyebrow } from "@/components/sample-b/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { PartnersColumns } from "@/components/sample-b/partners-columns";
import { ScrollFade } from "@/components/sample-a/scroll-fade";

/** Partners — minimal columns that reveal a photo on hover, over a dark base. */
export function Partners() {
  return (
    <section className="relative overflow-hidden bg-midnight">
      <Splashes variant="d" />

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-orange/10 blur-[120px]" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />
      </div>

      <Container className="relative py-24 md:py-32">
        <ScrollFade>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <Eyebrow>Who backs Pathways</Eyebrow>
              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-6xl">
                Built with trusted partners.
              </h2>
            </div>
            <p className="max-w-xs text-soft-grey md:mt-16">
              Pathways is delivered and supported by organisations who believe
              young people deserve clearer routes into technology.
            </p>
          </div>

          <PartnersColumns />
        </ScrollFade>
      </Container>
    </section>
  );
}
