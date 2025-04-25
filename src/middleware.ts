import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Utility function to decode the token
const decodeToken = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  if (token) {
    const decodedToken = decodeToken(token);
    const role = decodedToken?.role;

    console.log("Decoded Role:", role);  // Log role to check if it's correct

    // For dashboard routes, protect based on role
    if (pathname.startsWith("/dashboard")) {
      if (role === "tutor" && !pathname.startsWith("/dashboard/tutor")) {
        // Redirect tutor to tutor's specific dashboard route
        return NextResponse.redirect(new URL("/dashboard/tutor", request.url));
      }

      if (role === "student" && !pathname.startsWith("/dashboard/student")) {
        // Redirect student to student's specific dashboard route
        return NextResponse.redirect(new URL("/dashboard/student", request.url));
      }
    }
  } else {
    // If no token exists, redirect to login page for private routes
    if (pathname.startsWith("/dashboard") && !pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Avoid redirection to login if already on login page
  if (pathname === "/login" && token) {
    // If the user is already logged in and trying to access login, redirect to the dashboard
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
