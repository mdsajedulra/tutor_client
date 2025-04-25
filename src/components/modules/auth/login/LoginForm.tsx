"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

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
import { loginUser } from "@/services/AuthService";
import Loader from "@/components/sheared/spinner/spinner";
import { jwtDecode } from "jwt-decode";
import { useUser } from "@/context/UserContext";
import { IUser } from "@/types";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginForm() {
  const [isMounted, setIsMounted] = useState(false);
  const {  setUser } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    try {
      const res = await loginUser(data);

      if (res?.success) {
        const decoded: IUser = jwtDecode(res.token); // 👈 decode manually in client
        setUser(decoded); // 👈 update context manually
        toast.success(res.message);
        if (res?.data?.isComplete === false && res?.data?.role === "tutor") {
          router.push(redirect ? redirect : "/completeprofile");
        } else router.push(redirect ? redirect : "/dashboard");
      } else {
        toast.error(res?.message || "An error occurred during login.");
      }
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
        <p className="text-sm text-center">Please login to your account</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account? <br />
          <Link href="/signupstudent" className="text-blue-600 hover:underline">
            Register as a Student
          </Link>
          <br />
          <Link href="/signuptutor" className="text-blue-600 hover:underline">
            Register as a Tutor
          </Link>
        </p>
      </div>
    </div>
  );
}
