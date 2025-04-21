import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

// ====================== CONFIGURATION SECTION ======================
// (Change these values as per your application needs)

// Define all user roles in your system
const roles = ["student", "tutor", "admin"] as const;
type Role = typeof roles[number];

// Publicly accessible routes (no authentication needed)
const publicRoutes = ["/", "/about", "/courses", "/pricing"];

// Authentication routes (login/register)
const authRoutes = ["/login", "/register", "/forgot-password"];

// Role-based route access patterns
const roleBasedPrivateRoutes: Record<Role, RegExp[]> = {
  student: [
    /^\/tutordashboard/, 
    /^\/dashboard/,
    /^\/my-courses/,
    /^\/assignments/
  ],
  tutor: [
    /^\/tutor/,
    /^\/dashboard/,
    /^\/teaching/,
    /^\/create-content/,
    /^\/earnings/
  ],
  admin: [
    /^\/admin/,
    /^\/manage-users/,
    /^\/system-settings/
  ]
};

// Special access rules (e.g., tutors accessing student routes)
const specialAccessRules: { role: Role; routes: RegExp[] }[] = [
  {
    role: "tutor",
    routes: [/^\/student\/materials/, /^\/student\/resources/]
  }
];

// ====================== MIDDLEWARE IMPLEMENTATION ======================
export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  // [FUTURE CHANGE] Add any new public routes here
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const userInfo = await getCurrentUser();

  // Handle unauthenticated users
  if (!userInfo) {
    // [FUTURE CHANGE] Add any new auth routes here
    if (authRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.next();
    }
    
    // Redirect to login with return URL
    return NextResponse.redirect(
      new URL(
        `/login?redirect=${encodeURIComponent(pathname)}`, 
        request.url
      )
    );
  }

  // Check role-based access
  const userRole = userInfo.role as Role;
  
  // [FUTURE CHANGE] Modify role checks if you add new roles
  if (userRole && roleBasedPrivateRoutes[userRole]) {
    // Check standard role-based routes
    const allowedRoutes = roleBasedPrivateRoutes[userRole];
    if (allowedRoutes.some(route => pathname.match(route))) {
      return NextResponse.next();
    }

    // Check special access rules
    const specialAccess = specialAccessRules
      .filter(rule => rule.role === userRole)
      .some(rule => rule.routes.some(route => pathname.match(route)));
    
    if (specialAccess) {
      return NextResponse.next();
    }
  }

  // [FUTURE CHANGE] Customize unauthorized redirect as needed
  return NextResponse.redirect(new URL("/unauthorized", request.url));
};

// ====================== MIDDLEWARE CONFIG ======================
export const config = {
  matcher: [
    // Public routes
    "/",
    "/about",
    "/courses",
    
    // Auth routes
    "/login",
    "/register",
    
    // Student routes
    "/student/:path*",
    "/my-courses/:path*",
    
    // Tutor routes
    "/tutor/:path*",
    "/teaching/:path*",
    
    // Admin routes
    "/admin/:path*",
    
    // Shared routes
    "/dashboard/:path*"
  ]
};