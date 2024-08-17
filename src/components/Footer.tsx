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
                    <div className='flex justify-between flex-col gap-y-4 '>
                        <Link href={'/'} className='  relative w-32 h-16 group'>
                            <Icon.logo className='size-10  transition-all  absolute group-hover:translate-x-[200%] ' />
                            <span className='font-bold capitalize absolute bottom-0'>{siteConfig.name}</span>
                        </Link>
                        <p className='text-pretty'>
                            The {siteConfig.name} is dedicated to sharing valuable knowledge and inspiring a culture of continuous learning. Our mission is to explore new ideas, provide insightful content, and foster personal and professional growth. Join us as we delve into diverse topics and learn together, one blog at a time.
                        </p>
                    </div>
                    <div className='space-y-6'>
                        <h5 className='font-semibold '>
                            Blog
                        </h5>
                        <div className='flex flex-col text-sm text-muted-foreground gap-y-2'>
                            {
                                CATEGORIES.map((category) => (
                                    <Link key={category.href} href={category.href} className='hover:underline w-fit'>
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

                            <Link href={'/about'} className='hover:underline w-fit'>
                                About
                            </Link>
                            <Link href={'/mailto:samadmalik04@gmail.com'} rel='external' className='hover:underline w-fit'>
                                Contact
                            </Link>
                            <Link href={'/terms-and-conditions'} rel='external' className='hover:underline w-fit'>
                                Terms and Conditions
                            </Link>

                        </div>
                    </div>
                </footer>
                <div className='pt-5 flex sm:flex-row flex-col justify-center gap-5 items-center'>
                    <div>
                        <p className='text-sm text-gray-500 flex-wrap'>
                            &copy; {new Date().getFullYear()} <Link href={"/"}>{siteConfig.name}</Link>. All rights reserved.
                        </p>
                    </div>
                    <div>
                        <Link href={"/sitemap.xml"} className='text-muted-foreground hover:text-primary transition-all'>Sitemap</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer