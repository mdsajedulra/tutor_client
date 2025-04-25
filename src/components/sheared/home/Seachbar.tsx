// 'use client'
// import { useForm, Controller } from "react-hook-form";
// import { useState } from "react";

// interface TutorDetails {
//   bio: string;
//   subjects: string[];
//   hourlyRate: number;
//   ratings: number;
//   location: string;
//   availability: {
//     day: string;
//     startTime: string;
//     endTime: string;
//   }[];
// }

// const tutor: TutorDetails = {
//   bio: "This is tutor bio number 11",
//   subjects: ["Chemistry", "Physics", "English Grammar"],
//   hourlyRate: 60,
//   ratings: 4.1,
//   location: "Barisal",
//   availability: [
//     {
//       day: "Wednesday",
//       startTime: "10:00",
//       endTime: "12:00",
//     },
//   ],
// };

// interface BookingFormData {
//   subject: string;
//   availability: string;
// }

// export default function SeachBarUI() {
//   const { control, handleSubmit } = useForm<BookingFormData>();
//   const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const onSubmit = (data: BookingFormData) => {
//     setSubmittedData(data);
//     console.log("Booking submitted:", data);
//   };

//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     const stars = Array(fullStars).fill("★").join("");
//     return stars + (halfStar ? "½" : "");
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const showResults = searchTerm.trim().length > 0;

//   return (
//     <div className="max-w-md mx-auto p-4 space-y-6">
//       <input
//         type="text"
//         placeholder="Search something..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="w-full border rounded px-3 py-2 mb-4"
//       />

//       {showResults && (
//         <>
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <div className="flex flex-col items-center space-y-4">
//               <div className="w-24 h-24 rounded-full bg-gray-200" />
//               <h2 className="text-xl font-semibold">Tutor Details</h2>
//               <p>{tutor.bio}</p>
//               <div className="flex flex-wrap gap-2">
//                 {tutor.subjects.map((subj) => (
//                   <span key={subj} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
//                     {subj}
//                   </span>
//                 ))}
//               </div>
//               <div className="text-lg font-medium">${tutor.hourlyRate}/hr</div>
//               <div className="text-sm text-gray-600">{tutor.location}</div>
//               <div className="text-yellow-500">{renderStars(tutor.ratings)} ({tutor.ratings})</div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h2 className="text-lg font-semibold mb-4">Booking</h2>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div className="space-y-1">
//                 <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
//                 <Controller
//                   control={control}
//                   name="subject"
//                   defaultValue={tutor.subjects[0]}
//                   render={({ field }) => (
//                     <select
//                       {...field}
//                       id="subject"
//                       className="w-full border rounded px-3 py-2"
//                     >
//                       {tutor.subjects.map((subject) => (
//                         <option key={subject} value={subject}>
//                           {subject}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
//                 <Controller
//                   control={control}
//                   name="availability"
//                   defaultValue={`${tutor.availability[0].day} ${tutor.availability[0].startTime}–${tutor.availability[0].endTime}`}
//                   render={({ field }) => (
//                     <select
//                       {...field}
//                       id="availability"
//                       className="w-full border rounded px-3 py-2"
//                     >
//                       {tutor.availability.map((slot, idx) => (
//                         <option
//                           key={idx}
//                           value={`${slot.day} ${slot.startTime}–${slot.endTime}`}
//                         >
//                           {`${slot.day} ${slot.startTime} – ${slot.endTime}`}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 />
//               </div>
//               <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//                 Book Now
//               </button>
//             </form>
//           </div>

//           {submittedData && (
//             <div className="p-4 bg-green-100 rounded-lg">
//               <p className="font-semibold">Booking Confirmed:</p>
//               <p>Subject: {submittedData.subject}</p>
//               <p>Time: {submittedData.availability}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TutorDetails {
  _id: string;
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

// export default function SeachBarUI({ tutors }: Props) {
//     console.log('this is props',tutors);
//   const { control, handleSubmit } = useForm<BookingFormData>();
//   const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const onSubmit = (data: BookingFormData) => {
//     setSubmittedData(data);
//     console.log("Booking submitted:", data);
//   };

//   const renderStars = (rating: number) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 >= 0.5;
//     return '★'.repeat(fullStars) + (halfStar ? '½' : '');
//   };

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredTutors = tutors?.filter((tutor) =>
//     tutor.subjects.some((subject) =>
//       subject.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   const showResults = searchTerm.trim().length > 0 && filteredTutors.length > 0;

//   return (
//     <div className="max-w-4xl mx-auto p-4 space-y-6">
//       <input
//         type="text"
//         placeholder="Search for a subject..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="w-full border rounded px-3 py-2 mb-4"
//       />

//       {showResults && filteredTutors.map((tutor) => (
//         <div key={tutor._id} className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
//             <div className="flex-1 space-y-2">
//               <h2 className="text-xl font-semibold">{tutor.bio}</h2>
//               <div className="flex flex-wrap gap-2">
//                 {tutor.subjects.map((subj) => (
//                   <span key={subj} className="bg-gray-100 px-2 py-1 rounded-full text-sm">
//                     {subj}
//                   </span>
//                 ))}
//               </div>
//               <div className="text-lg font-medium">${tutor.hourlyRate}/hr</div>
//               <div className="text-sm text-gray-600">{tutor.location}</div>
//               <div className="text-yellow-500">{renderStars(tutor.ratings)} ({tutor.ratings})</div>
//             </div>
//           </div>

//           <div className="mt-4 border-t pt-4">
//             <h3 className="text-lg font-semibold mb-2">Booking</h3>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
//                 <Controller
//                   control={control}
//                   name="subject"
//                   defaultValue={tutor.subjects[0]}
//                   render={({ field }) => (
//                     <select {...field} id="subject" className="w-full border rounded px-3 py-2">
//                       {tutor.subjects.map((subject) => (
//                         <option key={subject} value={subject}>{subject}</option>
//                       ))}
//                     </select>
//                   )}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
//                 <Controller
//                   control={control}
//                   name="availability"
//                   defaultValue={`${tutor.availability[0].day} ${tutor.availability[0].startTime}–${tutor.availability[0].endTime}`}
//                   render={({ field }) => (
//                     <select {...field} id="availability" className="w-full border rounded px-3 py-2">
//                       {tutor.availability.map((slot, idx) => (
//                         <option key={idx} value={`${slot.day} ${slot.startTime}–${slot.endTime}`}>
//                           {`${slot.day} ${slot.startTime} – ${slot.endTime}`}
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 />
//               </div>

//               {/* <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//                 Book Now
//               </button> */}
//             </form>

//           </div>

//           {submittedData && (
//             <div className="mt-4 p-4 bg-green-100 rounded-lg">
//               <p className="font-semibold">Booking Confirmed:</p>
//               <p>Subject: {submittedData.subject}</p>
//               <p>Time: {submittedData.availability}</p>
//             </div>
//           )}

//         </div>
//       ))}

//     </div>
//   );
// }

export default function SeachBarUI({ tutors }: Props) {
  const { control, handleSubmit } = useForm<BookingFormData>();
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);
    console.log("Booking submitted:", data);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    return "★".repeat(fullStars);
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
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div className="flex justify-center">
        
        <div className="flex w-full max-w-xl gap-2">
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by subject, grade, or tutor name..."
            className="bg-white"
          />
          <Button>Search</Button>
        </div>
      </div>

      {showResults && (
        <div className="text-right mb-4">
          <Link href="http://localhost:3000/tutor">
            <Button>View all tutors</Button>
          </Link>
        </div>
      )}

      {showResults && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredTutors.map((tutor) => (
            <div
              key={tutor._id}
              className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{tutor.bio}</h2>
                <div className="flex flex-wrap gap-2">
                  {tutor.subjects.map((subj) => (
                    <span
                      key={subj}
                      className="bg-gray-100 px-2 py-1 rounded-full text-sm"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
                <div className="text-lg font-medium">
                  ${tutor.hourlyRate}/hr
                </div>
                <div className="text-sm text-gray-600">{tutor.location}</div>
                <div className="text-yellow-500">
                  {renderStars(tutor.ratings)} ({tutor.ratings})
                </div>
              </div>

              <div className="mt-4 border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Subject Schedule</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium"
                    >
                      Subject
                    </label>
                    <Controller
                      control={control}
                      name="subject"
                      defaultValue={tutor.subjects[0]}
                      render={({ field }) => (
                        <select
                          {...field}
                          id="subject"
                          className="w-full border rounded px-3 py-2"
                        >
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
                    <label
                      htmlFor="availability"
                      className="block text-sm font-medium"
                    >
                      Availability
                    </label>
                    <Controller
                      control={control}
                      name="availability"
                      defaultValue={`${tutor.availability[0].day} ${tutor.availability[0].startTime}–${tutor.availability[0].endTime}`}
                      render={({ field }) => (
                        <select
                          {...field}
                          id="availability"
                          className="w-full border rounded px-3 py-2"
                        >
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
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="font-semibold">Booking Confirmed:</p>
                  <p>Subject: {submittedData.subject}</p>
                  <p>Time: {submittedData.availability}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
