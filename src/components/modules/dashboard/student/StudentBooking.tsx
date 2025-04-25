"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@/context/UserContext";

import { IBooking } from "@/types/booking";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { getBookingByStudentId } from "@/services/booking";
import { PayModal } from "../../payment/PayModal";
import Loader from "@/components/sheared/spinner/spinner";

const StudentBookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await getBookingByStudentId(user?._id as string);
      console.log(res);
      if (Array.isArray(res?.data)) {
        setBookings(res.data);
      } else if (res?.data) {
        setBookings([res.data]); // single object
      } else {
        setBookings([]);
      }
    };
    fetchBookings();
  }, [user?._id]);

  if (!user) return <div><Loader/></div>;

  return (
    <Table>
      <TableCaption>Your Bookings</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking, index) => (
          <TableRow key={index}>
            <TableCell>{format(new Date(booking.date), "PP")}</TableCell>
            <TableCell>
              {booking.timeSlot.startTime} - {booking.timeSlot.endTime}
            </TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 text-sm rounded-full ${
                  booking.status === "pending"
                    ? "bg-yellow-200 text-yellow-800"
                    : booking.status === "accepted"
                    ? "bg-green-200 text-green-800"
                    : booking.status === "Pending"
                    ?  "bg-red-500 text-white"
                    : booking.status === "Paid"
                    ? "bg-green-500"
                    : "bg-red-200 text-red-800"
                    
                }`}
              >
                {booking.status==="Pending"? <span >{"Payment Failed"}</span>: <span>{booking.status}</span>}
              </span>
            </TableCell>
            <TableCell className="text-center">
              {booking.status === "accepted" && <PayModal book={booking} />}
              {booking.status === "rejected" && (
                <span className="text-red-600 italic">
                  Sorry, booking rejected
                </span>
              )}
              {/* {booking.status === "Pending" && (
                <span className="text-red-600 ">
                  Payment Failed
                </span>
              )} */}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentBookings;
