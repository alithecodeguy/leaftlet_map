// types
import type { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  // params
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get('address');
  console.log('searched address:');
  console.log(address);

  // response
  return Response.json([
    {
      id: 1,
      lat: 35.713298,
      lng: 51.404343,
      name: 'تست ۱',
      fullAddress: 'آدرس تستی ۱',
    },
    {
      id: 2,
      lat: 35.715298,
      lng: 51.414343,
      name: 'تست 2',
      fullAddress: 'آدرس تستی 2',
    },
    {
      id: 3,
      lat: 35.715198,
      lng: 51.434343,
      name: 'تست 3',
      fullAddress: 'آدرس تستی 3',
    },
  ]);
}
