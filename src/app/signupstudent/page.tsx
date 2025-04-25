import StudentRegistrationForm from "@/components/modules/auth/register/StudentRegistrationForm";
import Loader from "@/components/sheared/spinner/spinner";
import { Suspense } from "react";

const SignupStudent = () => {
  return (
    <>
      <Suspense fallback={<div><Loader/></div>}>
      <StudentRegistrationForm />
      </Suspense>
    </>
  );
};

export default SignupStudent;
