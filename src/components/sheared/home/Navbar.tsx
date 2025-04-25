"use client"
import { Menu } from "lucide-react";
import Link from "next/link";

import { Avater } from "./avater";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between p-4  shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href={"/"}>TutorLink 🎓</Link>
      </div>

      {/* Search Bar */}

      {/* Buttons */}

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/tutor">
          <Button
            variant="outline"
            className={
              pathName === "/tutor" ? "bg-blue-400 text-white text-bold" : ""
            }
          >
            View All Tutor
          </Button>
        </Link>

        <Link href="/about">
          <Button
            variant="outline"
            className={
              pathName === "/about" ? "bg-blue-400 text-white text-bold" : ""
            }
          >
            About Us
          </Button>
        </Link>

        <Link href="/faq">
          <Button
            variant="outline"
            className={
              pathName === "/faq" ? "bg-blue-400 text-white text-bold" : ""
            }
          >
            FAQ
          </Button>
        </Link>

        <Link href="/blog">
          <Button
            variant="outline"
            className={
              pathName === "/blog" ? "bg-blue-400 text-white text-bold" : ""
            }
          >
            Blogs
          </Button>
        </Link>
      </div>

      <div>{/* <ModeToggle /> */}</div>
      <Avater />
      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
      <div className="md:hidden"></div>
    </nav>
  );
}
