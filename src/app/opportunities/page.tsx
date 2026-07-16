import type { Metadata } from "next";
import { Nav } from "@/components/sample-a/nav";
import { Footer } from "@/components/sample-a/footer";
import { CTABand } from "@/components/pages/shared/blocks";
import { PageHero } from "@/components/pages/shared/page-hero";
import { galleryImages } from "@/lib/images";
import { OpportunitiesExplorer } from "@/components/pages/opportunities/opportunities-explorer";

export const metadata: Metadata = {
  title: "Opportunities — Pathways",
  description:
    "Carefully selected opportunities across technology, digital work, creativity and enterprise — relevant, accessible and worth your time.",
};

export default function Page() {
  return (
    <main className="bg-paper">
      <Nav />

      {/* Hero */}
      <PageHero
        crumb="Opportunities"
        heading="Opportunities worth your time."
        sub="Jobs, grants, training and more — selected for young creatives in Cardiff."
        cta={{ label: "Join the list", href: "/join" }}
        image={galleryImages[1]}
        badge="Live soon"
      />

      {/* Interactive explorer — feature pick, filterable grid, capture + submit */}
      <OpportunitiesExplorer />

      {/* Closing CTA band */}
      <CTABand
        eyebrow="Never miss out"
        heading="Never miss the right opportunity."
        sub="Join the list and we'll email you when new opportunities go live — starting the moment Pathways launches."
        primary={{ href: "/join", label: "Get opportunity updates" }}
        secondary={{ href: "#", label: "Submit an opportunity" }}
      />

      <Footer />
    </main>
  );
}
