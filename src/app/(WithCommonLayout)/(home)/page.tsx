import HeroSection from "@/components/sheared/home/HeroSection";

import FeaturesSection from "@/components/sheared/home/Features";
import Testmonial from "@/components/sheared/home/Testmonial";
import { getAllTutor } from "@/services/Tutor";
import RecomendedTeacher from "@/components/sheared/home/RecomendedTeacher";
import BecomeTutorCard from "@/components/sheared/home/BecomeTutoreCard";
import BlogHome from "@/components/sheared/home/BlogHome";


export default async function Home() {

  const data = await getAllTutor();

  //('this is the data',data.data);

  const tutors = data.data ;

  //('this is the tutors data',tutors);
  return (
    <div className="">
      <main className="">
        <HeroSection tutors = {tutors}/>
        <RecomendedTeacher/>
        <BecomeTutorCard/>
        <BlogHome/>
        <Testmonial />
        <FeaturesSection />
      </main>
      
    </div>
  );
}
