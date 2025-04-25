/* eslint-disable @typescript-eslint/no-explicit-any */


import TutorDetailsBookingUI from "@/components/sheared/tutor/TutorDetailsPage";
import { getSingleTutorDetails } from "@/services/Tutor";


const TutorDetails = async({params}:any) => {
  
  
  const data = await getSingleTutorDetails(params.cardId);
  console.log('tutor data', data.data);

  const tutorData = data.data



  return (
    <div>
      <div className="w-full  my-20 text-center text-5xl">
        <p className="font-semibold text-blue-600 my-2">Hey you, The Brightest Student, </p>
        <p>I am waiting for you...🥸🤓</p>
      </div>
      <TutorDetailsBookingUI {...tutorData}></TutorDetailsBookingUI>
    </div>
  )
};

export default TutorDetails;
