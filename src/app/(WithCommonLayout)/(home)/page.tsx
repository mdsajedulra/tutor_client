import HeroSection from "@/components/sheared/home/HeroSection";

import { getAllTutor } from "@/services/Tutor";
import TopTutors from "@/components/sheared/home/TopTutors";
import BrowseBySubject from "@/components/sheared/home/BrowseBySubjec";
import HowItWorks from "@/components/sheared/home/HowItWorks";
import { WhyChooseUs } from "@/components/sheared/home/WhyChooseUs";

import { SuccessStories } from "@/components/sheared/home/SuccessStories";
import { NewsletterOrBlog } from "@/components/sheared/home/NewsLetterOrBlog";
import { TutorStatistics } from "@/components/sheared/home/TutorStatistics";
import { TutorTestimonials } from "@/components/sheared/home/TutorTestimonial";
import { PartnerInstitutions } from "@/components/sheared/home/PartnerInstitutions";


export default async function Home() {

  const data = await getAllTutor();

  console.log('this is the data',data.data);

  const tutors = data.data ;

  console.log('this is the tutors data',tutors);
  return (
    <div className="">
      <main className="">
        <HeroSection tutors = {tutors}/>
        <WhyChooseUs></WhyChooseUs>
        <HowItWorks></HowItWorks>
        
        <TopTutors tutors = {tutors}></TopTutors>
        
        <BrowseBySubject></BrowseBySubject>
        
        <SuccessStories></SuccessStories>
        <TutorStatistics></TutorStatistics>
        <TutorTestimonials></TutorTestimonials>

        <PartnerInstitutions></PartnerInstitutions>

        <NewsletterOrBlog></NewsletterOrBlog>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
