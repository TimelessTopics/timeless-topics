'use client'
import { fetchUrl } from '@/lib/utils'
import React, { useEffect } from 'react'

const ReportView = ({ category, slug, title }: { slug: string, category: string, title: string }) => {
    useEffect(() => {
        const postData = async () => {
            try {
                await fetch(fetchUrl, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ slug, category, title })
                })
            } catch (error) {
                console.log("Something went wrong", error)
            }
        }
        postData()
    }, [])

    return (
        <>
        </>
    )
}

export default ReportView