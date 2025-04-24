"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IBooking } from "@/types/booking";
import { makePayment } from "@/services/Payment";
import { toast } from "sonner";

export function PayModal({ book }: { book: IBooking }) {
  const [hour, setHour] = useState("");
  const [month, setMonth] = useState("");

  const handleSubmit =  async() => {
    const data = {
      tutor: book?.tutorId,
      student: book?.studentId,
      selectedHours: hour, 
      selectedMonths: month
    };
    console.log(data);
    const res = await makePayment(data)
    console.log(res);
    toast.message(res.message)
    
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Pay Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Booking Time</DialogTitle>
          <DialogDescription>
            Provide the hour and day for your booking.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="hour" className="text-right">
              Hour
            </Label>
            <Input
              id="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              className="col-span-3"
              placeholder="Ho many hour"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="day" className="text-right">
              Day
            </Label>
            <Input
              id="day"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="col-span-3"
              placeholder="How many days"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
