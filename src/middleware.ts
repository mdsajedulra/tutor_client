import { NextRequest, NextResponse } from "next/server";

const roleRoutes: Record<string, string[]> = {
    admin: ['/admin', '/settings'],
    user: ['/dashboard', '/profile']
  }

export function middleware(request: NextRequest){
    const token = localStorage.getItem("token")
    if(!token){
        return NextResponse.redirect(new URL('/login', request.url))

    }
    if (token && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
      }
      return NextResponse.next()
}

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)', 
    ]
  }