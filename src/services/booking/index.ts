import { cookies } from "next/headers";

const Token =  (await cookies()).get("accessToken");

export const   createBooking = async  (bookingData) =>{
    try {

        const res = await fetch(`http://localhost:5000/api/booking`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${Token}`
              },
              body: JSON.stringify(bookingData),
        })
        const data = await res.json()
        return data
        
      } catch (error) {
        console.error("create booking Error:", error);
        // return { success: false, message: error.message };
      }
}