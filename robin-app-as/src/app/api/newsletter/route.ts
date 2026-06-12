import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from('newsletter_subscription')
    .insert({
      email: body.email,
    });

  if (error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return Response.json(data);
}