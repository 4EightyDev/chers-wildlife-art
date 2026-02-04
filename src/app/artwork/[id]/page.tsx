import { wixClient } from "@/lib/wixClient";
import ArtworkDetailClient from "./ArtworkDetailClient";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const { items } = await wixClient.items
      .query("Artworks")
      .eq("_id", id)
      .or(wixClient.items.query("Artworks").eq("id", id)) // Checks both Wix ID and your imported ID
      .find();

    if (!items || items.length === 0 || !items[0].data) return notFound();

    const data = items[0].data;

    // Image helper for both main and In-Situ images
    const getWixUrl = (imageRef: any) => {
      const src = typeof imageRef === "string" ? imageRef : imageRef?.src;
      return src
        ? `https://static.wixstatic.com/media/${src.replace("wix:image://v1/", "").split("/")[0]}`
        : null;
    };

    const artwork = {
      _id: items[0]._id,
      title: data.title,
      subject: data.subject || data.Subject,
      description: data["d."] || data.description,
      fieldNotes: data["F."] || data.fieldNotes,
      witnessBadge: data["W"] || data.witnessBadge,
      status: data.status || data.Status,
      collectionId: data.CollectionID || data.collectionId,
      image: getWixUrl(data.image),
      inSituImage: getWixUrl(data.InSituImage || data.insituimage),
      // Handling nested specs from your CSV
      originalMedium: data.OriginalMedium,
      originalDimensions: data.OriginalDimensions,
      editionsMedium: data.EditionsMedium,
      editionsDimensions: data.EditionsDimensions,
    };

    return <ArtworkDetailClient artwork={artwork} />;
  } catch (error) {
    console.error("Detail Fetch Error:", error);
    return notFound();
  }
}
