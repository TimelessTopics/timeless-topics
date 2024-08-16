import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function slugify(str: string) {
  return str.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-and-").replace(/\-\-+/g, "-")
}


export const fetchUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://daily-mini.blog.vercel.app/api";
// : "http://localhost:3000/api";


type ResponseData = {
  category: string;
  title: string;
  slug: string;
}[];

export const fetcher = (
  ...args: Parameters<typeof fetch>
): Promise<ResponseData> => fetch(...args).then((res) => res.json());