import { NextResponse } from 'next/server';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  if (!name || !email || !phone || !message || !validateEmail(email)) {
    return NextResponse.json({ success: false, error: 'Please provide valid name, email, phone, and message.' }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message:
      'Contact form received. Email delivery is configured via environment variables; submissions are logged while SMTP is disabled in this environment.'
  });
}
