// types/teacherTypes.ts

export interface IAvailability {
    day: string;
    startTime: string;
    endTime: string;
  }
  
  export interface ITeacherProfile {
    user: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    availability: IAvailability[];
    ratings: number;
    location: string;
  }
  
  // উন্নত সংস্করণ (ঐচ্ছিক)
  export enum WeekDay {
    MONDAY = 'Monday',
    // ... অন্যান্য দিন
  }
  
  export interface IAvailabilityAdvanced {
    day: WeekDay;
    startTime: string;
    endTime: string;
  }
  
  export interface ITeacherProfileAdvanced {
    user: string;
    bio: string;
    subjects: string[];
    hourlyRate: number;
    availability: IAvailabilityAdvanced[];
    ratings: number;
    location: string;
  }