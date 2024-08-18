"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CATEGORIES, siteConfig } from "@/lib/constants"
import { Icon } from "@/components/Icon"
import { ModeToggle } from "./ModeToggle"



export function CustomNavigationMenu() {
    return (
        <div className="flex  items-center gap-y-5  justify-between flex-wrap py-10">
            <Link href={'/'} title={siteConfig.name} className="group flex items-center justify-center gap-2">
                <Icon.logo className="size-6 group-hover:animate-spin
                group-focus:animate-spin
                transition-all" />
                <h1 className="font-mono">{siteConfig.name}</h1>
            </Link>
            <div className="flex-1 flex items-center">

                <NavigationMenu className="">

                    <NavigationMenuList className="">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="">Posts</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[250px] sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {CATEGORIES.map((category) => (
                                        <ListItem
                                            key={category.title}
                                            title={category.title}
                                            href={category.href}
                                        >
                                            {category.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref title="About" >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                </NavigationMenu>
                <div className="flex sm:w-20 items-center justify-between">
                    <ModeToggle />
                    <Link prefetch={false} href={"/rss"} title="RSS Feed">
                        <Icon.rss className="size-6" name="Rss" />
                    </Link>
                </div>
            </div>
        </div>

    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href || ""}
                    ref={ref}
                    title={title}
                    className={cn(
                        "block select-none space-y-1 rounded-md sm:p-3 p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none max-sm:text-xs">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground max-sm:text-xs
                    ">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
