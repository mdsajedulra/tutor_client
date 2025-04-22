/* eslint-disable @typescript-eslint/no-explicit-any */
export const updateTutorProfile = async (tutorData: any): Promise<any> => {
  // console.log(`${process.env.BACKEND_URL}`);

  try {
    const res = await fetch(`http://localhost:5000/api/tutor`, {
      method: "POST",
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
    const res = await fetch(`http://localhost:5000/api/tutor?subject`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Tutor Profile Error:", error);
    // return { success: false, message: error.message };
  }
};
export const getTutorById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:5000/api/tutor/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Tutor Profile Error:", error);
    // return { success: false, message: error.message };
  }
};
