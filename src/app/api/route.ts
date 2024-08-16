import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
    try {
        const data = await prisma.blog.findMany({
            take: 10,
            select: { title: true, category: true, slug: true },
            orderBy: [{
                view_count: "desc"
            }]
        })

        return NextResponse.json(data)
    } catch (error) {
        console.log("Database Error...", error);
        return NextResponse.json({ message: "Operation failed" }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const { slug, title, category } = await req.json()
    try {
        const existingPost = await prisma.blog.findUnique({ where: { slug } })

        if (existingPost) {
            await prisma.blog.update({
                where: { slug },
                data: { view_count: { increment: 1 } }
            })
        } else {
            await prisma.blog.create({
                data: {
                    slug,
                    title,
                    category,
                    view_count: 1
                }
            })
        }
        return NextResponse.json({ message: "Operation done" }, { status: 200 })
    } catch (error) {
        console.log("Database Error...", error);
        return NextResponse.json({ message: "Operation failed" }, { status: 500 })
    }
}