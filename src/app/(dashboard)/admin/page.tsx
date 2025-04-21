"use client"
import { useUser } from "@/context/UserContext";
import { TJwtPayloadWithEnum } from "@/types";


const Profile =  () => {
    const {user}:{user: TJwtPayloadWithEnum|null} = useUser()
    console.log(user?.email);
    // const {name} = user
    return (
        <>
This is page
</>
    );
};

export default Profile;