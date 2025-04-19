import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
