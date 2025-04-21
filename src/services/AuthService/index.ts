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
  const accessToken = (await cookies()).get("accessToken")!.value;
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else return null;
};
