import React from 'react'
import { getBlogPosts } from '../../utils'
import { CustomMDX } from '@/components/MDX'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import { Breadcrumb } from '@/components/Breadcrumb'
import ReportView from '@/components/ReportView'
import BackButton from '@/components/BackButton'
import { baseUrl, siteConfig } from '@/lib/constants'
import { BlogPosting, WithContext } from 'schema-dts'
import { updateView } from '@/lib/actions'


export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug)
    if (!post) {
        return
    }
    let ogImage = `${siteConfig.url}/og?title=${encodeURIComponent(post?.metadata.title)}`

    return {
        title: post?.metadata.title,
        description: post?.metadata.summary,
        canonical: `${siteConfig.url}/blog/${post?.metadata.category}/${post?.slug}`,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.summary,
            type: "article",
            publishedTime: post.metadata.publishedAt,
            url: `${siteConfig.url}/blog/${post.metadata.category}/${post.slug}`,
            images: [
                {
                    url: ogImage
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: post.metadata.title,
            description: post.metadata.summary,
            images: [ogImage]
        }
    }
}


export async function generateStaticParams() {
    const posts = getBlogPosts()
    return posts.map((post) => ({
        slug: post.slug
    }))
}


const page = async ({ params }: { params: { slug: string } }) => {
    let post = getBlogPosts().find((post) => params.slug === post.slug)
    if (!post) {
        return <h1>Post Not Found</h1>
    }
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
        url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`
    }

    await updateView(post.slug, post.metadata.category, post.metadata.title)
    return (
        <div className='pb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* <ReportView category={post.metadata.category} slug={post.slug} title={post.metadata.title} /> */}
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>

                    <CustomNavigationMenu />
                    <div className='space-y-6'>

                        <Breadcrumb category={post.metadata.category} title={post.metadata.title} />
                        <h1 className='font-bold text-xl capitalize'>{post.metadata.title}</h1>
                        <BackButton />
                        <p className='text-muted-foreground'>{post.metadata.publishedAt}</p>
                    </div>
                </Container>
            </div>
            <Container>
                <article className='prose'>
                    <CustomMDX source={post.content} />
                </article>
            </Container>
        </div>
    )
}

export default page