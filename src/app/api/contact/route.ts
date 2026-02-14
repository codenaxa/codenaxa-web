import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

        // Configure the Zoho Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.in',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.ZOHO_USER || 'contact@codenaxa.in',
                pass: process.env.ZOHO_PASSWORD, // Use App Password if MFA is enabled
            },
        });

        const mailOptions = {
            from: `"codenaxa Contact Form" <${process.env.ZOHO_USER || 'contact@codenaxa.in'}>`,
            to: 'contact@codenaxa.in',
            replyTo: email,
            subject: `New Project Inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Message:
${message}
      `,
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
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Nodemailer Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. ' + (error.message || '') },
            { status: 500 }
        );
    }
}
