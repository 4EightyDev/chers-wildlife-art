import { wixClient } from "@/lib/wixClient";
import ArtworkDetailClient from "./ArtworkDetailClient";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  try {
    // Querying the confirmed ID: Import1
    const result = await wixClient.items.query("Import1").eq("_id", id).find();

    if (!result.items || result.items.length === 0 || !result.items[0].data) {
      return notFound();
    }

    const d = result.items[0].data;

    const getUrl = (ref: any) => {
      if (!ref || typeof ref !== "string" || !ref.includes("wix:image"))
        return null;
      return `https://static.wixstatic.com/media/${ref.replace("wix:image://v1/", "").split("/")[0]}`;
    };

    const artwork = {
      _id: result.items[0]._id,
      title: d.title,
      subject: d.subject,
      description: d.description,
      fieldNotes: d.fieldNotes,
      witnessBadge: d.witnessBadge,
      status: d.status,
      image: getUrl(d.image),
      inSituImage: getUrl(d.inSituImage) || getUrl(d.image),
      originalMedium: d.originalMedium,
      originalDimensions: d.originalDimensions,
      editionsMedium: d.editionsMedium,
      editionsDimensions: d.editionsDimensions,
    };

    return <ArtworkDetailClient artwork={artwork} />;
  } catch (e) {
    return notFound();
  }
}
