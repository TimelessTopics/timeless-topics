"use server"

import { prisma } from "@/lib/prisma"

export async function postView(slug: string, category: string, title: string) {
    try {
        const isExistingPost = await prisma.blog.findUnique({ where: { slug } })
        if (isExistingPost) {
            const updatedPost = await prisma.blog.update({
                where: { slug },
                data: {
                    view_count: { increment: 1 }
                }
            })
            console.log(updatedPost);

        } else {
            const newPost = await prisma.blog.create({
                data: {
                    slug,
                    category,
                    title,
                    view_count: 1
                }
            })
            console.log(newPost);
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