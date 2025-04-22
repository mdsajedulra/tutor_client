"use client";

import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../dark/dark";

import { Avater } from "./avater";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4  shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href={"/"}>TutorLink 🎓</Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex w-1/3">
        <Input placeholder="Search tutors by subject, grade, or name..." />
      </div>

      {/* Buttons */}

      <div>
        <ModeToggle />
      </div>
      <Avater />
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
      <div className="md:hidden"></div>
    </nav>
  );
}
