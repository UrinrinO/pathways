import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-a/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { SessionsShowcase } from "@/components/sample-a/sessions-showcase";

/**
 * Six collaborative sessions — hover a session to swap the preview image and
 * its caption (neurixo-style), over on-brand colour splashes.
 */
export function Sessions() {
  return (
    <section className="relative bg-paper">
      <Splashes variant="a" />

      <Container className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>The sessions</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl">
            Six collaborative sessions.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Monthly, discussion-led and hands-on — you learn alongside other
            young people, not in rows of desks. Hover a session to look inside.
          </p>
        </Reveal>

        <SessionsShowcase />
      </Container>
    </section>
  );
}
