import { wixClient } from "@/lib/wixClient";
import ArchiveClient from "@/app/archive/ArchiveClient";

export default async function ArchivePage() {
  try {
    // 1. Fetch from 'Artworks' collection
    const response = await wixClient.items.query("Artworks").limit(100).find();

    // 2. Map Wix's auto-generated field keys to your clean UI
    const artworks = response.items
      .filter((item) => item && item.data)
      .map((item) => {
        const d = item.data;

        // Wix Image Helper
        const rawImage = typeof d.image === "string" ? d.image : d.image?.src;
        const imageUrl = rawImage
          ? `https://static.wixstatic.com/media/${rawImage.replace("wix:image://v1/", "").split("/")[0]}`
          : null;

        return {
          _id: item._id,
          title: d.title || "Untitled",
          subject: d.subject || d.Subject || "Wildlife Study",
          collectionId: d.CollectionID || "legacy",
          // These match the keys (d., F., W) from your CMS screenshot
          description: d["d."] || d.description || "",
          fieldNotes: d["F."] || d.fieldNotes || "",
          witnessBadge: d["W"] || d.witnessBadge || "Original Reference",
          status: d.status || d.Status || "Available",
          image: imageUrl,
        };
      });

    return <ArchiveClient initialArtworks={artworks} />;
  } catch (error: any) {
    console.error("Wix Fetch Error:", error);

    // If it's still a 403, we show a helpful instruction
    if (
      error.message?.includes("403") ||
      error.details?.applicationError?.code === 403
    ) {
      return (
        <div className="pt-40 px-10 text-center">
          <h2 className="text-xl font-serif mb-4">API Activation Required</h2>
          <p className="text-sm text-foreground/60 max-w-md mx-auto leading-relaxed">
            Wix is returning a 403 Forbidden error. This usually means you need
            to click
            <strong className="text-accent"> "Publish" </strong>
            inside the Wix Studio Editor once to activate the Headless API for
            this project.
          </p>
        </div>
      );
    }
    return <div className="pt-40 text-center">Error loading gallery.</div>;
  }
}
