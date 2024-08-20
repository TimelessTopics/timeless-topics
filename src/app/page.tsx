import Container from "@/components/Container";
import LatestPost from "@/components/home/LatestPost";
import { CustomNavigationMenu } from "@/components/NavigationMenu";
import { baseUrl, siteConfig } from "@/lib/constants";
import { WebSite, WithContext } from "schema-dts"
import dynamic from "next/dynamic";
const HomeAbout = dynamic(() => import("@/components/home/HomeAbout"))
const RightContent = dynamic(() => import("@/components/home/RightContent")
)
// const LatestPost = dynamic(() => import("@/components/home/LatestPost"))

export const revalidate = 3500

export default function Home() {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${baseUrl}/og`,
    thumbnailUrl: `${baseUrl}/og`,
    author: {
      "@type": "Person",
      name: "Abdus Samad",
      url: siteConfig.links.github,
    }
  }

  return (
    <>
      <script async defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <CustomNavigationMenu />
        <main className="grid sm:grid-cols-2 gap-5 pb-10">
          <LatestPost />
          <RightContent />
        </main>
        <HomeAbout />
      </Container>
    </>
  );
}
