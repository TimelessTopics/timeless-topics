"use server"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { MaxPostsPerPage } from "./constants";

// export async function updateView(slug: string, category: string, title: string) {
//     try {
//         let view = 0;
//         const isExisting = await prisma.blog.findUnique({ where: { slug } })
//         if (isExisting) {
//             const updatedBlog = await prisma.blog.update({ where: { slug }, data: { view_count: { increment: 1 } } })
//             view = updatedBlog.view_count

//         } else {
//             const newBlog = await prisma.blog.create({ data: { slug, view_count: 1, category, title } })
//             view = newBlog.view_count
//         }
//         return view
//     } catch (error) {

//     }
// }

export async function updateView(slug: string) {
    try {
        const update = await prisma.testBlog.update({
            where: { slug },
            data: { view_count: { increment: 1 } }
        })

        return update.view_count
    } catch (error) {
        console.log("error", error);

    }
}


// export async function getTopPosts() {
//     try {
//         const data = await prisma.blog.findMany({
//             take: 10,
//             select: { title: true, category: true, slug: true },
//             orderBy: [{
//                 view_count: "desc"
//             }]
//         })
//         return data
//     } catch (error) {

//     }
// }

export async function getTopPosts() {
    try {
        const data = await prisma.testBlog.findMany({
            take: 8,
            orderBy: { view_count: "desc" },
            select: { title: true, category: true, slug: true }
        })
        return data
    } catch (error) {

    }
}


// export async function addBlog(formdata: FormData) {
//     const content = formdata.get("content") as string
//     try {
//         const newContent = await prisma.testBlog.create({
//             data: { content }
//         })
//         console.log("created");

//     } catch (error) {
//         console.log("error", error);

//     }
// }


export async function getLatestBlogs() {
    try {
        const latestBlogs = prisma.testBlog.findMany({
            take: 8,
            orderBy: {
                createdAt: "desc"
            }
        })
        return latestBlogs
    } catch (error) {
        console.log("error", error);
    }
}

export async function getAllPost(page = 1, max?: number) {
    try {

        const allPosts = await prisma.testBlog.findMany({
            skip: (page - 1) * (max || MaxPostsPerPage),
            take: max,
            orderBy: [{
                createdAt: "desc"
            }]
        })
        return allPosts
    } catch (error) {
        console.log("error", error);
    }
}

export async function getAllPostsSlugAndCategory() {
    try {
        const posts = await prisma.testBlog.findMany({ select: { slug: true, categorySlug: true } })

        return posts
    } catch (error) {
        console.log("error", error);

    }
}

export async function getTotalPostsCount() {
    try {
        const totalPosts = await prisma.testBlog.count()
        return totalPosts
    } catch (error) {
        console.log("error", error);

    }
}

export async function getPostsByCategory(category: string, limit?: number, skip = 0) {
    console.log(category);

    try {
        const data = await prisma.testBlog.findMany({
            where: {
                categorySlug: {
                    equals: category, mode: "insensitive"
                }
            },
            take: limit,
            skip: skip * (limit || 1)
        })
        return data
    } catch (error) {

    }
}

export async function getPostsBySlug(slug: string) {
    console.log(slug);

    try {
        const data = await prisma.testBlog.findUnique({
            where: { slug }
        })
        return data
    } catch (error) {
        console.log(error);

    }
}