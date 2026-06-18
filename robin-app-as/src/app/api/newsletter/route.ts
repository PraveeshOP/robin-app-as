import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  await supabase
    .from('newsletter_subscription')
    .insert({ email });

  await resend.emails.send({
    from: 'Robin AS <noreply@yourdomain.com>',
    to: email,
    subject: 'Thanks for subscribing!',
    html: `
      <h1>Welcome!</h1>
      <p>Thank you for subscribing to Robin AS.</p>
    `,
  });

  return Response.json({ success: true });
}