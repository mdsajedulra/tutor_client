interface TimeSlot {
  startTime: string;
  endTime: string;
}

export interface IBooking {
  createdAt: string;
  date: string;
  day: string;
  status:
    | "confirmed"
    | "pending"
    | "cancelled"
    | "accepted"
    | "rejected"
    | "Pending"
    | "Paid"; // assuming possible status values
  studentId: string;
  subject: string;
  timeSlot: TimeSlot;
  tutorId: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface IBookingResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: IBooking[];
}
