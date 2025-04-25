"use client";
import { Button } from "@/components/ui/button";
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
import {
  bookingStatusUpdateById,
  getBookingByTutorId,
} from "@/services/booking";
import { IBooking } from "@/types/booking";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import Loader from "@/components/sheared/spinner/spinner";

const BookingRequest = () => {
  const [bookingReq, setBookingReq] = useState<IBooking[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchBookingReq = async () => {
      const res = await getBookingByTutorId(user?._id as string);
      const bookings = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res?.data?.data)
        ? res.data.data
        : [];
      setBookingReq(bookings);
    };
    if (user?._id) {
      fetchBookingReq();
    }
  }, [user?._id]);

  const handleBookingStatus = async (
    bookingId: string,
    bookingStatus: { status: string }
  ) => {
    const updated = await bookingStatusUpdateById(bookingId, bookingStatus);
    const updatedBooking = updated?.data;

    setBookingReq((prev) =>
      prev
        ? prev.map((booking) =>
            booking._id === updatedBooking._id ? updatedBooking : booking
          )
        : [updatedBooking]
    );
  };

  if (!user) return <div><Loader/></div>;

  return (
    <Table>
      <TableCaption>Your recent booking requests</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>S.N</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookingReq?.map((booking, index) => {
          const start = booking.timeSlot.startTime;
          const end = booking.timeSlot.endTime;
          const duration =
            new Date(`1970-01-01T${end}`).getTime() -
            new Date(`1970-01-01T${start}`).getTime();
          const durationHr = duration / (1000 * 60 * 60);

          return (
            <TableRow key={index}>
              <TableCell>{index + 1 || "N/A"}</TableCell>
              <TableCell>{format(new Date(booking.date), "PP")}</TableCell>
              <TableCell>
                {start} - {end}
              </TableCell>
              <TableCell>{durationHr} hr</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    booking.status === "pending"
                      ? "bg-yellow-200 text-yellow-800"
                      : booking.status === "accepted"
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {booking.status}
                </span>
              </TableCell>
              <TableCell className="text-center">
                {booking.status === "pending" && (
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "accepted",
                        })
                      }
                    >
                      Accept
                    </Button>
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "rejected",
                        })
                      }
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </div>
                )}
                {booking.status === "Pending" && (
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "accepted",
                        })
                      }
                    >
                      Accept
                    </Button>
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "rejected",
                        })
                      }
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </div>
                )}
                {booking.status === "accepted" && (
                  <div className="flex gap-2 justify-center">
                    <Button>Accepted</Button>
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "rejected",
                        })
                      }
                      variant="destructive"
                    >
                      Reject
                    </Button>
                  </div>
                )}
                {booking.status === "rejected" && (
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={() =>
                        handleBookingStatus(booking._id, {
                          status: "accepted",
                        })
                      }
                    >
                      Accept
                    </Button>
                    <Button variant="destructive">Rejected</Button>
                  </div>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BookingRequest;
