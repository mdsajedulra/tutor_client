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

export function Avater() {
  const { user, setIsloading } = useUser();

  const handleLogout = () => {
    logout();
    setIsloading(true);
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

        <DropdownMenuItem>
          <div onClick={() => handleLogout()}>Log out</div>
        </DropdownMenuItem>
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
