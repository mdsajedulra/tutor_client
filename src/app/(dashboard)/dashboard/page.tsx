import Dashboard from "@/components/modules/dashboard/tutor/dashboard";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "About Us | TutorLink",
  description: "Learn more about our platform and tutors.",
};
const Profile = () => {
  return (
    <>
      <Dashboard/>
    </>
  );
};

export default Profile;
