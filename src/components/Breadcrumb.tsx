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

export function Breadcrumb({ category, title }: { category: string, title: string }) {
    return (
        <BreadCrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink className="capitalize" href={`/blog/${slugify(category)}`}>{category}</BreadcrumbLink>
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
