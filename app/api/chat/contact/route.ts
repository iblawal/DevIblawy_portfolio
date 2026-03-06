import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      text: message,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })

  } catch (error: any) {
    console.error("REAL EMAIL ERROR:", error)

    return NextResponse.json(
      { error: error.message || "Email failed" },
      { status: 500 }
    )
  }
}
