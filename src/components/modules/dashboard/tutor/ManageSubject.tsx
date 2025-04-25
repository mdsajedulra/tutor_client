"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { createSubject } from "@/services/Subject";

type SubjectFormData = {
  name: string;
  gradeLevel: string;
  category: string;
};

export default function ManageSubject() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubjectFormData>();

  const onSubmit = async (data: SubjectFormData) => {
    try {
      const res = await createSubject(data)
      console.log(res);

   
      if (res?.success) {
          toast.message(res?.message);
          reset();
      } else {
        toast.error(res?.message || "Something went wrong.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Network error!");
    }
  };

  return (
   <div>
     <Card className="max-w-md mx-auto mt-10">
      <CardContent className="space-y-6 py-8">
        <h1 className="text-green-500 text-center">You can create subjects here and add them to your profile from the Manage Profile page.</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Subject Name</Label>
            <Input id="name" {...register("name", { required: true })} />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>

          <div>
            <Label htmlFor="gradeLevel">Grade Level</Label>
            <Input
              id="gradeLevel"
              {...register("gradeLevel", { required: true })}
              placeholder="e.g. Class 9"
            />
            {errors.gradeLevel && (
              <p className="text-red-500 text-sm">Grade level is required</p>
            )}
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              {...register("category", { required: true })}
              placeholder="e.g. Science"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">Category is required</p>
            )}
          </div>

          <Button type="submit" className="w-full py-6 text-lg rounded-full">
            Add Subject
          </Button>
        </form>
      </CardContent>
    </Card>
   </div>
  );
}
