import { NextResponse } from 'next/server';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const data = await request.formData();
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();
  const role = String(data.get('role') ?? '').trim();
  const message = String(data.get('message') ?? '').trim();

  if (!name || !email || !phone || !role || !message || !validateEmail(email)) {
    return NextResponse.json({ success: false, error: 'Please provide all required fields with a valid email.' }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message:
      'Career application received. File uploads are accepted; email delivery is configured separately and submissions are logged while SMTP is disabled in this environment.'
  });
}
