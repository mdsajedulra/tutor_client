"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import Loader from "@/components/sheared/spinner/spinner";

export default function UserProfile() {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="w-full flex justify-center py-10">
        <Loader />
      </div>
    );
  }

  return (
    <section className="w-full py-10">
      <Card className="w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg border bg-gradient-to-br from-white to-gray-50">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-32 relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
              <AvatarImage src={user?.image || undefined} />
              <AvatarFallback>
                {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* User details */}
        <div className="pt-16 pb-8 px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500">{user?.email}</p>
          <span className="inline-block mt-2 px-4 py-1 text-sm font-medium text-white bg-indigo-600 rounded-full shadow">
            {user?.role}
          </span>
        </div>

        {/* Stats section (optional, makes it feel like a dashboard card) */}
        <div className="grid grid-cols-3 divide-x divide-gray-200 border-t">
          <div className="py-4">
            <p className="text-lg font-bold text-gray-800">24</p>
            <p className="text-sm text-gray-500">Sessions</p>
          </div>
          <div className="py-4">
            <p className="text-lg font-bold text-gray-800">4.8</p>
            <p className="text-sm text-gray-500">Rating</p>
          </div>
          <div className="py-4">
            <p className="text-lg font-bold text-gray-800">12</p>
            <p className="text-sm text-gray-500">Reviews</p>
          </div>
        </div>
      </Card>
    </section>
  );
}
