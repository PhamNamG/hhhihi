// middleware.ts tại thư mục gốc

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/q/')) {
    const slug = pathname.replace('/q/', '')
    return NextResponse.redirect(`https://hh3dtq.site/phim/${slug}`, 301)
  }

  if (pathname.startsWith('/d/')) {
    const slug = pathname.replace('/d/', '')
    return NextResponse.redirect(`https://hh3dtq.site/xem-phim/${slug}`, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/q/:path*', '/d/:path*'],
}
