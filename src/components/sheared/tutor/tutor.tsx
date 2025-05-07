


"use client";
// types/tutor.ts
export interface Availability {
  day: string;
  startTime: string;
  endTime: string;
}

export interface Tutor {
  _id: string;
  name?:string;
  image?:string;
  user: string;
  bio: string;
  email: string;
  subjects: string[];
  hourlyRate: number;
  totalEarnings: number;
  availability: Availability[];
  ratings: number;
  location: string;
}

// components/TutorList.tsx

import { useEffect, useState } from "react";
import { TutorCard } from "./TutorCard";


interface Props {
  tutors?: Tutor[]; // allow it to be optional for safety
}

export default function TutorList({ tutors = [] }: Props) {

    
  console.log("this is all", tutors);
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minRate, setMinRate] = useState("");
  const [maxRate, setMaxRate] = useState("");
  const [availableDay, setAvailableDay] = useState("");

  const [displayedTutors, setDisplayedTutors] = useState<Tutor[]>(tutors);

  useEffect(() => {
    if (!Array.isArray(tutors)) {
      console.warn("⚠️ tutors is not an array");
      setDisplayedTutors([]);
      return;
    }

    let filtered = [...tutors];

    if (subject) {
      filtered = filtered.filter((tutor) =>
        tutor.subjects.some((s) =>
          s.toLowerCase().includes(subject.toLowerCase())
        )
      );
    }

    if (location) {
      filtered = filtered.filter((tutor) =>
        tutor.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (filtered.length === 0) {
      setDisplayedTutors(tutors); // fallback to all tutors
      return;
    }

    // 💰 Filter by hourly rate range
    if (minRate) {
      filtered = filtered.filter(
        (tutor) => tutor.hourlyRate >= parseFloat(minRate)
      );
    }
    if (maxRate) {
      filtered = filtered.filter(
        (tutor) => tutor.hourlyRate <= parseFloat(maxRate)
      );
    }

    // 📅 Filter by available day
    if (availableDay) {
      filtered = filtered.filter((tutor) =>
        tutor.availability?.some(
          (slot) => slot.day.toLowerCase() === availableDay.toLowerCase()
        )
      );
    }

    switch (sortBy) {
      case "rating":
        filtered.sort((a, b) => b.ratings - a.ratings);
        break;
      case "priceLow":
        filtered.sort((a, b) => a.hourlyRate - b.hourlyRate);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.hourlyRate - a.hourlyRate);
        break;
    }

    setDisplayedTutors(filtered);
  }, [tutors, subject, location, sortBy, minRate, maxRate, availableDay]);

  return (
    

    <div className="min-h-screen px-4">
  {/* Filter & Sort Controls */}
  <div className="flex flex-col sm:flex-wrap md:flex-row justify-center items-center gap-4 mb-6">
    <select
      onChange={(e) => setSubject(e.target.value)}
      className="border p-2 w-full sm:w-auto"
    >
      <option value="">All Subjects</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Physics">Physics</option>
      <option value="English Grammar">English Grammar</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Math">Math</option>
      <option value="Accounting">Accounting</option>
      <option value="Economics">Economics</option>
      <option value="Bangla Literature">Bangla Literature</option>
      <option value="Biology">Biology</option>
      <option value="English For Today">English For Today</option>
    </select>

    <input
      type="text"
      placeholder="Location"
      onChange={(e) => setLocation(e.target.value)}
      className="border p-2 w-full sm:w-auto"
    />

    {/* Hourly Rate */}
    <div className="flex gap-2 w-full sm:w-auto">
      <input
        type="number"
        placeholder="Min Rate"
        onChange={(e) => setMinRate(e.target.value)}
        className="border p-2 w-full sm:w-24"
      />
      <input
        type="number"
        placeholder="Max Rate"
        onChange={(e) => setMaxRate(e.target.value)}
        className="border p-2 w-full sm:w-24"
      />
    </div>

    {/* Availability */}
    <select
      onChange={(e) => setAvailableDay(e.target.value)}
      className="border p-2 w-full sm:w-auto"
    >
      <option value="">All Days</option>
      <option value="Monday">Monday</option>
      <option value="Tuesday">Tuesday</option>
      <option value="Wednesday">Wednesday</option>
      <option value="Thursday">Thursday</option>
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>

    <select
      onChange={(e) => setSortBy(e.target.value)}
      className="border p-2 w-full sm:w-auto"
    >
      <option value="">Sort By</option>
      <option value="rating">Rating</option>
      <option value="priceLow">Price: Low to High</option>
      <option value="priceHigh">Price: High to Low</option>
    </select>
  </div>

  {/* Tutor Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.isArray(displayedTutors) && displayedTutors.length > 0 ? (
      displayedTutors.map((tutor) => (
        <TutorCard key={tutor._id} tutor={tutor} />
      ))
    ) : (
      <p className="text-center col-span-full">No tutors found.</p>
    )}
  </div>
</div>

  );
}
