import { slugify } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import React from "react";
import { highlight } from "sugar-high";




function CreateHeading(level: number) {
    const Heading = ({ children }: any) => {
        let slug = slugify(children);

        return React.createElement(
            `h${level}`,
            {
                id: slug
            },
            [
                React.createElement("a", {
                    href: "#" + slug,
                    key: `link-${slug}`,
                    className: "anchor"
                }, "#"),
            ],
            children
        )
    }
    Heading.displayName = `Heading${level}`
    return Heading
}

function CustomLink(props: any) {
    let href = props.href;
    return (
        <Link href={href} {...props}>
            {props.children}
        </Link>
    )
}

function Code({ children, ...props }: any) {
    let codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} />

}

function Blockquote(props: any) {
    return (<blockquote className="bg-blue-200 dark:bg-blue-950 dark:bg-opacity-30 bg-opacity-30 p-4 rounded-md blockquote" {...props} />
    )
}

function Table({ data }: any) {
    let headers = data.headers.map((header: any, indx: any) => (
        <th key={indx}>{header}</th>
    ))
    let rows = data.rows.map((cell: any, cellIndex: any) => (
        <td key={cellIndex}>{cell}</td>
    ))

    return (
        <table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

let components = {
    h1: CreateHeading(1),
    h2: CreateHeading(2),
    h3: CreateHeading(3),
    h4: CreateHeading(4),
    h5: CreateHeading(5),
    h6: CreateHeading(6),
    a: CustomLink,
    code: Code,
    blockquote: Blockquote,
    Table


}

export function CustomMDX(props: any) {
    return (
        <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />
    )
}