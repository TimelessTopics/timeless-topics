import React from 'react'
import { getBlogPosts } from '../utils'
import { slugify } from '@/lib/utils'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { PostCard } from '@/components/PostCard'
import { baseUrl, CATEGORIES, siteConfig } from '@/lib/constants'
import BackButton from '@/components/BackButton'
import { WithContext, Blog } from 'schema-dts'



export function generateMetadata({ params }: { params: { category: string } }) {
    const categoryObject = CATEGORIES.find((c) => c.href.includes(params.category))
    if (!categoryObject) {
        return
    }

    return {
        title: categoryObject?.title,
        description: categoryObject?.description,
        canonical: `${siteConfig.url}/blog/${params.category}`,
        openGraph: {
            type: "website",
            url: siteConfig.url,
            title: categoryObject?.title,
            description: categoryObject?.description,
            images: [
                {
                    url: `${siteConfig.url}/og?title=${encodeURIComponent(categoryObject?.title)}`
                }
            ]
        }
    }
}

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        category: slugify(category.title)
    }))
}

const page = ({ params }: { params: { category: string } }) => {
    const jsonLd: WithContext<Blog> = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: params.category,
        url: `${baseUrl}/blog/${params.category}`,
        description: `All Blogs about ${params.category}`,
        author: {
            '@type': 'Person',
            name: "Abdus Samad"
        },
        image: `${baseUrl}/og?title=${params.category}`
    }
    const filteredPosts = getBlogPosts()
        .filter((post) => slugify(post.metadata.category) === slugify(params.category))
    // if (filteredPosts.length < 1) {
    //     return notFound()
    // }

    const category = CATEGORIES.find((c) => slugify(c.title) === params.category)
    if (!category) {
        return notFound()
    }
    return (
        <div className='min-h-screen pb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h2 className='font-bold text-xl capitalize mb-2'>{filteredPosts?.[0]?.metadata?.category || category.title}</h2>
                    <BackButton />

                </Container>
            </div>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {filteredPosts.map((post) => (
                        <article key={post.slug} className=''>
                            <PostCard category={post.metadata.category} slug={post.slug} summary={post.metadata.summary} title={post.metadata.title} />
                        </article>
                    ))
                    }
                    {
                        filteredPosts.length === 0 && (
                            <div className='text-center'>No posts found for this category.</div>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}

export default page