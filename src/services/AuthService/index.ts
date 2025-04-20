"use client";

import { cookies } from "next/headers";
import jwtDecode from "jwt-decode"

const loginUser = async (userData) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// accesstoken access from cookies

export const getCurrentUser = async () =>{
    const accessToken = (await cookies()).get("accessToken")!.value
    let decodedData = null
    if(accessToken){
        decodedData = await jwtDecode(accessToken)
        return decodedData
    }
    else return null;
}