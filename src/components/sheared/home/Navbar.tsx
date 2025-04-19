"use client"


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href={"/"}>TutorLink 🎓</Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex w-1/3">
        <Input placeholder="Search tutors by subject, grade, or name..." />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/about">
          <Button variant="outline"
          className={pathName === '/about'?"bg-blue-400 text-white text-bold":""}
          >About Us</Button>
        </Link>

        <Link href="/faq">
          <Button variant="outline"
          className={pathName === '/faq'?"bg-blue-400 text-white text-bold":""}
          >FAQ</Button>
        </Link>

        <Link href="/blog">
          <Button variant="outline"
          className={pathName === '/blog'?"bg-blue-400 text-white text-bold":""}
          >Blogs</Button>
        </Link>

        <Link href="/signupstudent">
          <Button variant="outline">Sign Up as Student</Button>
        </Link>
        <Link href="/signuptutor">
          <Button>Register as Tutor</Button>
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
    </nav>
  );
}
