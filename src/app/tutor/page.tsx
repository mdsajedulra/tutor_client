/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
import { TutorCard } from "@/components/sheared/tutor/TutorCard";
import { getTutor } from "@/services/Tutor";

const Page =  async () => {

    const tutors = await getTutor()
    console.log(tutors);


  // Check if data exists before mapping
  if (!tutors) return <div>Loading...</div>;

  return (
    <>
      <div className="my-20 text-center text-5xl">Find the perfect tutor</div>
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-5 my-10 justify-items-center ">
        {tutors?.data.map((tutor: any) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </>
  );
};

export default Page;
