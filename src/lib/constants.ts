export const CATEGORIES = [
    {
        title: "Technology",
        href: "/blog/technology",
        description: "Explore the latest in gadgets, software, AI, and tech news."
    },
    {
        title: "Health & Wellness",
        href: "/blog/health-and-wellness",
        description: "Discover tips and insights on nutrition, mental health, fitness, and medicine."
    },
    {
        title: "Lifestyle",
        href: "/blog/lifestyle",
        description: "Dive into travel, fashion, home & garden, and personal development."
    },
    {
        title: "Business & Finance",
        href: "/blog/business-and-finance",
        description: "Stay informed on entrepreneurship, investing, personal finance, and market trends."
    },
    {
        title: "Entertainment",
        href: "/blog/entertainment",
        description: "Get the latest on movies, music, books, gaming, and more."
    },
    {
        title: "Science & Education",
        href: "/blog/science-and-education",
        description: "Explore the wonders of science, space, and educational resources."
    },
    {
        title: "Food & Drink",
        href: "/blog/food-and-drink",
        description: "Indulge in recipes, food reviews, and culinary tips."
    },
    {
        title: "Art & Culture",
        href: "/blog/art-and-culture",
        description: "Appreciate photography, painting, cultural events, and history."
    },
    {
        title: "Sports & Outdoors",
        href: "/blog/sports-and-outdoors",
        description: "Keep up with team sports, outdoor adventures, and fitness tips."
    },
    {
        title: "Society & Politics",
        href: "/blog/society-and-politics",
        description: "Analyze social issues, political trends, and current events."
    }
];


type SiteConfigType = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        github: string;
    };
    keywords: string[];
}


export const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://timelesstopics.online"

export const siteConfig = {
    name: "Timeless Topics",
    description: "Discover insightful, evergreen content on Timeless Topics. Dive into in-depth articles and expert analysis on technology, culture, and more.",
    title: "Timeless Topics: Explore Diverse Insights and In-Depth Articles",
    url: baseUrl,
    ogImage: `${baseUrl}/og`,
    links: {
        github: "https://github.com/Samad-11/",
        instagram: "https://www.instagram.com/baddek__eih/",
        linkedin: "https://www.linkedin.com/in/abdus-samad-633b3425a"
    },
    keywords: [
        "blog",
        "nextjs",
        "typescript",
        "react",
        "latest",
        "javascript",
        "open-source",
        "daily-mini-blogs"
    ]
}