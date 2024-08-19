
import { CATEGORIES } from '@/lib/constants'
import { Button } from '../ui/button'
import Link from 'next/link'

const TopCategories = () => {
    return (
        <div className='space-y-6'>
            <h2 className='font-semibold'>Top Categories</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {
                    CATEGORIES.slice(0, 6).map((category) => (
                        <Button key={category.title} asChild variant={"outline"} className='text-sm hover:scale-110 transition-all hover:bg-transparent'>
                            <Link title={category.title} href={`${category.href}`} className='text-xs '>
                                {category.title}
                            </Link>
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

export default TopCategories