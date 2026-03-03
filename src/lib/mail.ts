import nodemailer from 'nodemailer';

interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: EmailAttachment[];
}

// Create reusable transporter
const createTransporter = () => {
  // Only use APP_EMAIL and APP_PASSWORD as requested
  const email = process.env.APP_EMAIL;
  const password = process.env.APP_PASSWORD;

  if (!email || !password) {
    throw new Error('APP_EMAIL or APP_PASSWORD not configured in environment variables.');
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    }
  });
};

/**
 * Send email
 */
export async function sendEmail(options: EmailOptions): Promise<void> {
  try {
    const email = process.env.APP_EMAIL;
    const password = process.env.APP_PASSWORD;

    if (!email || !password) {
      console.warn('Email not configured (APP_EMAIL/APP_PASSWORD missing). Email not sent:', options.to);
      return;
    }

    let transporter;
    try {
      transporter = createTransporter();
    } catch (transporterError) {
      const errorMessage = transporterError instanceof Error ? transporterError.message : String(transporterError);
      console.error('Error creating email transporter:', transporterError);
      throw new Error(`Failed to create email transporter: ${errorMessage}`);
    }

    const mailOptions: {
      from: string;
      to: string;
      subject: string;
      text: string;
      html: string;
      attachments?: Array<{
        filename: string;
        content: Buffer;
        contentType?: string;
      }>;
    } = {
      from: `"PsyAIde Support" <${email}>`,
      to: options.to,
      subject: options.subject,
      text: options.text || options.html.replace(/<[^>]*>/g, ''), // Plain text fallback
      html: options.html,
    };

    // Add attachments if provided
    if (options.attachments && options.attachments.length > 0) {
      mailOptions.attachments = options.attachments.map(att => ({
        filename: att.filename,
        content: att.content,
        contentType: att.contentType || 'application/pdf',
      }));
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to send email: ${errorMessage}`);
  }
}

/**
 * Generate contact form confirmation email HTML template (sent to user)
 */
export function generateContactConfirmationEmailHTML(
  userName: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Reaching Out to PsyAIde</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f9; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%); padding: 40px 20px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px; }
            .content { padding: 40px; }
            .content p { font-size: 16px; margin-bottom: 20px; color: #444; }
            .message-box { background: #f8fafc; border-left: 4px solid #1a73e8; padding: 20px; border-radius: 4px; margin: 25px 0; }
            .message-box strong { display: block; margin-bottom: 10px; color: #1a73e8; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
            .message-box p { margin: 0; font-style: italic; color: #555; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #eee; }
            .footer p { font-size: 12px; color: #999; margin: 0; }
            .brand { font-weight: bold; color: #1a73e8; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>We've Received Your Message</h1>
            </div>
            <div class="content">
                <p>Hello <strong>${userName}</strong>,</p>
                <p>Thank you for contacting <span class="brand">PsyAIde</span>. We have successfully received your inquiry and our team is already reviewing it.</p>
                <p>We pride ourselves on providing thoughtful responses and will get back to you within 24–48 hours.</p>
                
                <div class="message-box">
                    <strong>Your Message Summary:</strong>
                    <p>"${message}"</p>
                </div>
                
                <p>If your matter is urgent, please feel free to reach out to us directly at hello@psyaide.ai.</p>
                <p>Warm regards,<br>The PsyAIde Team</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} PsyAIde, Inc. All rights reserved.</p>
                <p>This is an automated confirmation email. Please do not reply directly.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Generate pilot program confirmation email HTML template (sent to user)
 */
export function generatePilotConfirmationEmailHTML(
  userName: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Joining the PsyAIde Pilot Program</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f9; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
            .header { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 40px 20px; text-align: center; color: white; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
            .content { padding: 40px; }
            .content p { font-size: 16px; margin-bottom: 20px; color: #444; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #eee; }
            .footer p { font-size: 12px; color: #999; margin: 0; }
            .brand { font-weight: bold; color: #0f172a; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Pilot Program Application Received</h1>
            </div>
            <div class="content">
                <p>Hello Dr. <strong>${userName}</strong>,</p>
                <p>Thank you for your interest in the <span class="brand">PsyAIde</span> Pilot Program. We've received your application and are excited about the possibility of working with you.</p>
                <p>Our pilot is limited to a select group of psychiatrists to ensure we provide the highest level of support and incorporate direct clinical feedback into our diagnostic engine.</p>
                <p>A member of our clinical strategy team will reach out to you within the next 48 hours to discuss the next steps.</p>
                <p>Best regards,<br>The PsyAIde Clinical Team</p>
            </div>
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} PsyAIde, Inc. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Generate contact form notification email HTML template (sent to admin)
 */
export function generateContactNotificationEmailHTML(
  name: string,
  email: string,
  message: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Submission Recorded - PsyAIde</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f9; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .header { background: #111; padding: 20px; text-align: center; color: white; }
            .header h2 { margin: 0; font-weight: 400; font-size: 18px; color: #bbb; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 40px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .info-table td { padding: 12px 0; border-bottom: 1px solid #eee; }
            .info-table td.label { width: 100px; font-weight: bold; color: #666; font-size: 13px; text-transform: uppercase; }
            .info-table td.value { color: #111; font-size: 16px; }
            .message-body { background: #fcfcfc; border: 1px solid #efefef; padding: 25px; border-radius: 8px; color: #333; white-space: pre-wrap; font-size: 15px; }
            .action-btn { display: inline-block; background: #1a73e8; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 30px; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #999; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Contact Submission</h2>
            </div>
            <div class="content">
                <table class="info-table">
                    <tr>
                        <td class="label">Sender</td>
                        <td class="value">${name}</td>
                    </tr>
                    <tr>
                        <td class="label">Email</td>
                        <td class="value"><a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></td>
                    </tr>
                    <tr>
                        <td class="label">Received</td>
                        <td class="value">${new Date().toLocaleString()}</td>
                    </tr>
                </table>
                
                <h3 style="font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 1px;">Message:</h3>
                <div class="message-body">${message}</div>
                
                <div style="text-align: center; margin: 30px 0;">
                    <a href="mailto:${email}" style="display: inline-block; background: #1a73e8; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(26, 115, 232, 0.2); transition: background-color 0.2s; text-transform: capitalize;">
                        Reply to ${name.toLowerCase()}
                    </a>
                </div>
            </div>
            <div class="footer">
                <p>You're receiving this message from the PsyAIde platform</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

/**
 * Generate pilot application notification email HTML template (sent to admin)
 */
export function generatePilotNotificationEmailHTML(
  name: string,
  email: string,
  practiceName: string,
  note: string
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Pilot Application - PsyAIde</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f7f9; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
            .header { background: #0f172a; padding: 20px; text-align: center; color: white; }
            .header h2 { margin: 0; font-weight: 400; font-size: 18px; color: #cbd5e1; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 40px; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .info-table td { padding: 12px 0; border-bottom: 1px solid #eee; }
            .info-table td.label { width: 120px; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase; }
            .info-table td.value { color: #0f172a; font-size: 15px; }
            .note-box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; color: #334155; white-space: pre-wrap; font-size: 14px; }
            .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Pilot Application Submission</h2>
            </div>
            <div class="content">
                <table class="info-table">
                    <tr>
                        <td class="label">Applicant</td>
                        <td class="value">${name}</td>
                    </tr>
                    <tr>
                        <td class="label">Email</td>
                        <td class="value"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr>
                        <td class="label">Practice</td>
                        <td class="value">${practiceName}</td>
                    </tr>
                    <tr>
                        <td class="label">Submitted</td>
                        <td class="value">${new Date().toLocaleString()}</td>
                    </tr>
                </table>
                
                <h3 style="font-size: 12px; text-transform: uppercase; color: #64748b; margin-bottom: 10px;">Note:</h3>
                <div class="note-box">${note}</div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="mailto:${email}" style="display: inline-block; background: #0f172a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
                        Respond to Applicant
                    </a>
                </div>
            </div>
            <div class="footer">
                <p>This is an automated notification from PsyAIde</p>
            </div>
        </div>
    </body>
    </html>
  `;
}
