/* eslint-disable @typescript-eslint/no-explicit-any */


import TutorDetailsBookingUI from "@/components/sheared/tutor/TutorDetailsPage";
import { getSingleTutorDetails } from "@/services/Tutor";


const TutorDetails = async({params}:any) => {
  
  
  const data = await getSingleTutorDetails(params.cardId);
  console.log('tutor data', data.data);

  const tutorData = data.data



  return (
    <div>
      {/* <TutorDetailsPage></TutorDetailsPage> */}
      this is details page
      <TutorDetailsBookingUI {...tutorData}></TutorDetailsBookingUI>
    </div>
  )
};

export default TutorDetails;
