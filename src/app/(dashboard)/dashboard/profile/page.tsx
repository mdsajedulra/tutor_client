"use client";
import UpdateStudentForm from "@/components/modules/dashboard/student/UpdateStudentProfile";
import { useUser } from "@/context/UserContext";

const Profile = () => {
  const { user } = useUser();
  console.log(user);
  return <>
  <UpdateStudentForm/>
  </>;
};

export default Profile;
