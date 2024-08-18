import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomMDX } from '@/components/MDX'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import React from 'react'
import { readMDXfiles } from '../blog/utils'
import path from 'path'
import { WithContext, WebPage } from 'schema-dts'
import { baseUrl, siteConfig } from '@/lib/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: `Terms and Conditions page of the site ${siteConfig.name}, Know about our policies`,
}


const page = () => {

    const jsonLd: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        url: `${baseUrl}/terms-and-conditions`,
        name: "Terms And Conditions Page",
        description: 'All the terms and conditions of our website',
        author: {
            '@type': 'Person',
            name: "Abdus Samad"
        },
        keywords: ['terms and conditions', 'privacy policy', 'cookie policy'],
        datePublished: new Date('2024-08-17').toISOString(),
        dateModified: new Date('2024-08-17').toISOString(),
        copyrightYear: new Date().getFullYear(),
        inLanguage: 'en-US',
    }



    const { content } = readMDXfiles(path.join(process.cwd(), "src", "app", "terms-and-conditions", "terms-and-conditions.mdx"))
    return (
        <div className='mb-10'>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h2 className='font-bold text-xl capitalize mb-2'>Terms And Conditions</h2>
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