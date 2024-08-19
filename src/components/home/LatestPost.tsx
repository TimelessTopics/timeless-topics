import { formateDate, getBlogPosts } from '@/app/blog/utils'
import { slugify } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const LatestPost = () => {
    let latestPosts = getBlogPosts().slice(0, 8)
    return (
        <div className='space-y-10'>
            <h2 className='text-3xl tracking-tight'>Recently Published</h2>
            <div className='space-y-10'>
                {
                    latestPosts.sort((a, b) => {
                        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
                            return -1
                        }
                        return 1
                    })
                        .map((post) => (
                            <article key={post.slug} className='space-y-6 transition-all'>
                                <h3>
                                    <Link title={post.metadata.title || "Latest Post"} className='font-bold hover:text-blue-500' href={`/blog/${slugify(post.metadata.category)}/${post.slug}`}>{post.metadata.title}</Link>
                                </h3>
                                <p className='pl-2'>{post.metadata.summary}</p>
                                <p className='text-muted-foreground'>{formateDate(post.metadata.publishedAt, true)}</p>
                            </article>
                        ))
                }
            </div>
            <div className='pb-10'>
                <Link title={"Show All Posts"} prefetch href={'/blog'} className='hover:underline underline underline-offset-4 transition-all hover:text-blue-400'>
                    Show All Posts
                </Link>
            </div>
        </div>
    )
}

export default LatestPost