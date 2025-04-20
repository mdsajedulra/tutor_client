"use client"
import TutorDetailsPage from "@/components/sheared/tutor/TutorDetailsCard";
import { useGetTutorByIdQuery } from "@/lib/redux/api/tutorApi";
import { useParams } from "next/navigation";

const TutorDetails = () => {
    const {cardId}  = useParams()
    const {data:tutor}  = useGetTutorByIdQuery(cardId)
    // console.log(data);
    return (
        <>
<TutorDetailsPage tutor={tutor} key={tutor?.id}/>
</>
    );
};

export default TutorDetails;