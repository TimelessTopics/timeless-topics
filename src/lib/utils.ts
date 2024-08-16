import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function slugify(str: string) {
  return str.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/\-\-+/g, "-")
}