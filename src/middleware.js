import { NextResponse } from "next/server";

export function middleware(request) {

    const pathname = request.nextUrl.pathname;
    const token = request.headers.get("Authorization")
    console.log('check token', token)
    // if (pathname.startsWith('/dashboard')) {
    //     if (!token) {
    //         const response = NextResponse.redirect(new URL('/login', request.url))
    //         response.cookies.set("token", "", { maxAge: 0 })
    //         return response
    //     }
    // }


    // return NextResponse.redirect(new URL('/login', request.url))
}


export const config = {
    matcher: ["/", "/dashboard", "/dashboard/profile", "/dashboard/settings", "/api/:path*"]
}