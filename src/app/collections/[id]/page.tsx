import { wixClient } from "@/lib/wixClient";
import { notFound } from "next/navigation";
import CollectionDetailClient from "./CollectionDetailClient";

export const dynamic = "force-dynamic";

export default async function CollectionDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;

  try {
    // 1. Fetch Collection Info (to get Title, Description, etc.)
    const collectionResponse = await wixClient.items
      .query("Collections")
      .eq("slug", id)
      .limit(1)
      .find();

    const collectionItem = collectionResponse.items[0];

    // If collection doesn't exist in CMS yet, fallback or 404?
    // For now, let's try to fetch artworks even if collection meta is missing,
    // or return notFound if strictly dynamic.
    if (!collectionItem) {
      // Create a fallback "Untitled" collection container so we can still see artworks?
      // Or strictly 404. Let's start with 404 for correctness.
      console.warn(`Collection not found for slug: ${id}`);
    }

    // 2. Fetch Artworks (Filter by collectionId)
    // We fetch all (limit 100) and filter in memory to match casing safely
    const artworksResponse = await wixClient.items
      .query("Import1")
      .limit(100)
      .find();

    const artworks = artworksResponse.items
      .filter((item: any) => {
        const colId = item.collectionId || "";
        return String(colId).toLowerCase() === id.toLowerCase();
      })
      .map((item: any) => {
        // Image Helper
        const rawImage = item.image || item.image_fld;
        let imageUrl = "";
        const src = typeof rawImage === "string" ? rawImage : rawImage?.src;
        if (src && src.includes("wix:image")) {
          imageUrl = `https://static.wixstatic.com/media/${src.replace("wix:image://v1/", "").split("/")[0]}`;
        } else if (src) {
          imageUrl = src;
        }

        // Slug Helper
        const title = item.title || item.title_fld || "Untitled Masterwork";
        let slug = item.slug;
        if (!slug) {
          slug = title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        }

        return {
          id: item._id, // Client component expects 'id'
          title: title,
          image: imageUrl,
          status: item.status || "Available",
          span: item.span || "lg:col-span-1",
          original: {
            dimensions: item.originalDimensions || "",
            medium: item.originalMedium || "",
          },
          slug: slug,
        };
      });

    const collectionData = {
      title: collectionItem
        ? collectionItem.title || collectionItem.title_fld
        : "Collection",
      eyebrow: collectionItem ? collectionItem.eyebrow || "Series" : "Archive",
      description: collectionItem
        ? collectionItem.description || collectionItem.description_fld
        : "",
    };

    return (
      <CollectionDetailClient collection={collectionData} artworks={artworks} />
    );
  } catch (error) {
    console.error("Failed to load collection details:", error);
    return notFound();
  }
}
