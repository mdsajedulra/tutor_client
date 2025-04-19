export interface AvailabilitySlot {
    day: string;
    slots: string[];
  }
  
  export interface Tutor {
    id: string;
    name: string;
    profilePicture: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    rating: number;
    location: string;
    availability: AvailabilitySlot[];
  }