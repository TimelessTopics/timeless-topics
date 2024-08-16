import React from 'react'
import TopCategories from './TopCategories'
import TopPosts from './TopPosts'
import { Blog } from '@prisma/client'

const RightContent = ({ posts }: { posts: Blog[] }) => {
    return (
        <div className='space-y-10 sm:min-h-screen '>
            <TopCategories />
            <TopPosts posts={posts} />
        </div>
    )
}

export default RightContent