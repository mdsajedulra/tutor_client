import LoginForm from "@/components/modules/auth/login/LoginForm";
import Loader from "@/components/sheared/spinner/spinner";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div><Loader/></div>}>
        <LoginForm />
      </Suspense>
    </>
  );
};

export default page;
