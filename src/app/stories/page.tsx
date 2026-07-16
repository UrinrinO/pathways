import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { CTABand } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { sessionShots } from "@/lib/images";
import { StoriesExplorer } from "@/components/pages/stories/stories-explorer";

export const metadata: Metadata = {
  title: "Stories — Pathways",
  description:
    "The Pathways journal — documenting what participants are learning, what ideas are developing and what happens next, through articles, photography and short films.",
};

export default function Page() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <PageHero
        crumb="Stories"
        heading="Documenting what we build."
        sub="Articles, photography and short films from inside Pathways."
        cta={{ label: "Follow the journey", href: "/join" }}
        image={sessionShots[4]}
        badge="Fresh"
      />

      {/* Launch stories + interactive filterable journal */}
      <StoriesExplorer />

      {/* Stay connected CTA */}
      <CTABand
        eyebrow="Stay connected"
        heading="Follow the story as it's written."
        sub="New articles, photo sets and short films as the programme takes shape. Join the list and we'll send the ones worth your time."
        primary={{ href: "/join", label: "Join the list" }}
        secondary={{ href: "#", label: "Explore the journal" }}
      />

      <Footer />
    </main>
  );
}
