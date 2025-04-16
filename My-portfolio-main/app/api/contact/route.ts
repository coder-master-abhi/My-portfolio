import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, subject } = await req.json();

    if (!process.env.EMAIL_PASSWORD) {
      throw new Error('EMAIL_PASSWORD environment variable is not set');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abhishek1905.yadav@gmail.com',
        pass: process.env.EMAIL_PASSWORD
      },
    });

    const mailOptions = {
      from: {
        name: name,
        address: email
      },
      to: 'abhishek1905.yadav@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'N/A'}
        Message: ${message}
      `,
      html: `
        <h3> Message From Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError: any) {
      console.error('Nodemailer error:', emailError);
      throw new Error(emailError.message || 'Failed to send email');
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
