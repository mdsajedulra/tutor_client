import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import Loader from "@/components/sheared/spinner/spinner";
import { Suspense } from "react";

export default function TutorSignupPage() {
  return (
    <>
      <Suspense fallback={<div><Loader/></div>}>
        <RegisterForm />
      </Suspense>
    </>
  );
}
