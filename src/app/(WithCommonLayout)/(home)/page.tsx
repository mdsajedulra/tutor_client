
import HeroSection from "@/components/sheared/home/HeroSection";

import FeaturesSection from "@/components/sheared/home/Features";
import Testmonial from "@/components/sheared/home/Testmonial";
// import SeachBarUI from "@/components/sheared/home/Seachbar";
import { getAllTutor } from "@/services/Tutor";

export default async function Home () {

  const data = await getAllTutor();

  console.log('this is the data',data.data);

  const tutors = data.data ;

  console.log('this is the tutors data',tutors);
  return (
    <div className="">
      <main className="">
      <HeroSection tutors = {tutors}/>

      {/* <SeachBarUI tutors = {tutors}></SeachBarUI> */}
      <FeaturesSection />
      <Testmonial />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      this is header
      </footer>
    </div>
  );
}
