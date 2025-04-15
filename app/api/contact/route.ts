import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, subject } = await req.json();

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
        <h3>New Message Form Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
