
import { getAllPost } from "@/lib/actions";
import { baseUrl, siteConfig } from "@/lib/constants";

export async function GET() {
    let allBlogs = await getAllPost() || []

    const itemsXml = allBlogs
        .sort((a, b) => {
            if (new Date(a.createdAt) > new Date(b.createdAt)) {
                return -1;
            }
            return 1;
        })
        .map(
            (post) => `<item>
  <title>${post.title}</title>
  <link>${baseUrl}/blog/${post.categorySlug}/${post.slug}</link>
  <description>${post.title || ""}</description>
  <pubDate>${new Date(post.createdAt).toUTCString()}</pubDate>
  </item>`
        )
        .join("/n");

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
        <channel>
            <title>${siteConfig.name}</title>
            <link>${baseUrl}</link>
            <description>This is my  Blog RSS feed</description>
            ${itemsXml}
        </channel>
      </rss>`;

    return new Response(rssFeed, {
        headers: {
            "Content-Type": "text/xml",
        },
    });
}
