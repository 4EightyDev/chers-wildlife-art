import { wixClient } from "@/lib/wixClient";
import ArchiveClient from "./ArchiveClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArchivePage() {
  try {
    // 1. Fetch from the confirmed collection: Import1
    const response = await wixClient.items.query("Import1").limit(100).find();

    if (!response.items || response.items.length === 0) {
      console.error("Wix: Import1 returned 0 items.");
      return (
        <div className="pt-40 text-center font-mono text-[10px] uppercase text-red-600">
          Connected to 'Import1' but 0 items returned. <br />
          Check Wix CMS permissions or Sync status.
        </div>
      );
    }

    // Debugging: Log the first item's keys to see what we are working with
    if (response.items.length > 0) {
      console.log("--- DEBUG: First Item Structure ---");
      console.log(JSON.stringify(response.items[0], null, 2));
    }

    // 2. Map directly from the flat item structure
    const artworks = response.items.map((item: any) => {
      // Wix stores images as strings or objects. We handle both safely.
      const rawImage = item.image;
      let imageUrl = null;

      const src = typeof rawImage === "string" ? rawImage : rawImage?.src;

      if (src && src.includes("wix:image")) {
        imageUrl = `https://static.wixstatic.com/media/${src.replace("wix:image://v1/", "").split("/")[0]}`;
      }

      // Generate slug from title
      const title = item.title || "Untitled Masterwork";
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric chars with hyphens
        .replace(/(^-|-$)+/g, ""); // Remove leading/trailing hyphens

      return {
        _id: item._id,
        title: title,
        slug: slug,
        subject: item.subject || "",
        collectionId: String(item.collectionId || "avian").toLowerCase(),
        status: item.status || "Visible",
        image: imageUrl,
      };
    });

    return <ArchiveClient initialArtworks={artworks} />;
  } catch (error: any) {
    return (
      <div className="pt-40 text-center font-mono text-[10px] uppercase text-red-600 p-20">
        <h1 className="text-xl mb-4">Wix API Error</h1>
        <p className="bg-white p-4 inline-block text-black">{error.message}</p>
        <p className="mt-4 text-gray-400">
          If it says 'does not exist', ensure 'Import1' is Synced to Live.
        </p>
      </div>
    );
  }
}
