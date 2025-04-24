import StudentRegistrationForm from "@/components/modules/auth/register/StudentRegistrationForm";
import { Suspense } from "react";

const SignupStudent = () => {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
      <StudentRegistrationForm />
      </Suspense>
    </>
  );
};

export default SignupStudent;
