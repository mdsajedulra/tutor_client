"use client";
import ThankYou from "@/components/modules/payment/ThankyouPage";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Suspense fallback={"loading ...."}>
        <ThankYou />
      </Suspense>
    </>
  );
};

export default Page;
