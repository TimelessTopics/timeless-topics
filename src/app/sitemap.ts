import { baseUrl, CATEGORIES } from "@/lib/constants";
import { getBlogPosts } from "./blog/utils";
import { MetadataRoute } from "next";
import { slugify } from "@/lib/utils";

export default async function sitemap() {
    // Implement sitemap generation logic here
    let blogs: MetadataRoute.Sitemap = getBlogPosts().map((blog) => ({
        url: `${baseUrl}/blog/${slugify(blog.metadata.category)}/${blog.slug}`,
        lastModified: blog.metadata.publishedAt,
        priority: 0.8,
        changeFrequency: "monthly",
    }))

    let categories: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
        url: `${baseUrl}${category.href}`,
        lastModified: new Date(),
        priority: 0.5,
        changeFrequency: "yearly",
    }))

    // Add any other routes to sitemap here
    //add home
    //add about
    //add contact
    //add privacy policy
    //add terms and conditions
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