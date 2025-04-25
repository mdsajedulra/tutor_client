"use client";
import ThankYou from "@/components/modules/payment/ThankyouPage";
import Loader from "@/components/sheared/spinner/spinner";
import { Suspense } from "react";

const Page = () => {
  return (
    <>
      <Suspense fallback={<div><Loader/></div>}>
        <ThankYou />
      </Suspense>
    </>
  );
};

export default Page;
