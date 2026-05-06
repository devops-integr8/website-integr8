import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, company, email, industry, message } = await req.json();

  if (!name || !company || !email || !industry || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  // Validate that all required SMTP env variables are present
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, COMPANY_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !COMPANY_EMAIL) {
    console.error("Missing SMTP environment variables:", {
      SMTP_HOST: !!SMTP_HOST,
      SMTP_PORT: !!SMTP_PORT,
      SMTP_USER: !!SMTP_USER,
      SMTP_PASS: !!SMTP_PASS,
      COMPANY_EMAIL: !!COMPANY_EMAIL,
    });
    return NextResponse.json(
      { error: "Server email configuration is incomplete." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    // Verify connection before sending
    await transporter.verify();
  } catch (verifyError) {
    console.error("SMTP connection failed:", verifyError);
    return NextResponse.json(
      {
        error: "Could not connect to mail server. Check your SMTP credentials.",
      },
      { status: 500 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"GR8 Website Inquiry" <${SMTP_USER}>`,
      to: COMPANY_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name} — ${company}`,
      html: `
        <h2 style="color:#0437f2;">New Inquiry from GR8 Software Website</h2>
        <table cellpadding="10" style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">
          <tr style="background:#f0f4ff;">
            <td width="140"><strong>Name</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>
          <tr style="background:#f0f4ff;">
            <td><strong>Email</strong></td>
            <td><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td><strong>Industry</strong></td>
            <td>${industry}</td>
          </tr>
          <tr style="background:#f0f4ff;">
            <td><strong>Message</strong></td>
            <td style="white-space:pre-line;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (sendError) {
    console.error("Email send failed:", sendError);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
