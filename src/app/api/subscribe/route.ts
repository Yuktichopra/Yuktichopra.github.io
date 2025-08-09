import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();
  console.log('Newsletter subscription request for:', email);

  // TODO: Wire this up to Buttondown/ConvertKit or your preferred newsletter service

  return NextResponse.json({ message: 'Subscription request received!' }, { status: 200 });
}
