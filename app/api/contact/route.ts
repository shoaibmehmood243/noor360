import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// In-memory rate limiting map
// Key: IP address, Value: { count: number, resetTime: number }
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in ms
const MAX_SUBMISSIONS = 3;

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  subject: z.string().min(1, { message: "Subject selection is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiter Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "127.0.0.1";
    const now = Date.now();
    
    const limitInfo = rateLimitMap.get(ip);
    
    if (limitInfo) {
      if (now > limitInfo.resetTime) {
        // Reset rate limit window
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      } else if (limitInfo.count >= MAX_SUBMISSIONS) {
        return NextResponse.json(
          { error: "Too many messages. Please wait before trying again." },
          { status: 429 }
        );
      } else {
        limitInfo.count += 1;
        rateLimitMap.set(ip, limitInfo);
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    }

    // 2. Validate Request Body
    const body = await req.json();
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      // Map field errors to client format
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err: any) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      return NextResponse.json({ errors: fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;

    // 3. Send Email using Resend API
    // If RESEND_API_KEY is not defined, we log it and mock a successful response in local dev
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY is missing in env.local. Mocking successful submission in local dev.");
      return NextResponse.json({ success: true, mocked: true });
    }

    const resend = new Resend(apiKey);
    
    // Custom luxury dark branding template matching Noor360 aesthetics
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              background-color: #0b0f19;
              color: #f3f4f6;
              margin: 0;
              padding: 0;
            }
            .wrapper {
              max-width: 600px;
              margin: 40px auto;
              background-color: #111827;
              border: 1px solid #c9a84c33;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
            }
            .header {
              background-color: #0f172a;
              border-bottom: 2px solid #c9a84c;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              color: #c9a84c;
              margin: 0;
              font-size: 24px;
              letter-spacing: 1px;
            }
            .header p {
              color: #94a3b8;
              margin: 5px 0 0 0;
              font-size: 13px;
            }
            .content {
              padding: 40px 30px;
            }
            .field-row {
              margin-bottom: 25px;
            }
            .label {
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              color: #c9a84c;
              font-weight: 700;
              margin-bottom: 6px;
            }
            .value {
              font-size: 15px;
              color: #e2e8f0;
              line-height: 1.6;
              background-color: #0b0f19;
              padding: 12px 16px;
              border-radius: 8px;
              border: 1px solid #1f2937;
            }
            .footer {
              background-color: #0f172a;
              border-top: 1px solid #1f2937;
              padding: 20px 30px;
              text-align: center;
              font-size: 11px;
              color: #64748b;
            }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <h1>Noor360 Contact Message</h1>
              <p>Prophesying authentic connections and inquiries</p>
            </div>
            
            <div class="content">
              <div class="field-row">
                <div class="label">Sender Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field-row">
                <div class="label">Reply-To Email</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field-row">
                <div class="label">Subject category</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field-row">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              This message was sent securely from the Noor360 Web Application Contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Noor360 Web <onboarding@resend.dev>",
      to: "hello@noor360.app",
      replyTo: email,
      subject: `Noor360 [${subject}]: ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error details:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (err: any) {
    console.error("Contact API Server Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
