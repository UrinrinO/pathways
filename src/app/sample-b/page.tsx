import type { Metadata } from "next";
import { philosophyImages } from "@/lib/images";
import { PhilosophyParallax } from "@/components/shared/philosophy-parallax";

import { SiteNav } from "@/components/sample-b/site-nav";
import { Hero } from "@/components/sample-b/hero";
import { Marquee } from "@/components/sample-b/marquee";
import { Services } from "@/components/sample-b/services";
import { Journey } from "@/components/sample-b/journey";
import { Sessions } from "@/components/sample-b/sessions";
import { Stats } from "@/components/sample-b/stats";
import { Partners } from "@/components/sample-b/partners";
import { CTA } from "@/components/sample-b/cta";
import { SiteFooter } from "@/components/sample-b/site-footer";

export const metadata: Metadata = {
  title: "Pathways — dark sample",
  description:
    "Sample B: a bold dark Midnight homepage for Pathways, the Cardiff creative tech hub for young people aged 16–25.",
};

export default function SampleBPage() {
  return (
    <main className="bg-midnight text-snow">
      <SiteNav />
      <Hero />
      <Marquee />
      <Services />
      <PhilosophyParallax
        theme="dark"
        eyebrow="Our philosophy"
        heading="Not a normal"
        italicWord="classroom."
        body="Pathways is built around collaboration — a space to test ideas, ask questions and learn by doing, with people who have made the moves you want to make."
        points={[
          "Practical, discussion-led sessions",
          "Mentors and facilitators",
          "Space to test ideas",
          "Support after the sessions",
        ]}
        images={philosophyImages}
      />
      <Journey />
      <Sessions />
      <Stats />
      <Partners />
      <CTA />
      <SiteFooter />
    </main>
  );
}
