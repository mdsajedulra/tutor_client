import LoginForm from "@/components/modules/auth/login/LoginForm";
import { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </>
  );
};

export default page;
