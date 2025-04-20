/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {toast} from "sonner";

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
import { useLoginMutation } from "@/lib/redux/api/authApi";
import { useAppDispatch } from "@/lib/redux/hooks/hooks";
import { setUser } from "@/lib/redux/features/authSlice";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginPage() {
  const [login, { isLoading }] = useLoginMutation();
  const dispath = useAppDispatch();
  const [loginError, setLoginError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "team2@gmail.com",
      password: "72423855",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      console.log(data);
      const res = await login(data).unwrap();
      console.log(res);
      dispath(
        setUser({
          user: res?.data?.verifiedUser,
          token: res?.data?.token,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.data.verifiedUser));
      localStorage.setItem("token", res.data.token);
      toast.success("Logged in successfully!");
    } catch (error: any) {
      const message = error?.data?.message || "Login failed. Please try again.";
      setLoginError(message);
    }

    form.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6  rounded-xl shadow-md">
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
            <FormMessage  />
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
