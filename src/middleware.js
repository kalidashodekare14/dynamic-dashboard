import { NextResponse } from "next/server";

export function middleware(request) {

    const pathname = request.nextUrl.pathname;
    const token = request.headers.get("Authorization")
    console.log('check token', token)
  
}


export const config = {
    matcher: ["/", "/dashboard", "/dashboard/profile", "/dashboard/settings", "/api/:path*"]
}