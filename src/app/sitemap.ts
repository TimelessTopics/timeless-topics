import { baseUrl, CATEGORIES } from "@/lib/constants";
import { MetadataRoute } from "next";
import { getAllPost } from "@/lib/actions";

export default async function sitemap() {
    // Implement sitemap generation logic here
    const allBlogs = await getAllPost() || []
    let blogs: MetadataRoute.Sitemap = allBlogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.categorySlug}/${blog.slug}`,
        lastModified: blog.updatedAt.toISOString(),
        priority: 0.8,
        changeFrequency: "monthly",
    }))

    let categories: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
        url: `${baseUrl}${category.href}`,
        lastModified: new Date(),
        priority: 0.5,
        changeFrequency: "yearly",
    }))

    const others: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            priority: 1,
            changeFrequency: "weekly",
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            priority: 0.5,
            changeFrequency: "yearly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            priority: 0.5,
            changeFrequency: "monthly",
            lastModified: "2024-08-17",
        },
        {
            url: `${baseUrl}/blog`,
            priority: 0.5,
            changeFrequency: "weekly",
            lastModified: new Date(),
        },
    ]


    return [...others, ...blogs, ...categories]
}