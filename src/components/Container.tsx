import React, { ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className='max-w-screen-lg mx-auto px-10 sm:px-20'>
            {children}
        </div>
    )
}

export default Container