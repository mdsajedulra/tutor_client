"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/services/AuthService";
import { useEffect, useState } from "react";
import { IUser } from "@/types";

interface TutorFormData {
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  bio: string;
  subjects: string;
  grades: string;
  hourlyRate: number;
  location: string;
}

export default function TutorForm() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<TutorFormData>();

  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      console.log(user);
      setUser(user);
    };
    fetchUser();
  }, []);

  console.log(user);

  const onSubmit = async (data: TutorFormData) => {
    console.log(data);
    // try {
    //   const response = await fetch("/api/tutors", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       ...data,
    //       subjects: data.subjects.split(","),
    //       grades: data.grades.split(","),
    //     }),
    //   });

    //   if (response.ok) {
    //     alert("Tutor registered successfully!");
    //     reset();
    //     router.push("/dashboard/tutor");
    //   } else {
    //     alert("Failed to register tutor.");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   alert("Something went wrong.");
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-xl shadow"
    >
      <div>
        <Label>Name</Label>
        <Input
          defaultValue={user?.name}
          {...register("name", { disabled: true, required: true })}
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          defaultValue={user?.email}
          type="email"
          {...register("email", { disabled: true, required: true })}
        />
      </div>

      <div>
        <Label>Profile Picture URL</Label>
        <Input {...register("profilePicture", { required: true })} />
      </div>
      <div>
        <Label>Bio</Label>
        <Textarea {...register("bio", { required: true })} />
      </div>
      <div>
        <Label>Subjects (comma separated)</Label>
        <Input {...register("subjects", { required: true })} />
      </div>
      {/* <div>
        <Label>Grades (comma separated)</Label>
        <Input {...register("grades", { required: true })} />
      </div> */}
      <div>
        <Label>Hourly Rate (BDT)</Label>
        <Input
          type="number"
          {...register("hourlyRate", { required: true, valueAsNumber: true })}
        />
      </div>
      <div>
        <Label>Location</Label>
        <Input {...register("location", { required: true })} />
      </div>

      <Button type="submit" className="w-full">
        Register as Tutor
      </Button>
    </form>
  );
}
