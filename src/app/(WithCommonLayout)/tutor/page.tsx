/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TTutor {
  _id: string;
  user: User;
  email: string;
  bio: string;
  subjects: string[];
  availability: string[]; // Or a more specific type if it's date/time objects
  hourlyRate: number;
  location: string;
  ratings: number;
  totalEarnings: number;
}



// import CardTutor from "@/components/sheared/tutor/CardTutor";
import TutorComponent from "@/components/sheared/tutor/Tutor";
// import Sidebar from "@/components/sheared/tutor/Sidebar";

import { getAllTutor } from "@/services/Tutor";

// type TutorResponse = {
//   success: boolean;
//   message: string;
//   statusCode: number;
//   data: [];
// };

const Page = async () => {
  const tutorsdata = await getAllTutor();

  const tutors = tutorsdata.data
  console.log('this is tutors data', tutors);


  // const onlyTutors = allTutorsData.data.filter((tutor:TTutor)=>tutor.user.role === 'tutor')
  // console.log(onlyTutors);
  
  

  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="w-full  my-20 text-center text-5xl">
        Find the perfect tutor
      </div>
      
      <div className="">
        {/* <div className="w-3/12 flex">
          <Sidebar />
        </div> */}

        

        <div>
        

          <TutorComponent  tutors={tutors}></TutorComponent>

          {/* {
            tutors.data?.map((tutor:TTutor)=>(
              <CardTutor key={tutor._id} {...tutor}></CardTutor>
            ))
          } */}

          
        </div>
      </div>
    </div>
  );
};

export default Page;
