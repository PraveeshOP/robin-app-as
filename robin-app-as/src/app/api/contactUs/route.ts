import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

    async function sendEmailCustomer(firstName: string, email: string) {
        const { data, error } = await resend.emails.send({
            from: "Robin App <contact@resend.dev>",
            to: [email],
            subject: "Hello world",
            html: `<h1>Hello ${firstName}!</h1><p>Thank you for contacting us. We will get back to you shortly.</p>`,
        });
        return { data, error };
    }

    async function sendEmailInternal(email: string, subject: string, message: string) {
        const { data, error } = await resend.emails.send({
            from: "Robin App <contact@resend.dev>",
            to: [email],
            subject: subject,
            html: `<h1>Hello!</h1><p>${message}</p>`,
        });
        return { data, error };
    }

  try {
    const body = await req.json();

    console.log("Body:", body);

    const { data: customerData, error: customerError } = await sendEmailCustomer(body.firstName, body.email);
    const { data: internalData, error: internalError } = await sendEmailInternal(body.internalEmail, body.subject, body.message);

    console.log("Resend data:", customerData);
    console.log("Resend error:", customerError);
    console.log("Resend data:", internalData);
    console.log("Resend error:", internalError);

    if (customerError) {
      return Response.json({ error: customerError }, { status: 500 });
    }
    if (internalError) {
      return Response.json({ error: internalError }, { status: 500 });
    }

    return Response.json(customerData);
  } catch (error) {
    console.error("API ERROR:", error);

    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }

}