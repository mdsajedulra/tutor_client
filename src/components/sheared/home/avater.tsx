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

export function AvatarMenu() {
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
      console.log("Logout successful, staying on current public route.");
    }
  };

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{user?.name?.[0] ?? "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="text-center">{user?.name}</div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard">My Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/booking">Booking</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/profile">My Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
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
  );
}
