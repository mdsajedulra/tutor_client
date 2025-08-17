

export * from "./user"

export interface AvailabilitySlot {
    startTime: string;
    endTime: string;
    day: string;
    slots: string[];
  }
  
  export interface Tutor {
    email: string;
    totalEarnings: number;
    _id: string;
    name: string;
    image: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    ratings: number;
    location: string;
    availability: AvailabilitySlot[];
    user: string
  }

