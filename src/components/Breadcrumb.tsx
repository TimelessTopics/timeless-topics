import { Slash } from "lucide-react"

import {
    Breadcrumb as BreadCrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { slugify } from "@/lib/utils"
import Link from "next/link"

export function Breadcrumb({ category, title }: { category: string, title: string }) {
    return (
        <BreadCrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href="/" title={"Home"}>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <Link title={category} className="capitalize" href={`/blog/${slugify(category)}`}>{category}</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage className="capitalize">{title}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </BreadCrumb>
    )
}
