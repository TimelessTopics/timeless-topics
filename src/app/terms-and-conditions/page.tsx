import BackButton from '@/components/BackButton'
import Container from '@/components/Container'
import { CustomMDX } from '@/components/MDX'
import { CustomNavigationMenu } from '@/components/NavigationMenu'
import React from 'react'
import { readMDXfiles } from '../blog/utils'
import path from 'path'



const page = () => {
    const { content } = readMDXfiles(path.join(process.cwd(), "src", "app", "terms-and-conditions", "terms-and-conditions.mdx"))
    return (
        <div className='mb-10'>
            <div className='bg-gray-100 dark:bg-gray-800 pb-8 mb-10'>
                <Container>
                    <CustomNavigationMenu />
                    <h1 className='font-bold text-xl capitalize mb-2'>Terms And Conditions</h1>
                    <BackButton />
                </Container>
            </div>
            <Container>
                <div className='prose'>

                    <CustomMDX source={content} />
                </div>
            </Container>
        </div>
    )
}

export default page