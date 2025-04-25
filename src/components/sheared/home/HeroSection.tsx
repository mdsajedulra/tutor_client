"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface TutorDetails {
  _id: string;
  image?:string;
  bio: string;
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

interface Props {
  tutors: TutorDetails[];
}


export default function HeroSection({ tutors }: Props) {
  const { control, handleSubmit } = useForm<BookingFormData>();
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);
    console.log('Booking submitted:', data);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return '★'.repeat(fullStars);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredTutors = tutors.filter((tutor) =>
    tutor.subjects.some((subject) =>
      subject.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const showResults = searchTerm.trim().length > 0 && filteredTutors.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <section className="flex flex-col items-center text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">
          Find Your Perfect Tutor Today!
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
          Discover top tutors by subject, grade, or name. Learn from the best and achieve your goals!
        </p>

        <div className="w-full max-w-xl flex flex-col sm:flex-row gap-2">
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by subject..."
            className="flex-1 bg-white"
          />
          <Button>Search</Button>
        </div>

        <Link href="/tutor">
          <Button className="px-6 py-3 text-base sm:text-lg mt-4">Get Started</Button>
        </Link>
      </section>

      {showResults && (
        <div>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold text-blue-600 my-6">
            Your search result...
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutors.map((tutor) => (
              <div key={tutor._id} className="bg-white rounded-xl shadow p-6 flex flex-col">
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-4">
                  <Image
                    src={
                      tutor.image
                        ? tutor.image
                        : 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png'
                    }
                    alt="Tutor Image"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="space-y-2 text-center">
                  <h2 className="text-lg sm:text-xl font-semibold">{tutor.bio}</h2>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tutor.subjects.map((subj) => (
                      <span
                        key={subj}
                        className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-medium">${tutor.hourlyRate}/hr</p>
                  <p className="text-sm text-gray-600">{tutor.location}</p>
                  <div className="text-yellow-500">{renderStars(tutor.ratings)} ({tutor.ratings})</div>
                </div>

                <div className="mt-4 border-t pt-4">
                  <h3 className="text-base font-semibold mb-2">Subject Schedule</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <Controller
                        control={control}
                        name="subject"
                        defaultValue={tutor.subjects[0]}
                        render={({ field }) => (
                          <select {...field} id="subject" className="w-full border rounded px-3 py-2">
                            {tutor.subjects.map((subject) => (
                              <option key={subject} value={subject}>
                                {subject}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>

                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium mb-1">
                        Availability
                      </label>
                      <Controller
                        control={control}
                        name="availability"
                        defaultValue={`${tutor.availability[0].day} ${tutor.availability[0].startTime}–${tutor.availability[0].endTime}`}
                        render={({ field }) => (
                          <select {...field} id="availability" className="w-full border rounded px-3 py-2">
                            {tutor.availability.map((slot, idx) => (
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
                  </form>
                </div>

                {submittedData && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg text-sm">
                    <p className="font-semibold">Booking Confirmed:</p>
                    <p>Subject: {submittedData.subject}</p>
                    <p>Time: {submittedData.availability}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
