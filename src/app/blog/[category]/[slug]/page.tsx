import React from 'react'
import { CustomMDX } from '@/components/MDX'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import { Breadcrumb } from '@/components/Breadcrumb'
import ReportView from '@/components/ReportView'
import BackButton from '@/components/BackButton'
import { baseUrl, siteConfig } from '@/lib/constants'
import { BlogPosting, WithContext } from 'schema-dts'
import { getAllPost, getAllPostsSlug, getPostsByCategory, getPostsBySlug, updateView } from '@/lib/actions'
import { getAllHeadings, getMDXData, slugify } from '@/lib/utils'
import NestedAccordion from '@/components/NestedAccordion'
import { PostCard } from '@/components/PostCard'
import { notFound } from 'next/navigation'


export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = await getPostsBySlug(params.slug)
    if (!post) {
        return
    }
    let ogImage = `${siteConfig.url}/og?title=${encodeURIComponent(post?.title)}`
    let keywords = post.keywords ? post.keywords?.split(",") : []
    return {
        title: post?.title,
        keywords,
        description: post?.title,
        canonical: `${siteConfig.url}/blog/${post?.categorySlug}/${post?.slug}`,
        openGraph: {
            title: post.title,
            description: post.title,
            type: "article",
            publishedTime: post.createdAt.toISOString(),
            url: `${siteConfig.url}/blog/${post.categorySlug}/${post.slug}`,
            images: [
                {
                    url: ogImage
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.title,
            images: [ogImage]
        }
    }
}


export async function generateStaticParams() {
    const posts = await getAllPostsSlug() || []

    return posts.map((post) => ({
        slug: post.slug
    }))
}


const page = async ({ params }: { params: { slug: string } }) => {
    // let post = getBlogPosts().find((post) => params.slug === post.slug)
    // if (!post) {
    //     return <h1>Post Not Found</h1>
    // }

    const data = await getPostsBySlug(slugify(params.slug))
    if (!data) {
        notFound()
    }

    const post = getMDXData([data])[0]


    const jsonLd: WithContext<BlogPosting> = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.metadata.title,
        image: `${baseUrl}/og?title=${params.slug}`,
        datePublished: post.metadata.publishedAt,
        dateModified: post.metadata.publishedAt,
        author: {
            '@type': 'Person',
            name: "Abdus Samad"
        },
        description: post.metadata.summary,
        url: `${baseUrl}/blog/${slugify(post.metadata.category)}/${post.slug}`
    }

    const allHeadings = getAllHeadings(post.content)
    const relatedPostsData = await getPostsByCategory(data.categorySlug, 2) || []
    const relatedPosts = getMDXData(relatedPostsData.filter((relatedPost) => relatedPost.slug !== data.slug))
    return (
        <div className='pb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ReportView slug={post.slug} />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <div className='space-y-6'>
                        <Breadcrumb category={post.metadata.category} title={post.metadata.title} />
                        <h2 className='font-bold text-xl capitalize'>{post.metadata.title}</h2>
                        <BackButton />
                        <p className='text-muted-foreground'>{post.metadata.publishedAt}</p>
                    </div>
                </Container>
            </div>
            <Container className=''>
                <article className='prose'>
                    <CustomMDX source={post.content} />
                </article>
                <div className='mt-10 grid-cols-1 grid md:grid-cols-2 gap-y-10 gap-x-8'>
                    {
                        allHeadings.length > 0 &&
                        <div className='space-y-4'>
                            <h2 className='font-bold text-xl'>Table of Contents</h2>
                            <NestedAccordion tocData={allHeadings} />
                        </div>
                    }
                    <div>
                        <h2 className='font-bold text-xl '>Related Posts</h2>
                        <div className='flex flex-col gap-6 pt-4 items-center justify-center'>
                            {
                                relatedPosts.map((p, index) => (
                                    <PostCard key={index + p.slug} category={p.metadata.category} slug={p.slug} summary={p.metadata.summary} title={p.metadata.title} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default page