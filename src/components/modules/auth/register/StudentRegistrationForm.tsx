/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import { registerUser } from "@/services/AuthService";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Please enter name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function StudentRegistrationForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
    //   console.log(data);
      
      const res = await registerUser(data);
      console.log(res);
      if (res?.success) {
        toast.success(res?.message);
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/login");
        }
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error("erro", err);
      toast.error(err?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6  rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center">Create Student Account</h2>
        {/* <p className="text-sm text-center">On Superprof you can teach over 1,000 subjects! Use the search engine to find the subject you teach and let the fun begin :)</p> */}


        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                {/* Forgot Password? */}
              </Link>
            </div>
            <FormMessage />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
