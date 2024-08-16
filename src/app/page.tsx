import Container from "@/components/Container";
import LatestPost from "@/components/home/LatestPost";
import RightContent from "@/components/home/RightContent";
import { CustomNavigationMenu } from "@/components/NavigationMenu";

export default function Home() {
  return (
    <>
      <Container>
        <CustomNavigationMenu />
        <main className="grid sm:grid-cols-2 gap-5 pb-10">
          <LatestPost />
          <RightContent />
        </main>
      </Container>
    </>
  );
}
