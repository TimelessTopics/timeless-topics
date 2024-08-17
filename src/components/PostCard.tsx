import * as React from "react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { minimizeString } from "@/lib/utils"



export function PostCard({ slug, summary, title, category }: { title: string, summary: string, slug: string, category: string }) {
    return (
        <Link title={title} href={`/blog/${category}/${slug}`} className="group ">
            <Card className=" h-52 group-hover:scale-105 transition-all" >
                <CardHeader className="h-full">
                    <CardTitle>{minimizeString(title, 40)}</CardTitle>
                    <CardDescription className=" h-full flex justify-center items-center">{minimizeString(summary, 200)}</CardDescription>
                </CardHeader>

            </Card>
        </Link>
    )
}
