/* eslint-disable @typescript-eslint/no-explicit-any */

import TutorDetailsPage from "@/components/sheared/tutor/TutorDetailsCard";
import { getSingleTutorDetails} from "@/services/Tutor";



const TutorDetails = async({params}:any) => {
  
  
  const data = await getSingleTutorDetails(params.cardId);
  console.log('tutor data', data.data);

  const tutor = data.data
 

  return <>
  <TutorDetailsPage tutor={tutor} key={tutor?._id}/>
  </>;
};

export default TutorDetails;
