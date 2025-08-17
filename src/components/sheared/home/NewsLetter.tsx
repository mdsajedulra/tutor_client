"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate newsletter subscription API
    setTimeout(() => {
      toast.success("You’ve been subscribed to our newsletter! 🎉");
      setEmail("");
    }, 800);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 to-white">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">📩 Stay Updated</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for the latest updates, study tips, and
          exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" className="w-full sm:w-auto">
            Subscribe
          </Button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          We care about your privacy. No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
