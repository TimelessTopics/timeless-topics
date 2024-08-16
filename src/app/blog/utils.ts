import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

//get all the mdx files form dir
function getMDXfiles(dir: string) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

//read data from the files
export function readMDXfiles(filepath: fs.PathOrFileDescriptor) {
    let rowContent = fs.readFileSync(filepath, "utf-8")
    return matter(rowContent)
}

//present the mdx data and metadata
function getMDXdata(dir: string) {
    let mdxFiles = getMDXfiles(dir)

    return mdxFiles.map((file) => {
        let { data: metadata, content } = readMDXfiles(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))

        return {
            slug,
            metadata,
            content
        }
    })
}

export function getBlogPosts() {
    return getMDXdata(path.join(process.cwd(), "src", "app", "blog", "contents"))
}

//formate date
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