"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updateView(slug: string, category: string, title: string) {
    try {
        let view = 0;
        const isExisting = await prisma.blog.findUnique({ where: { slug } })
        if (isExisting) {
            const updatedBlog = await prisma.blog.update({ where: { slug }, data: { view_count: { increment: 1 } } })
            view = updatedBlog.view_count

        } else {
            const newBlog = await prisma.blog.create({ data: { slug, view_count: 1, category, title } })
            view = newBlog.view_count
        }
        return view
    } catch (error) {
        console.log("Database Error...", error);
    }
}


export async function getTopPosts() {
    try {
        const data = await prisma.blog.findMany({
            take: 10,
            select: { title: true, category: true, slug: true },
            orderBy: [{
                view_count: "desc"
            }]
        })
        return data
    } catch (error) {
        console.log("Database Error...", error);
    }
}