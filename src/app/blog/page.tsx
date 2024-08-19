import { CustomNavigationMenu } from '@/components/NavigationMenu'
import Container from '@/components/Container'
import { notFound } from 'next/navigation'
import { PostCard } from '@/components/PostCard'
import BackButton from '@/components/BackButton'
import { Metadata } from 'next'
import { WebPage, WithContext } from 'schema-dts'
import { baseUrl, MaxPostsPerPage } from '@/lib/constants'
import { getAllPost, getTotalPostsCount } from '@/lib/actions'
import { getMDXData } from '@/lib/utils'
import Pagination from '@/components/Pagination'



export const metadata: Metadata = {
    title: "All of the blog post ",
    description: "All the blogs posts are here you can choose as your desire"
}



const page = async ({ searchParams }: { searchParams?: { page?: string } }) => {

    const jsonLd: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: `${baseUrl}/blog`,
        name: "All Blog Page",
        description: 'All the blogs posts are here you can choose as your desire',
        inLanguage: 'en-US',
        potentialAction: {
            '@type': 'ChooseAction',
        },
    }


    const page = searchParams?.page ? Number(searchParams.page) : 1
    const data = await getAllPost(page, MaxPostsPerPage)
    if (!data) return notFound()

    const total = await getTotalPostsCount()
    const allPosts = getMDXData(data)

    return (
        <div className='min-h-screen pb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h2 className='font-bold text-xl capitalize mb-2'>{"All Blogs"} posts</h2>
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
                <Pagination total={total || 0} current={page} />
            </Container>
        </div>
    )
}

export default page