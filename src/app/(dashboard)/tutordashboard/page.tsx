"use client";

import Dashboard from "@/components/modules/dashboard/tutor/dashboard";
import { useUser } from "@/context/UserContext";
import { TJwtPayloadWithEnum } from "@/types";

const Profile = () => {
  // const { user }: { user: TJwtPayloadWithEnum | null } = useUser();
  // console.log(user);
  // const {name} = user
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Profile;
