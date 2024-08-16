import Link from 'next/link'
import React from 'react'
import { Icon } from './Icon'
import Container from './Container'
import { CATEGORIES, siteConfig } from '@/lib/constants'

const Footer = () => {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 py-10'>
            <Container>
                <footer className='grid grid-cols-1 gap-y-10 sm:grid-cols-3'>
                    <div className=''>
                        <Link href={'/'}>
                            <Icon.logo className='size-10' />
                            <span className='font-bold capitalize '>{siteConfig.name}</span>
                        </Link>
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
            </Container>
        </div>
    )
}

export default Footer