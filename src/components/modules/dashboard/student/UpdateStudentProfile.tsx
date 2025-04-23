/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/AuthService";
import { useEffect, useState } from "react";
import { IUser } from "@/types";
import Select from "react-select"; // react-select import
import { updateTutorProfile } from "@/services/Tutor";
import { toast } from "sonner";
import { getSubject } from "@/services/Subject";

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
// export interface ISub {
//   _id: string
//   name: string
//   gradeLevel: string
//   category: string
//   createdAt: string
//   updatedAt: string
//   __v: number
// }
export default function UpdateStudentForm() {
  const router = useRouter();
  const { register, handleSubmit, control, reset, setValue } = useForm<TutorFormData>({
    defaultValues: {
      subjects: [],
      availability: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availability",
  });

  const [user, setUser] = useState<IUser | null>(null);
  const [subject, setSubject] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
      setValue("name", user?.name || "");
      setValue("email", user?.email || "");
    };
    fetchUser();
  }, [setValue]);
  useEffect(() => {
    const fetchSubject = async () => {
      const subject = await getSubject();
      setSubject(subject)
      
    };
    fetchSubject();
  }, []);
  // console.log(subject);

  const subs = subject?.data.map((sub: { category: any; }) => (sub?.category))


  const onSubmit = async (data: TutorFormData) => {
    
    const updateData = {
      user: user?._id,
      bio: data?.bio,
      subjects: data?.subjects,
      hourlyRate: data?.hourlyRate,
      availability: data?.availability.map((slot) => ({
        day: slot.day, // day name only
        startTime: slot.startTime,
        endTime: slot.endTime,
      })),
      location: data?.location,
      email: user?.email,
    };
    console.log(updateData);
    const res = await updateTutorProfile(updateData)
   if(res.success) {
    toast.success("Your profile is ready as a tutor");
   }
    if(res.success === false){
      toast.error(res.message)
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow"
    >
      {/* Name */}
      <div>
        <Label>Name</Label>
        <Input disabled {...register("name")} />
      </div>

      {/* Email */}
      <div>
        <Label>Email</Label>
        <Input disabled type="email" {...register("email")} />
      </div>

      {/* Profile Pic */}
      <div>
        <Label>Profile Picture URL</Label>
        <Input {...register("profilePicture", { required: true })} />
      </div>

      {/* Bio */}
      <div>
        <Label>Bio</Label>
        <Textarea {...register("bio", { required: true })} />
      </div>

      {/* Subjects Multi Select */}
      <div className="flex flex-col gap-2">
        <Label>Subjects</Label>
        <Controller
          control={control}
          name="subjects"
          render={({ field }) => (
            <div className="flex flex-wrap gap-3">
              {subs?.map((sub: string, index: number) => (
                <Button
                  type="button"
                  key={index}
                  variant={field.value.includes(sub) ? "default" : "outline"}
                  onClick={() => {
                    if (field.value.includes(sub)) {
                      field.onChange(field.value.filter((s) => s !== sub));
                    } else {
                      field.onChange([...field.value, sub]);
                    }
                  }}
                  className="capitalize rounded-full px-6 py-2"
                >
                  {sub}
                </Button>
              ))}
            </div>
          )}
        />
      </div>

      {/* Hourly Rate */}
      <div>
        <Label>Hourly Rate (BDT)</Label>
        <Input type="number" {...register("hourlyRate", { required: true, valueAsNumber: true })} />
      </div>

      {/* Location */}
      <div>
        <Label>Location</Label>
        <Input {...register("location", { required: true })} />
      </div>

      {/* Availability Slots */}
      <div className="flex flex-col gap-4">
        <Label>Availability</Label>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-3">
            {/* Day Selection */}
            <Controller
              control={control}
              name={`availability.${index}.day`}
              render={({ field }) => (
                <Select
                  value={availableDays.find((option) => option.value === field.value)} // bind value correctly
                  options={availableDays}
                  placeholder="Select Day"
                  onChange={(selectedOption: any) => field.onChange(selectedOption?.value)} // Store only the day name
                  className="w-1/3"
                />
              )}
            />

            {/* Start Time */}
            <Input
              type="time"
              {...register(`availability.${index}.startTime`, { required: true })}
              className="w-1/4"
            />

            {/* End Time */}
            <Input
              type="time"
              {...register(`availability.${index}.endTime`, { required: true })}
              className="w-1/4"
            />

            {/* Remove Button */}
            <Button type="button" variant="destructive" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        ))}

        {/* Add Slot Button */}
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
        Register as Tutor
      </Button>
    </form>
  );
}
