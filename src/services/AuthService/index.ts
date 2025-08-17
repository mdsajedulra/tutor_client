
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
      //(result?.token);
      // (await cookies()).set("accessToken", result?.token);
    }
    return result;
  } catch (error) {
    console.log(error);
    //(error);
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
      //("test token", result?.token);
      (await cookies()).set("accessToken", result?.token);
    }
    return result;
  } catch (error) {
    console.log(error);
    //(error);
  }
};

// accesstoken access from cookies

export const getCurrentUser = async () => {
  const tokenData = (await cookies()).get("accessToken");
  //("token test", tokenData);
  const accessToken = tokenData?.value; // safe check
  let decodedData = null;
  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    //(decodedData.email);
    const res = await fetch(
      `${process.env.BACKEND_URL}/users/${decodedData?.email}`,
      {
        cache: "no-store",
      }
    );
    const user = await res.json();
    if (user?.data) {
      return user?.data;
    }
  } else return null;
};

// logout

export const logout = async () => {
  (await cookies()).delete("accessToken");
};
