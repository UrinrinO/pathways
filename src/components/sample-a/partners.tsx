import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { PartnersCarousel } from "@/components/sample-a/partners-carousel";
import { ScrollFade } from "@/components/sample-a/scroll-fade";

/** Partners — horizontal hover-reveal carousel that fades in/out on scroll. */
export function Partners() {
  return (
    <section className="relative bg-paper">
      <Splashes variant="d" />

      <Container className="relative py-24 md:py-32">
        <ScrollFade>
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <Eyebrow>Who backs Pathways</Eyebrow>
              <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
                Built with trusted partners.
              </h2>
            </div>
            <p className="max-w-xs text-ink-soft md:mt-16">
              Pathways is delivered and supported by organisations who believe
              young people deserve clearer routes into technology.
            </p>
          </div>

          <PartnersCarousel />
        </ScrollFade>
      </Container>
    </section>
  );
}
