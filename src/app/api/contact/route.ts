import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error('RESEND_API_KEY not set');
    resendInstance = new Resend(key);
  }
  return resendInstance;
}

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;
const ipTimestamps = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return false;
  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const FROM = 'Dine Castle Rock <canoncity@epicai.ai>';
const TO = process.env.CONTACT_TO_EMAIL || 'Trace.hildebrand@gmail.com';
const SITE_URL = 'https://dinecastlerock.co';

const C = {
  primary: '#C04E20',
  primaryLight: '#E5692F',
  gold: '#D4A03E',
  dark: '#1a1a1a',
  darker: '#0d0d0d',
  darkest: '#0a0a0a',
  border: '#333333',
};

function emailWrapper(title: string, content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: ${C.dark};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${C.dark}; padding: 40px 20px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%;">
<!-- Header -->
<tr><td bgcolor="${C.primary}" style="background-color: ${C.primary}; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
  <p style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700;">Dine Castle Rock</p>
  <p style="margin: 6px 0 0; color: #ffffff; font-size: 13px; opacity: 0.8;">Castle Rock's Premier Dining Guide</p>
</td></tr>
<!-- Gold Banner -->
<tr><td bgcolor="${C.gold}" style="background-color: ${C.gold}; padding: 12px 30px; text-align: center;">
  <p style="margin: 0; color: ${C.darker}; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;">${title}</p>
</td></tr>
<!-- Body -->
<tr><td bgcolor="${C.darker}" style="background-color: ${C.darker}; padding: 30px; border-left: 1px solid ${C.border}; border-right: 1px solid ${C.border};">
${content}
</td></tr>
<!-- Footer -->
<tr><td bgcolor="${C.darkest}" style="background-color: ${C.darkest}; padding: 24px 30px; border: 1px solid ${C.border}; border-top: none; text-align: center;">
  <p style="margin: 0 0 8px; color: ${C.gold}; font-size: 13px; font-weight: 600;">Castle Rock's Premier Dining Guide</p>
  <p style="margin: 0 0 12px; color: #999; font-size: 12px;">Castle Rock, Colorado</p>
  <a href="${SITE_URL}" style="display: inline-block; border: 1px solid ${C.gold}; color: ${C.gold}; padding: 8px 24px; border-radius: 6px; text-decoration: none; font-size: 12px; font-weight: 600; letter-spacing: 1px;">DINECASTLEROCK.CO</a>
</td></tr>
<tr><td style="padding: 16px 30px; text-align: center;">
  <p style="margin: 0; color: #555; font-size: 11px;">Sent from the contact form at <a href="${SITE_URL}" style="color: ${C.primaryLight}; text-decoration: none;">dinecastlerock.co</a></p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a minute and try again.' },
      { status: 429, headers: { 'Retry-After': '60' } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (
    !name || typeof name !== 'string' || name.trim().length < 2 ||
    !email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message || typeof message !== 'string' || message.trim().length < 10
  ) {
    return NextResponse.json(
      { error: 'Please fill in all required fields.' },
      { status: 422 }
    );
  }

  const subjectLine = subject && typeof subject === 'string' && subject.trim()
    ? subject.trim()
    : 'Dine Castle Rock — Contact Form';

  const safeSubject = subjectLine.replace(/[\r\n]/g, '');
  const safeName = escapeHtml(name.trim().replace(/[\r\n]/g, ''));
  const safeEmail = escapeHtml(email.trim().replace(/[\r\n]/g, ''));
  const safeMessage = escapeHtml(message.trim());

  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Denver',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  try {
    const resend = getResend();
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      subject: safeSubject,
      html: emailWrapper('New Contact Form Submission', `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: ${C.dark}; border-radius: 8px; margin-bottom: 24px;">
    <tr><td style="padding: 20px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding-bottom: 12px; border-bottom: 1px solid ${C.border};">
          <p style="margin: 0 0 4px; color: ${C.gold}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">From</p>
          <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">${safeName}</p>
        </td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid ${C.border};">
          <p style="margin: 0 0 4px; color: ${C.gold}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
          <a href="mailto:${safeEmail}" style="color: ${C.primaryLight}; text-decoration: none; font-size: 15px;">${safeEmail}</a>
        </td></tr>
        <tr><td style="padding: 12px 0; border-bottom: 1px solid ${C.border};">
          <p style="margin: 0 0 4px; color: ${C.gold}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
          <p style="margin: 0; color: #ffffff; font-size: 15px;">${safeSubject}</p>
        </td></tr>
        <tr><td style="padding-top: 12px;">
          <p style="margin: 0 0 4px; color: ${C.gold}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Received</p>
          <p style="margin: 0; color: #cccccc; font-size: 14px;">${timestamp}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
    <tr><td>
      <p style="margin: 0 0 10px; color: ${C.gold}; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
      <div style="background-color: ${C.dark}; border-radius: 8px; padding: 20px; border-left: 3px solid ${C.primary};">
        <p style="margin: 0; color: #ffffff; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${safeMessage.replace(/\n/g, '<br>')}</p>
      </div>
    </td></tr>
  </table>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr><td align="center">
      <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display: inline-block; background-color: ${C.primary}; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${safeName}</a>
    </td></tr>
  </table>
`),
      text: `New Contact: ${name.trim()}\n\nEmail: ${email.trim()}\nSubject: ${subjectLine}\nReceived: ${timestamp}\n\nMessage:\n${message.trim()}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact/route] Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
