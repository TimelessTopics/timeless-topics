import React from 'react'
import { getBlogPosts } from '../../utils'
import { CustomMDX } from '@/components/MDX'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import { Breadcrumb } from '@/components/Breadcrumb'
import ReportView from '@/components/ReportView'
import { postView } from '@/actions'
import BackButton from '@/components/BackButton'


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
    await postView(post.slug, post.metadata.category, post.metadata.title)
    return (
        <div className='pb-10'>
            {/* <ReportView category={post.metadata.category} slug={post.slug} title={post.metadata.title} /> */}
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>

                    <CustomNavigationMenu />
                    <div className='space-y-6'>

                        <Breadcrumb category={post.metadata.category} title={post.metadata.title} />
                        <h1 className='font-bold text-xl capitalize'>{post.metadata.title} posts</h1>
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