import Container from '@/components/Container'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main className=' '>
            <Container>
                <CustomNavigationMenu />
                <div className='flex mt-10 items-center flex-col h-screen space-y-4'>
                    <h1 className='font-mono sm:text-3xl text-red-700'>404 - Page not found</h1>
                    <p className='text-muted-foreground text-sm sm:text-2xl'>This page does not exists.</p>
                    <Link href='/' className='text-blue-500 text-sm sm:text-2xl'>Go back to the home page</Link>
                </div>
            </Container>
        </main>
    )
}

export default NotFound