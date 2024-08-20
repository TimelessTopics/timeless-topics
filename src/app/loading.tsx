import React from 'react'
import logo from '@/../public/android-chrome-512x512.png'
import Image from 'next/image'

const loading = () => {
    return (
        <main className='h-screen flex justify-center items-center animate-pulse'>
            <Image
                src={logo}
                alt='Loading...'
                width={128}
                height={128}
            />
        </main>
    )
}

export default loading