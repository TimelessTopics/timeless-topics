"use client"

import React from 'react'
import { Button } from './ui/button'
import { Icon } from './Icon'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const { back } = useRouter()
    const handleBack = () => {
        back()
    }
    return (
        <Button type='button' onClick={handleBack} asChild variant={"outline"} className='border border-primary group cursor-pointer' size={'sm'}>
            <div className='flex gap-2'>
                <Icon.arrowLeft className='size-5 group-hover:-translate-x-2 transition-all' />
                <span>Back</span>
            </div>
        </Button>
    )
}

export default BackButton