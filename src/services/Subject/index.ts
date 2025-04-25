/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
export const getSubject = async () => {
  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/subject`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Subject Error:", error);
    // return { success: false, message: error.message };
  }
};

export const createSubject = async (subject:any) => {
  try {
    const res = await fetch(`https://tutorial-link-backend.vercel.app/api/subject`, {
      method: "POST",
      body: JSON.stringify(subject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Get Subject Error:", error);
    // return { success: false, message: error.message };
  }
};
