"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Avater() {
  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    setUser(null);

    const currentPath = window.location.pathname;

    // Redirect to login page only if on private route
    if (currentPath.startsWith("/dashboard")) {
      router.push("/login");
    } else {
      // If you're on a public route, don't redirect
      console.log(
        "Logout successful, but staying on the current public route."
      );
    }
  };

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="text-center ">{user?.name}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard">My Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard/booking">Booking</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/dashboard/profile">My Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <div onClick={() => handleLogout()}>
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <div>
      {" "}
      <div className="flex items-center gap-4">
        <Link href="/signupstudent">
          <Button variant="outline">Sign Up as Student</Button>
        </Link>
        <Link href="/signuptutor">
          <Button>Register as Tutor</Button>
        </Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
