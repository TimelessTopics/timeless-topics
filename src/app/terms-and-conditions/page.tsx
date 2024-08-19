import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import React from 'react'
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
                    <div className='space-y-3'>
                        <p>
                            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Daily Mini Blog&apos; relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
                        </p>

                        <h2>1. Use of the Website</h2>
                        <ul>
                            <li>
                                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                            </li>
                            <li>
                                This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.
                            </li>
                        </ul>

                        <h2>2. Intellectual Property</h2>
                        <ul>
                            <li>
                                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited except in accordance with the copyright notice, which forms part of these terms and conditions.
                            </li>
                        </ul>

                        <h2>3. Limitation of Liability</h2>
                        <ul>
                            <li>
                                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
                            </li>
                        </ul>

                        <h2>4. Governing Law</h2>
                        <ul>
                            <li>
                                Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
                            </li>
                        </ul>

                        <h2>5. Changes to the Terms</h2>
                        <ul>
                            <li>
                                We reserve the right to change these terms and conditions at any time without prior notice. Your continued use of the website following any changes will indicate your acceptance of those changes.
                            </li>
                        </ul>

                        <blockquote className='bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote'>
                            <h3>Note</h3>
                            <p>
                                Please review these terms regularly to ensure you are aware of any changes.
                            </p>
                        </blockquote>

                        <h2>6. Contact Information</h2>
                        <ul>
                            <li>
                                If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:samadmalik04@gmail.com">samadmalik04@gmail.com</a>.
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page