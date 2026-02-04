import { wixClient } from "@/lib/wixClient";
import ArchiveClient from "./ArchiveClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArchivePage() {
  try {
    // Targeting the confirmed ID: Import1
    const response = await wixClient.items.query("Import1").limit(100).find();

    if (!response.items || response.items.length === 0) {
      return (
        <div className="pt-40 text-center font-mono text-[10px] uppercase text-red-600">
          Connected to 'Import1' but 0 items returned. <br />
          Go to Wix CMS &gt; Sync Sandbox to Live.
        </div>
      );
    }

    const artworks = response.items
      .filter((item: any) => item && item.data)
      .map((item: any) => {
        const d = item.data;
        const rawImage = d.image;
        const imageUrl =
          rawImage &&
          typeof rawImage === "string" &&
          rawImage.includes("wix:image")
            ? `https://static.wixstatic.com/media/${rawImage.replace("wix:image://v1/", "").split("/")[0]}`
            : null;

        return {
          _id: item._id,
          title: d.title || "Untitled",
          subject: d.subject || "",
          collectionId: String(d.collectionId || "avian").toLowerCase(),
          status: d.status || "Visible",
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
