import { topPosts } from "@/actions";
import Container from "@/components/Container";
import LatestPost from "@/components/home/LatestPost";
import RightContent from "@/components/home/RightContent";
import { CustomNavigationMenu } from "@/components/NavigationMenu";
import Image from "next/image";

export default async function Home() {
  const posts = await topPosts()
  return (
    <>
      <Container>
        <CustomNavigationMenu />
        <main className="grid sm:grid-cols-2 gap-5 pb-10">
          <LatestPost />
          <RightContent posts={posts || []} />
        </main>
      </Container>
    </>
  );
}
