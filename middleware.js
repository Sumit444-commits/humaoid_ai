import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/createaccount' || path === '/agents' || path === '/';
  const token = request.cookies.get('token')?.value || "";

  if (isPublicPath && token) {
    // If the user is authenticated and trying to access a public path, redirect them to /agents
    return NextResponse.redirect(new URL('/agents', request.url));
  }
  if (!isPublicPath && !token) {
    // If the user is not authenticated and trying to access a protected path, redirect them to /login
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/playground',
    '/datasetup',
    '/integrationsetting',
    '/login',
    '/createaccount',
    '/agents',
    '/'
  ],
};
