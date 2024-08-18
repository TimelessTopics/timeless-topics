import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const Container = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn('max-w-screen-lg mx-auto px-10 sm:px-20',
            className
        )}>
            {children}
        </div>
    )
}

export default Container