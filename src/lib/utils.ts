import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function slugify(str: string) {
  return str.toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/\-\-+/g, "-")
    .replace(/\s*:\s*/g, "-")
    .replace(/\./g, "");
}


export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://daily-mini-blog.vercel.app/api";
// : "http://localhost:3000/api";

// export const fetchUrl = "https://daily-mini-blog.vercel.app/api"

export type ResponseData = {
  category: string;
  title: string;
  slug: string;
}[];


export const minimizeString = (str: string, max = 20) => {
  return (str.length > max ? str.substring(0, max - 3) + '...' : str).trim();
}