'use client'

import { updateView } from "@/lib/actions"
import { useEffect, useState } from "react"


export default function ReposrtView({ slug }: { slug: string }) {

    useEffect(() => {
        const update = async () => {
            // console.log("updating view");
            const updatedView = await updateView(slug)
            // console.log("view updated: ", updatedView);

        }
        update()
    }, [])
    return <></>
}