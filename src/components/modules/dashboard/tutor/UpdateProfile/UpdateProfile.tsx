/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Select from "react-select";
import { getSubject } from "@/services/Subject";
import { ISubject } from "@/types/subject";
import { getTutorByUserId, updateTutorProfile } from "@/services/Tutor";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { ITeacherProfileAdvanced } from "@/types/tutor";
import Link from "next/link";

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

export default function UpdateProfile() {
  const { user } = useUser();
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

  const [tutor, setTutor] = useState<ITeacherProfileAdvanced | null>();
  const [subject, setSubject] = useState<ISubject[] | null>();

  useEffect(() => {
    const fetchSubject = async () => {
      const subject = await getSubject();
      setSubject(subject?.data);
    };
    fetchSubject();
  }, []);

  const subs = subject?.map((sub) => sub?.name);

  const onSubmit = async (data: TutorFormData) => {
    const updateData = {
      user: user?._id,
      bio: data?.bio,
      subjects: data?.subjects,
      hourlyRate: data?.hourlyRate,
      availability: data?.availability.map((slot) => ({
        day: slot.day,
        startTime: slot.startTime,
        endTime: slot.endTime,
      })),
      location: data?.location,
      profilePicture: data?.profilePicture,
      email: user?.email,
    };

    const userId = user?._id as string;
    const res = await updateTutorProfile(userId, updateData);

    if (res.success) {
      toast.success(res?.message);
    } else {
      toast.error(res.message);
    }
  };

  useEffect(() => {
    const fetchTutorData = async () => {
      const res = await getTutorByUserId(user?._id as string);
      const fetchedTutor = res?.data;
      setTutor(fetchedTutor);

      if (fetchedTutor) {
        setValue("bio", fetchedTutor.bio || "");
        setValue("hourlyRate", fetchedTutor.hourlyRate || 0);
        setValue("location", fetchedTutor.location || "");
        setValue("availability", fetchedTutor.availability || []);
        setValue("subjects", fetchedTutor.subjects || []);
      }
    };
    fetchTutorData();
  }, [user?._id, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6 rounded-xl shadow border w-full"
    >
      <div className="text-center font-bold text-3xl">Manage Profile</div>

      {/* Name */}
      <div>
        <Label>Name</Label>
        <Input defaultValue={user?.name} disabled {...register("name")} />
      </div>

      {/* Email */}
      <div>
        <Label>Email</Label>
        <Input
          defaultValue={user?.email}
          disabled
          type="email"
          {...register("email")}
        />
      </div>

      {/* Bio */}
      <div>
        <Label>Bio</Label>
        <Textarea {...register("bio", { required: true })} />
      </div>

      {/* Subjects */}
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
          <div>If your subject is not listed, please go to Subject Management and add it there. <Link className="text-blue-700 underline" href="/dashboard/subjectmanage">Click Here</Link></div>
      {/* Hourly Rate */}
      <div>
        <Label>Hourly Rate (BDT)</Label>
        <Input
          type="number"
          {...register("hourlyRate", { required: true, valueAsNumber: true })}
          
        />
      </div>

      {/* Location */}
      <div>
        <Label>Location</Label>
        <Input {...register("location", { required: true })} />
      </div>

      {/* Availability */}
      <div className="flex flex-col gap-4">
        <Label>Availability</Label>
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
        >
          + Add Slot
        </Button>
      </div>

      <Button type="submit" className="w-full py-6 text-lg rounded-full">
        Complete Profile
      </Button>
    </form>
  );
}
