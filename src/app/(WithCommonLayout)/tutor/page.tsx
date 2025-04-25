/* eslint-disable @typescript-eslint/no-explicit-any */


import TutorList from "@/components/sheared/tutor/tutor";
import { getAllTutor} from "@/services/Tutor";






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



const Page =  async() => {

  const tutorsdata = await getAllTutor();

  const tutors = tutorsdata.data
  console.log('this is tutors data', tutors);


  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="w-full  my-20 text-center text-5xl">
        Find the perfect tutor
      </div>
      
      <div className="">
        

        <div>
        

          <TutorList  tutors={tutors}></TutorList>

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
