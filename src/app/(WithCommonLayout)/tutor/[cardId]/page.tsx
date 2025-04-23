"use client";
import TutorDetailsPage from "@/components/sheared/tutor/TutorDetailsCard";
import { getTutorById } from "@/services/Tutor";


import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TutorDetails = () => {
  const { cardId } = useParams();
  console.log(cardId);

  const [tutor, setTutor] = useState<>();

  useEffect(() => {
    const getTutor = async () => {
      const result = await getTutorById(cardId as string);
      setTutor(result);
    };
    getTutor();
  }, []);
 

  return <>
  <TutorDetailsPage tutor={tutor?.data} key={tutor?._id}/>
  </>;
};

export default TutorDetails;
