import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/sample-b/ui";
import { Splashes } from "@/components/sample-a/splashes";
import { SessionsShowcase } from "@/components/sample-b/sessions-showcase";

/**
 * Six collaborative sessions — neurixo-style hover preview on a dark base.
 * Hover a session to crossfade its landscape shot and swap the caption below.
 */
export function Sessions() {
  return (
    <section className="relative overflow-hidden bg-midnight">
      <Splashes variant="a" />

      {/* dark-side glow blobs for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-lime/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange/10 blur-[120px]" />
      </div>

      <Container className="relative py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <Eyebrow>The sessions</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-snow md:text-5xl">
            Six collaborative sessions.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-soft-grey">
            Monthly, discussion-led and hands-on — you learn alongside other
            young people, not in rows of desks. Hover a session to look inside.
          </p>
        </Reveal>

        <SessionsShowcase />
      </Container>
    </section>
  );
}
