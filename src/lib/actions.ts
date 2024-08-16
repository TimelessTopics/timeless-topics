"use server"
import { prisma } from "@/lib/prisma"

export async function updateView(slug: string, category: string, title: string) {
    try {
        const isExisting = await prisma.blog.findUnique({ where: { slug } })
        if (isExisting) {
            await prisma.blog.update({ where: { slug }, data: { view_count: { increment: 1 } } })
        } else {
            await prisma.blog.create({ data: { slug, view_count: 1, category, title } })
        }
    } catch (error) {
        console.log("Database Error...", error);

    }
}