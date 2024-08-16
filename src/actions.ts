"use server"

import { prisma } from "@/lib/prisma"

export async function postView(slug: string, category: string, title: string) {
    try {
        const isExistingPost = await prisma.blog.findUnique({ where: { slug } })
        if (isExistingPost) {
            await prisma.blog.update({
                where: { slug },
                data: {
                    view_count: { increment: 1 }
                }
            })
        } else {
            await prisma.blog.create({
                data: {
                    slug,
                    category,
                    title,
                    view_count: 1
                }
            })
        }
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

export async function topPosts() {
    try {
        const topPosts = await prisma.blog.findMany({
            take: 8,
            orderBy: [
                { view_count: "desc" }
            ]
        })
        return topPosts
    } catch (error) {

    }
}