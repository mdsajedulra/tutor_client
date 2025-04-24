/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Tutor } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import { createBooking } from "@/services/booking";

export function BookingModal({ tutor }: { tutor: Tutor }) {
  const [open, setOpen] = React.useState(false);
  const [avail, setAvail] = useState<boolean | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ startTime: string; endTime: string } | null>(null);
const {user} = useUser()
  const FormSchema = z.object({
    dob: z.date({
      required_error: "A date is required.",
    }),
    subject: z.string().min(1, "Please select a subject"),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function isTutorAvailableOnDate(dayOfWeek: string, availability: any[]) {
    const match = availability.find((slot) => slot.day === dayOfWeek);

    if (match) {
      return {
        available: true,
        timeSlot: {
          startTime: match.startTime,
          endTime: match.endTime,
        },
      };
    } else {
      return { available: false };
    }
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const dob = new Date(data?.dob);
    const dayOfWeek = dob.toLocaleDateString("en-US", { weekday: "long" });
    const availability = tutor?.availability;
    const result = isTutorAvailableOnDate(dayOfWeek, availability);
    setAvail(result.available);

    if (!result.available) {
      toast.error("Tutor not free this day");
      return;
    }

    const bookingData = {
      tutorId: tutor?.user,
      studentId: user?._id,
      subject: data.subject,
      date: dob.toISOString().split("T")[0],
      day: dayOfWeek,
      timeSlot: result.timeSlot,
    
    };

    console.log("Booking Data:", bookingData);
    try {
     const res =  await createBooking(bookingData)
     console.log(res);
     if(res.success) {
      toast.success(res.message)
      setOpen(false)
    }
    else(
      toast.error(res.message)
    )
    
   } catch (error: any) {
    toast.error(error.message)
    
   }

  };

  const enabledDates = tutor?.availability?.map((slot) => slot.day);

  function isDateEnabled(date: Date) {
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    return enabledDates.includes(day);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Book Now</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Session</DialogTitle>
          <DialogDescription>Select a subject and a date to book your session.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        tutor?.subjects?.map((sub:string, index: number)=> <SelectItem key={index} value={sub}>{sub}</SelectItem>)
                      }
                     
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-[240px] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          field.onChange(date);
                          if (date) {
                            const day = date.toLocaleDateString("en-US", { weekday: "long" });
                            const match = tutor.availability.find((slot) => slot.day === day);
                            if (match) {
                              setSelectedSlot({ startTime: match.startTime, endTime: match.endTime });
                            } else {
                              setSelectedSlot(null);
                            }
                          }
                        }}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01") || !isDateEnabled(date)
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {selectedSlot && (
                    <p className="text-sm text-muted-foreground">
                      Available Time: {selectedSlot.startTime} - {selectedSlot.endTime}
                    </p>
                  )}
                  <FormDescription>Your booking date.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit">Confirm Booking</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
