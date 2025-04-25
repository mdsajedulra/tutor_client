import { BookingModal } from "@/components/modules/booking/bookingModal";
import { Card, CardContent } from "@/components/ui/card";
import { Tutor } from "@/types";
// import { Tutor } from "@/types";
import Image from "next/image";




export default function TutorDetailsPage({ tutor }: { tutor: Tutor | null }) {
  if (!tutor) return <div className="text-center py-10 text-muted-foreground">Loading...</div>;

  const { name, bio, ratings, hourlyRate, user, location, subjects } = tutor;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 flex flex-col xl:flex-row-reverse gap-10">
      {/* Right Panel */}
      <div className="w-full xl:w-1/3 rounded-2xl border bg-card shadow-md p-6 flex flex-col items-center gap-6">
        <Image
          height={160}
          width={160}
          src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Tutor"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-sm"
        />
        <h1 className="text-xl font-bold text-center">{user?.name}</h1>
        <p className="text-muted-foreground text-center px-4">{bio}</p>
        <div className="text-sm text-foreground w-full space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">💵 Rate:</span>
            <span>{hourlyRate}/hr</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">⭐ Rating:</span>
            <span>{ratings}/5 (120 Reviews)</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">📍 Location:</span>
            <span>{location}</span>
          </div>
        </div>
        <BookingModal tutor={tutor} />
      </div>

      {/* Left Panel */}
      <div className="w-full xl:w-2/3 space-y-8">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">About {name}</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Subjects I Teach</h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              {subjects?.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold">Student Reviews</h2>
            <div className="space-y-3 text-muted-foreground text-sm">
              <div>
                <p className="font-semibold">John D.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ - Sarah made Physics so much easier to understand. Highly recommend!</p>
              </div>
              <div>
                <p className="font-semibold">Emily R.</p>
                <p>⭐️⭐️⭐️⭐️⭐️ - Amazing tutor! Helped me ace my Calculus exams.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
