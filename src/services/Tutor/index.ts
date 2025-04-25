/* eslint-disable @typescript-eslint/no-explicit-any */
export const completeProfile = async (tutorData: any): Promise<any> => {
  // console.log(`${process.env.BACKEND_URL}`);

  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/tutor`, {
      method: "POST",
      body: JSON.stringify(tutorData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("test");

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update tutor profile");
    }

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};


export const updateTutorProfile = async (id: string , tutorData: any): Promise<any> => {
  // console.log(`${process.env.BACKEND_URL}`);

  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/tutor/${id}`, {
      method: "PATCH",
      body: JSON.stringify(tutorData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to update tutor profile");
    }

    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
// get all tutor
export const getTutor = async (
  subject?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }

) => {
  const params = new URLSearchParams();
  if(query?.subject){
    params.append("subject", query?.subject.toString())
  }
  params.append("hi", "hi")
  console.log(params);


  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/tutor`);
    console.log(process.env.BACKEND_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Tutor Profile Error:", error);
    // return { success: false, message: error.message };
  }
};
export const getTutorByUserId = async (id: string) => {
  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/tutor/tutorid/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Tutor Profile Error:", error);
    // return { success: false, message: error.message };
  }
};
export const getTutorByTutorId = async (id: string) => {
  console.log( "test", id);
  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/tutor/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Tutor Profile Error:", error);
    // return { success: false, message: error.message };
  }
};




export const getAllTutor = async()=>{
  const res = await fetch ('https://tutorial-link-backend.vercel.app/api/tutor', {
      next: {
        revalidate: 5,
      },
    });
  return res.json();
}



export const getSingleTutorDetails = async(tutorId:any)=>{
  console.log('this is tutor id', tutorId);
  const res = await fetch (`https://tutorial-link-backend.vercel.app/api/tutor/${tutorId}`,{
      next:{
          revalidate: 5,
      },
  });
  return res.json();
}

