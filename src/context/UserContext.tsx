"use client"
import { getCurrentUser } from "@/services/AuthService";
import { TJwtPayloadWithEnum } from "@/types";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IUserProviderValues {
  user: TJwtPayloadWithEnum | null;
  isLoading: boolean;
  setUser: (user: TJwtPayloadWithEnum | null) => void;
  setIsloading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues| undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TJwtPayloadWithEnum| null>(null);
  const [isLoading, setIsloading] = useState(true);
  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsloading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsloading }}>
      {children}
    </UserContext.Provider>
  );
};
 
export const useUser = () =>{
    const context = useContext(UserContext);
    if(context == undefined) {
        throw new Error("useUser  must be used within the UserProvider")
    }
    return context
}

export default UserProvider