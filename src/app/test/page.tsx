import Container from '@/components/Container'
import React from 'react'
import { prisma } from "@/lib/prisma"
import matter from 'gray-matter'
import { CustomMDX } from '@/components/MDX'

const page = async () => {
    const blogs = await prisma.testBlog.findMany({})
    const { content, data } = matter(blogs[0])

    return (
        <div className='min-h-screen'>
            <Container>
                <h1>Test Page</h1>
                <div className='prose'>
                    <CustomMDX source={content} />
                </div>
                {/* <pre>
                    {
                        JSON.stringify(data, null, 2)
                    }
                </pre> */}
            </Container>
        </div>
    )
}

export default page