import OgElement from "@/components/OgElement"
import { ImageResponse } from "next/og"
export async function GET(req: Request) {
    const url = new URL(req.url)

    let title = url.searchParams.get("title") || "Daily Mini Blog"
    try {
        return new ImageResponse(<OgElement title={title} />, {
            width: 1200,
            height: 630,
        })
    } catch (error) {
        return new Response("Failed to create OG Image", { status: 500 });

    }

}