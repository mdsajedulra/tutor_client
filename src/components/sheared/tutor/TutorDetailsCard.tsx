import { BookingModal } from "@/components/modules/booking/bookingModal";

import { Card, CardContent } from "@/components/ui/card";


import { Tutor } from "@/types";

import Image from "next/image";

export default function TutorDetailsPage({ tutor }: { tutor: Tutor | null }) {
  console.log(tutor);

  if (!tutor) return <div>Loading...</div>;

  const { name, bio, rating, hourlyRate, user, location, subjects } = tutor;
  console.log("tutor", tutor);
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 flex flex-row-reverse w-full  sm:flex-col xl:flex-row-reverse">
      {/* Top Section */}

      <div className="flex flex-col items-center gap-8 p-5 rounded-2xl shadow-xl w-4/12 h-2/4 sm:w-full">
        <div>
          <Image
            height="100"
            width="100"
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Tutor"
            className="w-40 h-40 rounded-full object-cover border-2 border-primary"
          />
          <h1 className="text-3xl font-bold">{user.name}</h1>
        </div>
        <div className="">
          <p className="text-gray-500 mt-2">{bio}</p>
          <div className="mt-4 text-gray-600 space-y-1 text-sm flex justify-between">
            <div>
              <p>💵 Rate:</p>

              <p>⭐ Rating:</p>
              <p>📍 Location:</p>
            </div>
            <div>
              <p>{hourlyRate}/hr</p>
              <p>{rating}/5 (120 Reviews)</p>
              <p>{location}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <BookingModal tutor={tutor} />
          </div>
        </div>
      </div>

      <div className="w-8/12 max-w-5xl mx-auto p-6 space-y-10 sm:w-full ">
        {/* Bio Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">About {name}</h2>
            <p className="text-gray-600 text-sm">{bio}</p>
          </CardContent>
        </Card>

        {/* Subjects Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Subjects I Teach</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Reviews Section */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Student Reviews</h2>
            <div className="space-y-3 text-gray-600 text-sm">
              <div>
                <p className="font-semibold">John D.</p>
                <p>
                  ⭐️⭐️⭐️⭐️⭐️ - Sarah made Physics so much easier to
                  understand. Highly recommend!
                </p>
              </div>
              <div>
                <p className="font-semibold">Emily R.</p>
                <p>
                  ⭐️⭐️⭐️⭐️⭐️ - Amazing tutor! Helped me ace my Calculus
                  exams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
