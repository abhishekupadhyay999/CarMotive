
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function requiredString(
  value: unknown,
  maxLength: number
): string | null {
  if (typeof value !== "string") return null;

  const cleaned = value.trim();

  if (!cleaned || cleaned.length > maxLength) return null;

  return cleaned;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = requiredString(body.name, 100);
    const mobile = requiredString(body.mobile, 20);
    const carModel = requiredString(body.carModel, 150);
    const variant = requiredString(body.variant, 100);
    const color = requiredString(body.color, 50);

    if (!name || !mobile || !carModel || !variant || !color) {
      return NextResponse.json(
        { error: "Please complete all fields correctly." },
        { status: 400 }
      );
    }

    const normalizedMobile = mobile.replace(/[\s()-]/g, "");

    if (!/^[+]?[0-9]{10,15}$/.test(normalizedMobile)) {
      return NextResponse.json(
        { error: "Please enter a valid mobile number." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const recipient =
      process.env.ENQUIRY_TO_EMAIL || "sales@carmotiveindia.com";

    if (!host || !user || !pass || !recipient) {
      console.error("Car enquiry email configuration is incomplete.");

      return NextResponse.json(
        { error: "Email service is not configured yet. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure:
        process.env.SMTP_SECURE === "true" || port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: {
        name: "Carmotive India Website",
        address: user,
      },
      to: recipient,
      replyTo: user,
      subject: `New car enquiry: ${carModel}`,
      text: [
        "New Get Best Price enquiry",
        "",
        `Name: ${name}`,
        `Mobile: ${normalizedMobile}`,
        `Car Model: ${carModel}`,
        `Variant: ${variant}`,
        `Preferred Color: ${color}`,
      ].join("\n"),
      html: `
        <h2>New Get Best Price Enquiry</h2>
        <table cellpadding="8" cellspacing="0" border="1"
          style="border-collapse:collapse;border-color:#ddd">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Mobile</strong></td><td>${escapeHtml(normalizedMobile)}</td></tr>
          <tr><td><strong>Car Model</strong></td><td>${escapeHtml(carModel)}</td></tr>
          <tr><td><strong>Variant</strong></td><td>${escapeHtml(variant)}</td></tr>
          <tr><td><strong>Preferred Color</strong></td><td>${escapeHtml(color)}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Car enquiry submission failed:", error);

    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}
