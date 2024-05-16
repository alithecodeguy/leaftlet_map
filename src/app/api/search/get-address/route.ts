// types
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  // params
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  // response
  return Response.json({
    address: ['شهر تست', 'خیابان تست'],
    cordinate: { lat, lng },
  });
}
