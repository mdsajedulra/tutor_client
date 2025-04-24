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
import { updateTutorProfile } from "@/services/Tutor";
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

export default function UpdateProfile() {
  const { register, handleSubmit, control } = useForm<TutorFormData>({
    defaultValues: {
      subjects: [],
      availability: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "availability",
  });

  const [subject, setSubject] = useState<ISubject[] | null>();
  // const { uploadImage, loading } = useImageUpload(); // 👈 useImageUpload hook call

  // const profilePictureUrl = watch("profilePicture"); // 👈 watch profilePicture url

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await getCurrentUser();
  //     setUser(user);
  //     setValue("name", user?.name || "");
  //     setValue("email", user?.email || "");
  //   };
  //   fetchUser();
  // }, [setValue]);
  const { user } = useUser();
  console.log(user);
  useEffect(() => {
    const fetchSubject = async () => {
      const subject = await getSubject();
      setSubject(subject.data);
    };
    fetchSubject();
  }, []);
  console.log(subject);
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
    // console.log(updateData);

    const userId = user?._id as string;

    const res = await updateTutorProfile(userId, updateData);
    console.log(res);
    if (res.success) {
      toast.success(res?.message);
    }
    if (res.success === false) {
      toast.error(res.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-3xl mx-auto p-6  rounded-xl shadow border w-full"
    >
      {/* Name */}
      <div className="text-center font-bold text-3xl">Manage Profile</div>
      <div>
        <Label>Name</Label>
        <Input defaultValue={user?.name} disabled {...register("name")} />
      </div>

      {/* Email */}
      <div>
        <Label>Email</Label>
        <Input
          disabled
          defaultValue={user?.email}
          type="email"
          {...register("email")}
        />
      </div>

      {/* Profile Picture Upload */}
      {/* <div className="flex flex-col gap-2">
        <Label>Profile Picture</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const imageUrl = await uploadImage(file);
              if (imageUrl) {
                setValue("profilePicture", imageUrl);
              }
            }
          }}
        />
        {loading && <p className="text-sm text-blue-500">Uploading...</p>}

        {profilePictureUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={profilePictureUrl}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full mt-2"
          />
        )}
      </div> */}

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

      {/* Availability Slots */}
      <div className="flex flex-col gap-4">
        <Label>Availability</Label>

        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-3">
            <Controller
              control={control}
              name={`availability.${index}.day`}
              render={({ field }) => (
                <Select
                  required= {true}
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
        Complete Profile
      </Button>
    </form>
  );
}
