
import HeroSection from "@/components/sheared/home/HeroSection";

import FeaturesSection from "@/components/sheared/home/Features";
import Testmonial from "@/components/sheared/home/Testmonial";

export default function Home() {
  return (
    <div className="">
      <main className="">
      <HeroSection />
      <FeaturesSection />
      <Testmonial />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      this is header
      </footer>
    </div>
  );
}
