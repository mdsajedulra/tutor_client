/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { cookies } from "next/headers";

export const createBooking = async (bookingData: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await cookies()).get("accessToken")?.value}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("create booking Error:", error);
    // return { success: false, message: error.message };
  }
};
export const getBookingByTutorId = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/booking/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await cookies()).get("accessToken")?.value}`,
      },
      // body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("create booking Error:", error);
    // return { success: false, message: error.message };
  }
};
export const getBookingByStudentId = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/booking/st/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await cookies()).get("accessToken")?.value}`,
      },
      // body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("create booking Error:", error);
    // return { success: false, message: error.message };
  }
};

// booking status by id


export const bookingStatusUpdateById = async (
  id: string,
  status: { status: string }
) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/booking/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await cookies()).get("accessToken")?.value}`,
      },
      body: JSON.stringify(status),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("update status booking Error:", error);
    // return { success: false, message: error.message };
  }
};
