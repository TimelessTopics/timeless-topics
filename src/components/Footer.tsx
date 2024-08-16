import Link from 'next/link'
import React from 'react'
import { Icon } from './Icon'
import Container from './Container'
import { CATEGORIES, siteConfig } from '@/lib/constants'

const Footer = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 py-10'>
            <Container>
                <footer className='grid grid-cols-1 gap-y-10 sm:grid-cols-3 gap-x-5'>
                    <div className='flex justify-between flex-col gap-y-4'>
                        <Link href={'/'}>
                            <Icon.logo className='size-10' />
                            <span className='font-bold capitalize '>{siteConfig.name}</span>
                        </Link>
                        <p>
                            The {siteConfig.name} is dedicated to sharing knowledge and inspiring continuous learning.
                            Join us in exploring new ideas and growing together.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        <h5 className='font-semibold '>
                            Blog
                        </h5>
                        <div className='flex flex-col text-sm text-muted-foreground gap-y-2'>
                            {
                                CATEGORIES.map((category) => (
                                    <Link key={category.href} href={category.href} className='hover:underline '>
                                        {category.title}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className='space-y-6'>
                        <h5 className='font-semibold '>
                            Links
                        </h5>
                        <div className='flex flex-col text-sm text-muted-foreground gap-y-2'>

                            <Link href={'/about'} className='hover:underline '>
                                About
                            </Link>
                            <Link href={'/mailto:samadmalik04@gmail.com'} rel='external' className='hover:underline '>
                                Contact
                            </Link>
                            <Link href={'/terms-and-conditions'} rel='external' className='hover:underline '>
                                Terms and Conditions
                            </Link>

                        </div>
                    </div>
                </footer>
                <div className='pt-5 flex justify-center gap-5 items-center'>
                    <p className='text-sm text-gray-500 flex-wrap'>
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <Link href={"/sitemap.xml"} className='text-muted-foreground hover:text-primary transition-all'>Sitemap</Link>
                </div>
            </Container>
        </div>
    )
}

export default Footer