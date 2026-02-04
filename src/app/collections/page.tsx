import { wixClient } from "@/lib/wixClient";
import CollectionsClient from "./CollectionsClient";

export const dynamic = "force-dynamic";

export default async function CollectionsPage() {
  try {
    // 1. Fetch collections from Wix
    const response = await wixClient.items
      .query("Collections")
      .limit(50)
      .find();

    // 2. Map data
    const collections = response.items.map((item: any) => {
      // Handle image extraction (Wix stores as object or string)
      // Note: CSV import often creates '_fld' keys
      const rawImage = item.image || item.image_fld;
      let imageUrl = "";

      const src = typeof rawImage === "string" ? rawImage : rawImage?.src;
      if (src && src.includes("wix:image")) {
        imageUrl = `https://static.wixstatic.com/media/${src.replace("wix:image://v1/", "").split("/")[0]}`;
      } else if (src) {
        imageUrl = src;
      }

      const title = item.title || item.title_fld || "Untitled Collection";
      const description = item.description || item.description_fld || "";

      // Ensure slug exists or generate it
      let slug = item.slug;
      if (!slug) {
        slug = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "");
      }

      // Construct link (if not explicitly provided in CMS)
      const link = item.link || `/collections/${slug}`;

      return {
        _id: item._id,
        title: title,
        eyebrow: item.eyebrow || "Collection",
        description: description,
        featuredImage: imageUrl,
        type: item.type ? item.type.toLowerCase() : "series",
        link: link,
        offset: item.offset || "",
        slug: slug,
      };
    });

    // 3. Separate into Major Series vs Archive
    const majorSeries = collections.filter((c: any) => c.type === "series");
    const archiveSeries = collections.filter((c: any) => c.type === "archive");

    return (
      <CollectionsClient
        majorSeries={majorSeries}
        archiveSeries={archiveSeries}
      />
    );
  } catch (error) {
    console.error("Failed to fetch collections:", error);
    return (
      <div className="pt-40 text-center font-mono text-sm text-red-500">
        Error loading collections. Please try refresh.
      </div>
    );
  }
}
