import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomMDX } from '@/components/MDX'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import React from 'react'
import { readMDXfiles } from '../blog/utils'
import path from 'path'
import { AboutPage, WithContext } from 'schema-dts'
import { baseUrl } from '@/lib/constants'



const page = () => {

    const jsonLd: WithContext<AboutPage> = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        headline: 'About Us',
        datePublished: '2024-08-017',
        dateModified: '2024-08-017',
        author: {
            '@type': 'Person',
            name: 'Abdus Samad',
        },
        description: 'This is the About Page page.',
        image: {
            '@type': 'ImageObject',
            url: `${baseUrl}/og`,
            caption: 'Image caption.',
        },
    }



    const { content } = readMDXfiles(path.join(process.cwd(), "src", "app", "about", "about.mdx"))
    return (
        <div className='mb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h1 className='font-bold text-xl capitalize mb-2'>About</h1>
                    <BackButton />
                </Container>
            </div>
            <Container>
                <div className='prose'>

                    <CustomMDX source={content} />
                </div>
            </Container>
        </div>
    )
}

export default page