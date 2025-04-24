import RegisterForm from "@/components/modules/auth/register/RegisterForm";
import { Suspense } from "react";

export default function TutorSignupPage() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <RegisterForm />
      </Suspense>
    </>
  );
}
