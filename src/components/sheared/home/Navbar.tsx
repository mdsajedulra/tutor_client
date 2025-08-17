"use client";

import { useState } from "react";
import { Book, User, Menu, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, setUser } = useUser();

  //(user);

  const handleLogout = async () => {
    try {
      await logout();

      setUser(null);
    } catch (error) {
      console.log(error);
      //("Logout failed:", error);
    }
  };

  const navItems = [
    { name: "Find Tutor", href: "/tutor" },
    { name: "FAQ", href: "/faq" },
    { name: "Blogs", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  // const logOut = logout();

  return (
    <header className=" sticky top-0 z-50 w-full border-b py-4 bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Book className="h-8 w-8 text-tutor-primary" />
          <span className="text-2xl font-display font-bold text-tutor-primary">
            TutorLink
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="font-medium hover:text-tutor-primary transition-colors"
            >
              {nav.name}
            </Link>
          ))}
          {/* <MegaMenu /> */}
        </nav>

        {/* Desktop Buttons */}
        {!user ? (
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="flex gap-2 items-center">
              <User size={18} />
              <Link href="/login">
                <span>Sign In</span>
              </Link>
            </Button>
            <Link href="/signupstudent">
              <Button variant="outline">Sign Up as Student</Button>
            </Link>
            <Link href="/signuptutor">
              <Button>Become a Tutor</Button>
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-3">
            <Button onClick={handleLogout}>Log Out</Button>
            <Button>
              <Link href={"/dashboard"}>Dashboard</Link>
            </Button>
          </div>
        )}

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg border-t py-4">
          <nav className="flex flex-col gap-4 px-4">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.href}
                className="font-medium hover:text-tutor-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
            {/* <MegaMenu /> */}
            {!user ? (
              <div>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/signupstudent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full">
                    Sign Up as Student
                  </Button>
                </Link>
                <Link
                  href="/signuptutor"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full">Become a Tutor</Button>
                </Link>
              </div>
            ) : (
              <div className=" md:flex items-center gap-3">
                <Button onClick={handleLogout}>Log Out</Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
