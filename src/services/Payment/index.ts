"use server"
import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const makePayment = async (payData: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await cookies()).get("accessToken")?.value}`,
      },
      body: JSON.stringify(payData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Make order error:", error);
    // return { success: false, message: error.message };
  }
};