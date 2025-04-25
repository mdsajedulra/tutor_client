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
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  // ✅ 1. Allow access to login page if not authenticated
  if (!token && pathname === "/login") {
    return NextResponse.next();
  }

  // ✅ 2. Redirect unauthenticated users from dashboard to login
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ 3. Redirect logged in users away from login page
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ 4. Handle role-based dashboard access
  if (token && pathname.startsWith("/dashboard")) {
    const decodedToken = decodeToken(token);
    const role = decodedToken?.role;

    if (role === "tutor" && !pathname.startsWith("/dashboard/tutor")) {
      return NextResponse.redirect(new URL("/dashboard/tutor", request.url));
    }

    if (role === "student" && !pathname.startsWith("/dashboard/student")) {
      return NextResponse.redirect(new URL("/dashboard/student", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
