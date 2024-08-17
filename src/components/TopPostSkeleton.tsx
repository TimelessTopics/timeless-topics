import { Skeleton } from "@/components/ui/skeleton"

export default function TopPostSkeleton() {
    return (
        <div className='space-y-6 sm:sticky sm:top-10'>
            <h2 className='font-semibold'>Popular Posts</h2>
            <div className='space-y-3'>
                {
                    Array.from({ length: 8 }).map((_, i) => (
                        <Skeleton key={i} className="h-5 w-full " />
                    ))
                }
            </div>
        </div>
    )
}
