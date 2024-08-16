'use client'
import { postView } from '@/actions'
import React, { useEffect } from 'react'

const ReportView = ({ category, slug, title }: { slug: string, category: string, title: string }) => {
    useEffect(() => {
        postView(slug, category, title)
    }, [])

    return (
        <></>
    )
}

export default ReportView