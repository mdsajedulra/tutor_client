"use client";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useUser } from "@/context/UserContext";
import Loader from "@/components/sheared/spinner/spinner";
import { useEffect } from "react";

export default function Profile() {
  const { user, isLoading, setIsloading } = useUser();

  useEffect(() => {
    if (user) {
      setIsloading(false);
    }
  }, [setIsloading, user]);

  if (isLoading) {
    return <Loader />;
  }
  if (!user) {
    return <Loader />;
  }
  return (
    <div className="flex justify-center w-full py-10">
      <Card className="w-full max-w-md p-6 text-center space-y-4">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={user?.image || undefined} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-gray-500">{user?.role}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
