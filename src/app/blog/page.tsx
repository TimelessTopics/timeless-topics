import React from 'react'
import { slugify } from '@/lib/utils'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { PostCard } from '@/components/PostCard'
import { getBlogPosts } from './utils'
import BackButton from '@/components/BackButton'

const page = () => {
    const allPosts = getBlogPosts()
    if (allPosts.length < 1) {
        return notFound()
    }
    return (
        <div className='min-h-screen pb-10'>
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h1 className='font-bold text-xl capitalize mb-2'>{"All Blogs"} posts</h1>
                    <BackButton />
                </Container>
            </div>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {allPosts.map((post) => (
                        <article key={post.slug} className=''>
                            <PostCard category={post.metadata.category} slug={post.slug} summary={post.metadata.summary} title={post.metadata.title} />
                        </article>
                    ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default page