import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, message } = body;



        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Codenaxa Contact Form <contact@codenaxa.in>',
            to: ['contact@codenaxa.in'],
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #6366f1;">New Project Inquiry</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json(
                { error: 'Failed to send email via Resend.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (error: unknown) {
        console.error('API Error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: 'Failed to process request. ' + errorMessage },
            { status: 500 }
        );
    }
}
