/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Sidebar from "@/components/sheared/tutor/Sidebar";
import { TutorCard } from "@/components/sheared/tutor/TutorCard";
import { Button } from "@/components/ui/button";
import { getSubject } from "@/services/Subject";
import { getTutor } from "@/services/Tutor";
import { useEffect, useState } from "react";

const Page =   () => {
const [subjects, setSubjects] = useState<any>() 
const [tutors, setTutors] = useState<any>() 

useEffect(() => {
  const fetchSubject = async () => {
    const subject = await getSubject();
    setSubjects(subject);
    console.log("Subjects fetched:", subject);
  };
  fetchSubject();
}, []);

useEffect(() => {
  const fetchTutor = async () => {
    const tutors = await getTutor();
    setTutors(tutors);
    console.log("Tutors fetched:", tutors);
  };
  fetchTutor();
}, []);
    
    

    const subArr = subjects?.data.map((sub: { category: any; }) => (sub?.category))
    // console.log(subArr);
    // console.log(subjects);


  // Check if data exists before mapping
  if (!tutors) return <div>Loading...</div>;

  const handleFilter = (data) =>{
    console.log(data);

  }

  return (
 
    <>
      <div className="w-full my-20 text-center text-5xl">Find the perfect tutor</div>
      <div className="text-center">
        <p className="font-bold">Filter by Subject</p>
        <br/>
       <div className="flex gap-5 justify-center">
       {
          subArr?.map((sub: string, index: number) =>(
            <Button onClick={()=>handleFilter(sub)} key={index}>{sub}</Button>
          ))
        }
       </div>
       
       
      </div>
      <div className="flex">
      <div className="w-3/12 flex">
        <Sidebar/>
      </div>
        
      <div className="grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2  gap-5 my-10 justify-items-center ">
        {tutors?.data.map((tutor: any) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Page;
