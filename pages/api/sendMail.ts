import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

type Data = {
  message?: string;
  error?: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const emailSubject = `🔔 New Contact Form: ${name}`;
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border: 1px solid #e0e0e0;
              border-top: none;
            }
            .info-row {
              background: white;
              padding: 15px;
              margin-bottom: 15px;
              border-radius: 5px;
              border-left: 4px solid #667eea;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .value {
              font-size: 16px;
              color: #333;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 5px;
              border-left: 4px solid #764ba2;
              margin-top: 20px;
            }
            .footer {
              background: #333;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 0 0 10px 10px;
              font-size: 12px;
            }
            .reply-button {
              display: inline-block;
              background: #667eea;
              color: white;
              padding: 12px 30px;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Oscar's Lock & Key</p>
          </div>
          
          <div class="content">
            <div class="info-row">
              <div class="label">👤 Name</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="info-row">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
            </div>
            
            <div class="info-row">
              <div class="label">📱 Phone</div>
              <div class="value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
            </div>
            
            <div class="message-box">
              <div class="label">💬 Message</div>
              <div class="value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
            </div>
            
            <center>
              <a href="mailto:${email}" class="reply-button">Reply to ${name}</a>
            </center>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">This email was sent from your website contact form</p>
            <p style="margin: 5px 0 0 0; opacity: 0.7;">oscarslock.com</p>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Oscar\'s Lock <contact@oscarslock.com>',
      replyTo: email,
      to: process.env.RESEND_TO_EMAIL || 'oscar@oscarslock.com',
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(500).json({ error: 'Failed to send mail' });
    }

    console.log("✅ Email sent successfully:", data);
    res.status(200).json({ message: 'Mail sent successfully!' });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: 'Failed to send mail' });
  }
}
