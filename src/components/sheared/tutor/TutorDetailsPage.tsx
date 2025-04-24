"use client"
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

interface TutorDetails {
  bio: string;
  image?:string;
  subjects: string[];
  hourlyRate: number;
  ratings: number;
  location: string;
  availability: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
}



interface BookingFormData {
  subject: string;
  availability: string;
}

export default function TutorDetailsBookingUI(tutorData:TutorDetails) {
  const { control, handleSubmit } = useForm<BookingFormData>();
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);
    console.log("Booking submitted:", data);
  };


  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = Array(fullStars).fill("★").join("");
    return stars + (halfStar ? "½" : "");
  };

  return (
    <div className="w-[90%] mx-auto p-4 space-6 flex justify-center gap-5">
      <div className="bg-white rounded-xl shadow-md p-6 w-1/2 border-2 h-96">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 rounded-full bg-gray-200">

            {tutorData?.image ? (
                      <>
                        <Image
                          src="https://via.placeholder.com/64"
                          alt="Profile"
                          width={250}
                          height={250}
                          className="w-24 h-24 rounded-full"
                        />
                      </>
                    ) : (
                      <>
                        <Image
                          src="https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png"
                          alt="Profile"
                          width={250}
                          height={250}
                          className="w-24 h-24 rounded-full"
                        />
                      </>
                    )}

          </div>
          <h2 className="text-xl font-semibold">Tutor Details</h2>
          <p>{tutorData.bio}</p>
          <div className="flex flex-wrap gap-2">
            {tutorData.subjects.map((subj) => (
              <span key={subj} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
                {subj}
              </span>
            ))}
          </div>
          <div className="text-lg font-medium">${tutorData.hourlyRate}/hr</div>
          <div className="text-sm text-gray-600">{tutorData.location}</div>
          <div className="text-yellow-500">{renderStars(tutorData.ratings)} ({tutorData.ratings})</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 w-1/3 border-2 h-96">
        <h2 className="text-lg font-semibold mb-4">Booking</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <Controller
              control={control}
              name="subject"
              defaultValue={tutorData.subjects[0]}
              render={({ field }) => (
                <select
                  {...field}
                  id="subject"
                  className="w-full border rounded px-3 py-2"
                >
                  {tutorData.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
            <Controller
              control={control}
              name="availability"
              defaultValue={`${tutorData.availability[0].day} ${tutorData.availability[0].startTime}–${tutorData.availability[0].endTime}`}
              render={({ field }) => (
                <select
                  {...field}
                  id="availability"
                  className="w-full border rounded px-3 py-2"
                >
                  {tutorData.availability.map((slot, idx) => (
                    <option
                      key={idx}
                      value={`${slot.day} ${slot.startTime}–${slot.endTime}`}
                    >
                      {`${slot.day} ${slot.startTime} – ${slot.endTime}`}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Book Now
          </button>
        </form>
      </div>

      {submittedData && (
        <div className="p-4 bg-green-100 rounded-lg">
          <p className="font-semibold">Booking Confirmed:</p>
          <p>Subject: {submittedData.subject}</p>
          <p>Time: {submittedData.availability}</p>
        </div>
      )}
    </div>
  );
}
