import { IUser } from "./user";

export * from "./user"

export interface AvailabilitySlot {
    day: string;
    slots: string[];
  }
  
  export interface Tutor {
    _id: string;
    name: string;
    profilePicture: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    rating: number;
    location: string;
    availability: AvailabilitySlot[];
    user: IUser
  }

