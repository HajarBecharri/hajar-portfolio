import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail="hajarelbcharrii@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  const textContent = "Thank you for contacting us!\nNew message submitted:\n" + message;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      text:textContent
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}