import { TestBlog } from "@prisma/client";
import { type ClassValue, clsx } from "clsx"
import matter from "gray-matter";
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


const regex = /<h([1-3])\s+id="([^"]+)">.*?<\/a>(.*?)<\/h\1>/g;

// const htmlString = `
//   <h2 id="general-breakfast-hours"><a href="#general-breakfast-hours" class="anchor">#</a>General Breakfast Hours</h2>
//   <h3 id="details"><a href="#details" class="anchor">#</a>Details</h3>
//   <p>Some paragraph text.</p>
//   <h2 id="conclusion"><a href="#conclusion" class="anchor">#</a>Conclusion</h2>
// `;



type SubHeading = {
  subHeading: string;
  subLink: string;
};

type Heading = {
  heading: string;
  link: string;
  subHeadings: SubHeading[];
};


export const getAllHeadings = (mdxContent: string) => {

  const regex = /^(#{1,3})\s(.+)$/gm;

  const headings: Heading[] = [];
  let currentH2: Heading | null = null;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(mdxContent)) !== null) {
    const level = match[1].length;
    const headingText = match[2].trim();
    const id = headingText.toLowerCase().replace(/\s+/g, '-');

    if (level === 2) {
      // If it's an h2, create a new object
      currentH2 = {
        heading: headingText,
        link: `#${id}`,
        subHeadings: []
      };
      headings.push(currentH2);
    } else if (level === 3 && currentH2) {
      // If it's an h3, push it into the current h2's subHeadings array
      currentH2.subHeadings.push({
        subHeading: headingText,
        subLink: `#${id}`
      });
    }
  }

  return headings
}


export const getMDXData = (posts: TestBlog[]) => {
  return posts.map((post) => {
    const { content: rawContent, slug } = post
    const grayContent = matter(rawContent)
    const { data: metadata, content } = grayContent
    return {
      slug, metadata, content
    }
  })
}

export function formateDate(date: string, includeRelative = false) {
  let currentDate = new Date();
  if (!date.includes("T")) date = `${date}T00:00:00`

  let targetDate = new Date(date);

  let yearAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthAgo = currentDate.getMonth() - targetDate.getMonth()
  let dayAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ""

  if (yearAgo > 0) formattedDate = (yearAgo > 1) ? `${yearAgo}years ago` : `${yearAgo}year ago`
  else if (monthAgo > 0) formattedDate = (monthAgo > 1) ? `${monthAgo}months ago` : `${monthAgo}month ago`
  else if (dayAgo > 0) formattedDate = (dayAgo > 1) ? `${dayAgo}days ago` : `${dayAgo}day ago`
  else formattedDate = "Today"

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  if (includeRelative) {
    return `${fullDate} (${formattedDate})`
  }
  return fullDate
}