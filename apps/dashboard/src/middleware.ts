import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = cookies().get('token')?.value

  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  if (!apiUrl) {
    throw new Error('Missing API_URL')
  }

  if (token) {
    try {
      const response = await fetch(`${apiUrl}/user`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (data.role === 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard/home', request.url))
      }
    } catch (err) {
      console.log(err)

      return NextResponse.redirect(new URL('/auth', request.url))
    }
  }

  return NextResponse.redirect(new URL('/auth', request.url))
}

export const config = {
  matcher: ['/', '/dashboard/:path'],
}
