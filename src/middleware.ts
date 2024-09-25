import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  if (!req.auth) {
    const destination = req.nextUrl.clone();
    destination.pathname = '/api/auth/signin';
    return NextResponse.redirect(destination);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/', '/dashboard'],
};
