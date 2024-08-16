import { getBlogPosts } from '@/app/blog/utils'
import Link from 'next/link'
import React from 'react'
import { Icon } from '../Icon'

const TopPosts = () => {
    return (
        <div className='space-y-6'>
            <h2 className='font-semibold'>Popular Posts</h2>
            <div className='space-y-3'>
                {
                    getBlogPosts().slice(0, 3).map((post) => (
                        <Link key={post.slug} href={`/blog/${post.metadata.category}/${post.slug}`}
                            className='flex gap-3 items-center group'
                        >
                            <Icon.arrowRight className='size-5 group-hover:translate-x-2 transition-all' />
                            <span>{post.metadata.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TopPosts