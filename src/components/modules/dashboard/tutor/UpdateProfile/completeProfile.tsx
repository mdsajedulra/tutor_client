/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import { useEffect, useState } from "react";

import Select from "react-select";

import { toast } from "sonner";
import { getSubject } from "@/services/Subject";
import useImageUpload from "@/hooks/imgbb/ImgHook";
import { ISubject } from "@/types/subject";
import { completeProfile } from "@/services/Tutor";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import Loader from "@/components/sheared/spinner/spinner";

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

export default function CompleteTutorProfile() {
  const router = useRouter();
  const { register, handleSubmit, control, setValue, watch } =
    useForm<TutorFormData>({
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
  const { uploadImage, loading } = useImageUpload(); // 👈 useImageUpload hook call

  const profilePictureUrl = watch("profilePicture"); // 👈 watch profilePicture url

  const { user, setIsloading } = useUser();

  useEffect(() => {
    if (user) {
      setIsloading(false);
    }
  }, [setIsloading, user]);

  useEffect(() => {
    const fetchSubject = async () => {
      const subject = await getSubject();
      setSubject(subject.data);
    };
    fetchSubject();
  }, []);

  const subs = subject?.map((sub: { name: string }) => sub?.name);

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
      image: data?.profilePicture,
      email: user?.email,
    };
    console.log("update data", updateData);

    const res = await completeProfile(updateData);

    if (res.success) {
      toast.success("Your profile is ready as a tutor");
      router.push("/dashboard");
    }
    if (res.success === false) {
      toast.error(res.message);
    }
  };

  if (!user) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-10 ">
        Complete your profile first
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-xl shadow"
      >
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

        {/* Profile Picture Upload */}
        <div className="flex flex-col gap-2">
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
                {...register(`availability.${index}.endTime`, {
                  required: true,
                })}
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
    </div>
  );
}
