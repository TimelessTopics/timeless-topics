import React from 'react'
import TopCategories from './TopCategories'
import TopPosts from './TopPosts'

const RightContent = () => {
    return (
        <div className='space-y-10 sm:min-h-screen '>
            <TopCategories />
            <TopPosts />
        </div>
    )
}

export default RightContent