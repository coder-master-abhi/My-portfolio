import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Log the message details - this is a simple approach for now
    console.log("Contact form submission received:")
    console.log(`From: ${name} (${email})`)
    console.log(`Subject: ${subject}`)
    console.log(`Message: ${message}`)

    // In a real application, you would send this data to an email service
    // For example: EmailJS, SendGrid, AWS SES, or configure your own SMTP server

    return NextResponse.json({ 
      message: "Message received! We'll contact you soon.",
    }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ 
      message: "Failed to send message. Please try again." 
    }, { status: 500 })
  }
}
