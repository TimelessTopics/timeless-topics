"use client"
import Link from 'next/link'
import { Icon } from '../Icon'
import { slugify } from '@/lib/utils'
import { getTopPosts } from '@/lib/actions'
import { useEffect, useState } from 'react'
import TopPostSkeleton from '../TopPostSkeleton'

type DataT = {
    title: string;
    slug: string;
    category: string;
}[]
const TopPosts = () => {
    const [data, setData] = useState<DataT | undefined>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchTopPosts = async () => {
            setIsLoading(true)
            const topPosts = await getTopPosts()
            setData(topPosts)
            setIsLoading(false)
        }
        fetchTopPosts()
    }, [])

    if (isLoading) return <TopPostSkeleton />
    return (
        <div className='space-y-6 sm:sticky sm:top-10'>
            <h2 className='font-semibold'>Popular Posts</h2>
            <div className='space-y-3'>
                {
                    data &&
                    data?.map((post) => (
                        <Link title={post.title} key={post.slug} href={`/blog/${slugify(post.category)}/${post.slug}`}
                            className='flex gap-3 items-center group w-fit'
                        >
                            <div>
                                <Icon.arrowRight className='size-5  group-hover:translate-x-2 transition-all' />
                            </div>
                            <h3 className='break-words'>{post.title}</h3>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TopPosts