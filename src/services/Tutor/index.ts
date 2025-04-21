/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";

export const updateTutorProfile = async (productData: FormData): Promise<any> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/tutor`, {
        method: "POST",
        body: productData,
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      });
    //   revalidateTag("PRODUCT");
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };