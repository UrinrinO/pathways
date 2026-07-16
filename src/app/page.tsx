import type { Metadata } from "next";
import { philosophyImages } from "@/lib/images";
import { PhilosophyParallax } from "@/components/shared/philosophy-parallax";
import { Nav } from "@/components/sample-a/nav";
import { Hero } from "@/components/sample-a/hero";
import { Trust } from "@/components/sample-a/trust";
import { Services } from "@/components/sample-a/services";
import { Process } from "@/components/sample-a/process";
import { Stats } from "@/components/sample-a/stats";
import { Sessions } from "@/components/sample-a/sessions";
import { Partners } from "@/components/sample-a/partners";
import { CTA } from "@/components/sample-a/cta";
import { Footer } from "@/components/sample-a/footer";

export const metadata: Metadata = {
  title: "Pathways — Creativity linked to tech",
  description:
    "Pathways is a creative tech hub for young people aged 16–25 in Cardiff. Turn ideas, interests and existing skills into clearer direction, stronger digital knowledge and real opportunities.",
};

export default function Home() {
  return (
    <main className="bg-snow">
      <Nav />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Stats />
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
      <Sessions />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
