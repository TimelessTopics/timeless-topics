import { formateDate, getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import React from 'react'

const LatestPost = () => {
    let latestPosts = getBlogPosts().slice(0, 8)
    return (
        <div className='space-y-10'>
            <h1 className='text-3xl tracking-tight'>Recently Published</h1>
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
                                <Link className='font-bold hover:text-blue-500' href={`/blog/${post.metadata.category}/${post.slug}`}>{post.metadata.title}</Link>
                                <p className=''>{post.metadata.summary}</p>
                                <p className='text-muted-foreground'>{formateDate(post.metadata.publishedAt, true)}</p>
                            </article>
                        ))
                }
            </div>
            <div>

                <Link href={'/blog'} className='hover:underline transition-all hover:text-blue-400'>
                    Show More
                </Link>
            </div>
        </div>
    )
}

export default LatestPost