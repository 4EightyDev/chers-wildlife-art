"use client";

import Hero from "@/components/sections/Hero";
import CollectionsPreview from "@/components/sections/CollectionsPreview";
import ArtistMission from "@/components/sections/ArtistMission";
import ConciergeTeaser from "@/components/sections/ConciergeTeaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <CollectionsPreview />
      <ArtistMission />
      <ConciergeTeaser />
    </main>
  );
}
