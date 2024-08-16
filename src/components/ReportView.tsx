import { postView } from '@/actions'
import React from 'react'

const ReportView = async ({ category, slug, title }: { slug: string, category: string, title: string }) => {
    await postView(slug, category, title)
    return (
        <></>
    )
}

export default ReportView