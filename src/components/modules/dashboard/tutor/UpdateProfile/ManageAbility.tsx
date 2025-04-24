/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useEffect, useState } from "react";
import { IUser } from "@/types";
import Select from "react-select";
import { getTutorById, updateTutorProfile } from "@/services/Tutor";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";

const availableDays = [
  { value: "Monday", label: "Monday" },
  { value: "Tuesday", label: "Tuesday" },
  { value: "Wednesday", label: "Wednesday" },
  { value: "Thursday", label: "Thursday" },
  { value: "Friday", label: "Friday" },
  { value: "Saturday", label: "Saturday" },
  { value: "Sunday", label: "Sunday" },
];

interface AvailabilitySlot {
  day: string;
  startTime: string;
  endTime: string;
}

interface TutorFormData {
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  bio: string;
  subjects: string[];
  hourlyRate: number;
  location: string;
  availability: AvailabilitySlot[];
}

export default function ManageAvailability() {
  const { register, handleSubmit, control, setValue } = useForm<TutorFormData>({
    defaultValues: {
      subjects: [],
      availability: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availability",
  });


  const [tutor, setTutor] = useState<any>(null);

  // 1st: Fetch user
const {user} =useUser

  // 2nd: Fetch tutor info
  useEffect(() => {
    const fetchTutor = async () => {
      if (!user?._id) return;
      const tutor = await getTutorById(user._id);
      setTutor(tutor);
    };
    fetchTutor();
  }, [user]);

  // 3rd: Set form availability when tutor data arrives
  useEffect(() => {
    if (tutor?.data?.availability) {
      setValue("availability", tutor.data.availability);
    }
  }, [tutor, setValue]);

  const onSubmit = async (data: TutorFormData) => {
    const updateData = {
      availability: data.availability.map((slot) => ({
        day: slot.day,
        startTime: slot.startTime,
        endTime: slot.endTime,
      })),
    };

    const userId = user?._id as string;
    const res = await updateTutorProfile(userId, updateData);

    if (res.success) {
      toast.success("Success fully your availability slot updated");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6 rounded-xl shadow border w-full"
    >
      {/* Availability Slots */}
      <div className="flex flex-col gap-4">
        <Label>
          <div className="text-2xl">Availability</div>
          <p>
            If you remove every slot and update yoru availability slot you
            student showing you are not available right now
          </p>
        </Label>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-3">
            <Controller
              control={control}
              name={`availability.${index}.day`}
              render={({ field }) => (
                <Select
                  value={availableDays.find(
                    (option) => option.value === field.value
                  )}
                  options={availableDays}
                  placeholder="Select Day"
                  onChange={(selectedOption: any) =>
                    field.onChange(selectedOption?.value)
                  }
                  className="w-1/3"
                />
              )}
            />
            <Input
              type="time"
              {...register(`availability.${index}.startTime`, {
                required: true,
              })}
              className="w-1/4"
            />
            <Input
              type="time"
              {...register(`availability.${index}.endTime`, { required: true })}
              className="w-1/4"
            />
            <Button
              type="button"
              variant="destructive"
              onClick={() => remove(index)}
            >
              Remove
            </Button>
          </div>
        ))}

        <Button
          type="button"
          onClick={() => append({ day: "", startTime: "", endTime: "" })}
          className="w-fit"
        >
          + Add Slot
        </Button>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full py-6 text-lg rounded-full">
        Update your availability slot
      </Button>
    </form>
  );
}
