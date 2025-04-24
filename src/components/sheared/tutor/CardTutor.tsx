// import Image from "next/image";
import Image from "next/image";
import { Tutor } from "./Tutor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        {tutor?.image ? (
          <>
            <Image
              src="https://via.placeholder.com/64"
              alt="Profile"
              width={250}
              height={250}
              className="w-16 h-16 rounded-full"
            />
          </>
        ) : (
          <>
            <Image
              src="https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png"
              alt="Profile"
              width={250}
              height={250}
              className="w-16 h-16 rounded-full"
            />
          </>
        )}

        <div>
          <h2 className="font-bold">{tutor.email.split("@")[0]}</h2>
          <p className="text-sm text-gray-500">{tutor.location}</p>
        </div>
      </div>
      <div className="mt-3">
        <p>
          <span className="font-semibold">Subjects:</span>{" "}
          {tutor.subjects.join(", ")}
        </p>
        <p>
          <span className="font-semibold">Rate:</span> ${tutor.hourlyRate}/hr
        </p>
        <p>
          <span className="font-semibold">Rating:</span> ⭐{" "}
          {tutor.ratings || "N/A"}
        </p>

        <Link href={`http://localhost:3000/tutor/${tutor._id}`}>
        <Button>
            View Details
        </Button>
        </Link>
      </div>
    </div>
  );
}
