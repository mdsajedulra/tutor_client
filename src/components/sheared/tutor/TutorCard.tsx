import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  import Link from "next/link";
  import { Tutor } from "@/types";
  
  export function TutorCard({ tutor }: { tutor: Tutor }) {
    const {
      id,
      name,
      bio,
      subjects,
      hourlyRate,
      rating,
      location,
      profilePicture,
    } = tutor;
  
    return (
      <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-all hover:shadow-xl">
        {/* Image with zoom effect */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={profilePicture}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient overlay with name */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
            <CardTitle className="text-xl font-semibold text-white">
              {name}
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
              {subjects.map((subject) => (
                <span 
                  key={subject}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-800"
                >
                  {subject}
                </span>
              ))}
            </div>
  
            <div className="flex items-center justify-between pt-2">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  ⭐ {rating} <span className="text-gray-500">({Math.round(rating * 10)} reviews)</span>
                </p>
                <p className="text-sm">📍 {location}</p>
              </div>
              <p className="text-lg font-bold text-primary">${hourlyRate}/hr</p>
            </div>
          </div>
  
          <Button asChild className="mt-6 w-full">
            <Link href={`/tutor/${id}`}>View Profile</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }