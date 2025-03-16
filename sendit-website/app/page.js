import HomepageBottomSection from "@/components/HomepageBottomSection";
import HomepageMiddleSection from "@/components/HomepageMiddleSection";
import HomepageTopSection from "@/components/HomepageTopSection";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <HomepageTopSection />
        <HomepageMiddleSection />
        <HomepageBottomSection />
      </main>
    </>
  );
}
