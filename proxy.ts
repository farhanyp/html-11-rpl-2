import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/session';
import { cookies } from 'next/headers';

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = path === '/login' || path === '/register' || path === '/unauthorized';
  const isProtectedRoute = !isPublicRoute;

  const cookieStore = await cookies();
  const sessionValue = cookieStore.get('session')?.value;
  const session = sessionValue ? await decrypt(sessionValue) : null;

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (isPublicRoute && session) {
    // Redirect based on role if they try to access login but already logged in
    if (session.role === 'SUPERADMIN' || session.role === 'GURU') {
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    } else {
      return NextResponse.redirect(new URL('/', req.nextUrl));
    }
  }

  // Role-based protection
  if (session && path.startsWith('/dashboard') && session.role !== 'SUPERADMIN' && session.role !== 'GURU') {
    return NextResponse.redirect(new URL('/unauthorized', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - \..* (matches any file with an extension, like .png, .css, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
