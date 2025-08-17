"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import Loader from "@/components/sheared/spinner/spinner";
import { useEffect } from "react";

export default function Profile() {
  const { user, isLoading, setIsloading } = useUser();

  useEffect(() => {
    if (user) setIsloading(false);
  }, [setIsloading, user]);

  if (isLoading || !user) return <Loader />;

  return (
    // Full width of the dashboard content area
    <section className="w-full py-6">
      <Card className="w-full p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <Avatar className="w-24 h-24 shrink-0">
            <AvatarImage src={user?.image || undefined} />
            <AvatarFallback>
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>

          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
