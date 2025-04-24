import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Tutor } from "@/types";

export function TutorCard({ tutor }: { tutor: Tutor }) {
  const {
    user,
    _id,

    bio,
    subjects,
    hourlyRate,
    rating,
    location,
  } = tutor;

  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
      {/* Image with zoom effect */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="tutor iamge"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay with name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <CardTitle className="text-xl font-semibold text-white">
            {user.name}
          </CardTitle>
        </div>
      </div>

      {/* Card content */}
      <CardContent className="p-6">
        <div className="space-y-3">
          <CardDescription className="line-clamp-2 text-sm text-gray-600">
            {bio}
          </CardDescription>

          <div className="flex flex-wrap gap-2">
            {subjects?.map((subject, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800"
              >
                {subject}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <p className="text-sm font-medium">
                ⭐ {rating}{" "}
                <span className="text-gray-500">
                  ({Math.round(rating * 10)} reviews)
                </span>
              </p>
              <p className="text-sm">📍 {location}</p>
            </div>
            <p className="text-lg font-bold text-primary">${hourlyRate}/hr</p>
          </div>
        </div>

        <Button asChild className="mt-6 w-full">
          <Link href={`/tutor/${_id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
