'use client'

import { updateView } from "@/lib/actions"
import { useEffect, useState } from "react"

// import { fetchUrl } from '@/lib/utils'
// import React, { useEffect } from 'react'

// const ReportView = ({ category, slug, title }: { slug: string, category: string, title: string }) => {
//     useEffect(() => {
//         const postData = async () => {
//             try {
//                 await fetch(fetchUrl, {
//                     method: "POST",
//                     headers: {
//                         "Content-type": "application/json"
//                     },
//                     body: JSON.stringify({ slug, category, title })
//                 })
//             } catch (error) {
//                 
//             }
//         }
//         postData()
//     }, [])

//     return (
//         <>
//         </>
//     )
// }

// export default ReportView


export default function ReposrtView({ category, slug, title }: { slug: string, category: string, title: string }) {
    const [view, setView] = useState(0)

    useEffect(() => {
        const update = async () => {
            const updatedView = await updateView(slug, category, title)
            setView(updatedView || 0)

        }
        update()
    }, [])
    return <></>
}