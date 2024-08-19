'use client'
import React from 'react'
import { Button } from './ui/button'
import { Icon } from './Icon'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MaxPostsPerPage } from '@/lib/constants'

const Pagination = ({ total, current }: { total: number, current: number }) => {
    const pathname = usePathname()
    const { replace } = useRouter()
    const itemsPerPage = MaxPostsPerPage
    const totalPages = Math.ceil(total / itemsPerPage)
    const handleNext = () => {
        const page = Math.min(current + 1, totalPages)
        replace(`${pathname}?page=${page}`)
    }

    const handPrev = () => {
        const page = Math.max(current - 1, 1)
        replace(`${pathname}?page=${page}`)
    }
    return (

        <div className='flex justify-center gap-4 items-center mt-10'>
            <Button
                disabled={
                    current === 1
                }
                onClick={handPrev}
                type='button' variant={"outline"}>
                <Icon.arrowLeft className='size-6' />
            </Button>
            <Button
                disabled={
                    totalPages === current
                }
                onClick={handleNext}
                variant={"outline"} type='button'>
                <Icon.arrowRight className='size-6' />
            </Button>
        </div>
    )
}

export default Pagination