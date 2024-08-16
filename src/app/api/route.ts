import { prisma } from "@/lib/prisma"
export async function GET() {
    try {
        const data = await prisma.blog.findMany({
            take: 10,
            select: { title: true, category: true, slug: true },
            orderBy: [{
                view_count: "desc"
            }]
        })

        return Response.json(data)
    } catch (error) {
        console.log("Database Error...", error);
        throw new Error("Failed to fetch popular posts")
    }
}

export async function POST(req: Request) {
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
        return new Response("Operation done successfully", { status: 200 })
    } catch (error) {
        console.log("Database Error...", error);
        return new Response("Operation failed", { status: 500 })
    }
}