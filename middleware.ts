import { NextRequest, NextResponse } from 'next/server';

// Matcher ignoring `/_next/` and `/api/` and svg files.
export const config = { matcher: ['/((?!api|_next|.*.svg$).*)'] };

export function middleware(request: NextRequest) {
  return NextResponse.next();
}
