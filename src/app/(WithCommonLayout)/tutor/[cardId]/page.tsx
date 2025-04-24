"use client";
import TutorDetailsPage from "@/components/sheared/tutor/TutorDetailsCard";
import { getTutorByTutorId } from "@/services/Tutor";

import { Tutor } from "@/types";


import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TutorDetails = () => {
  const { cardId } = useParams();
  console.log(cardId);

  const [tutor, setTutor] = useState<Tutor | null >(null);
 
  

  useEffect(() => {
    const getTutor = async () => {
      const result = await getTutorByTutorId(cardId as string);
      setTutor(result?.data);
      console.log(cardId);
    };
    getTutor();
  }, [cardId]);
 

  return <>
  <TutorDetailsPage tutor={tutor} key={tutor?._id}/>
  </>;
};

export default TutorDetails;
