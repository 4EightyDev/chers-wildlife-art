import { wixClient } from "@/lib/wixClient";
import ArtworkDetailClient from "./ArtworkDetailClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  try {
    // 1. Fetch ALL items to perform slug matching in memory
    // (Since we don't have a 'slug' field in the CMS yet)
    const result = await wixClient.items.query("Import1").limit(100).find();

    if (!result.items || result.items.length === 0) {
      return notFound();
    }

    // 2. Find the item that matches the requested slug (or ID)
    let d = result.items.find((item: any) => {
      const title = item.title || "Untitled Masterwork";
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

      return slug === id || item._id === id;
    });

    // Fallback: If no slug matched, check if it's a direct ID query
    if (!d) {
      return notFound();
    }

    const getUrl = (ref: any) => {
      const src = typeof ref === "string" ? ref : ref?.src;
      if (!src || !src.includes("wix:image")) return null;
      return `https://static.wixstatic.com/media/${src.replace("wix:image://v1/", "").split("/")[0]}`;
    };

    const artwork = {
      _id: d._id,
      title: d.title || "Untitled Masterwork",
      subject: d.subject || "",
      description: d.description || "",
      fieldNotes: d.fieldNotes || "",
      witnessBadge: d.witnessBadge || "",
      status: d.status || "Available",
      image: getUrl(d.image),
      inSituImage: getUrl(d.inSituImage) || getUrl(d.image),
      originalMedium: d.originalMedium || "",
      originalDimensions: d.originalDimensions || "",
      editionMedium: d.editionsMedium || "",
      editionDimensions: d.editionsDimensions || "",
    };

    return <ArtworkDetailClient artwork={artwork} />;
  } catch (e) {
    return notFound();
  }
}
