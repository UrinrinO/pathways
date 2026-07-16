import { Reveal } from "@/components/reveal";
import { Button } from "@/components/sample-b/ui";

export function FinalCta() {
  return (
    <section className="px-6 pb-10 md:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-pine px-6 py-24 text-center text-pine-ink md:py-32">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-lime/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-clay/25 blur-[110px]" />

          <p className="relative mb-6 flex items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-lime">
            <span className="inline-block h-1 w-1 rounded-full bg-lime" />
            Launching August 2026
          </p>
          <h2 className="font-display relative mx-auto max-w-3xl text-5xl leading-[1.0] md:text-7xl">
            Your next move could{" "}
            <span className="italic text-lime">start here.</span>
          </h2>
          <p className="relative mx-auto mt-7 max-w-xl text-lg leading-relaxed text-pine-ink/75">
            Whether you’re exploring tech for the first time or sharpening
            existing experience, Pathways gives you the space, guidance and
            community to move forward.
          </p>
          <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#" variant="lime" arrow>
              Register Your Interest
            </Button>
            <Button
              href="#"
              className="border border-pine-ink/25 text-pine-ink hover:bg-pine-ink hover:text-pine"
            >
              Refer a Young Person
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
