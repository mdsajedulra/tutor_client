"use server"
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { loginUserData } from "@/types";

export const registerUser = async (userData: loginUserData) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.success) {
      console.log(result?.token);
      // (await cookies()).set("accessToken", result?.token);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = async (userData: loginUserData) => {
  console.log(userData);
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    if (result.success) {
      console.log(result?.token);
      (await cookies()).set("accessToken", result?.token);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

// accesstoken access from cookies

export const getCurrentUser = async () => {
  const tokenData = (await cookies()).get("accessToken")
  console.log("token",tokenData);
  const accessToken = tokenData?.value;  // safe check
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    console.log(decodedData.email);
    const res =  await fetch(`${process.env.BACKEND_URL}/users/${decodedData?.email}`, {
      cache: "no-store"
    })
    const user = await res.json()
    if(user?.data){
      return user?.data
    }
  } else return null;
};

// logout 

export const logout = async () =>{
  (await cookies()).delete("accessToken")
}