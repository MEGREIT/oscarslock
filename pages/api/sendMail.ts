import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // --- Destructure phone from body ---
  const { name, email, phone, message } = req.body;

  // --- Update validation ---
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Please fill all fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Keep your working SMTP settings
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // --- Update email content to include phone ---
    const emailSubject = `New message from ${name}`;
    const emailText = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const emailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p> {/* Preserve line breaks */}
    `;

    await transporter.sendMail({
      from: process.env.MAIL_USER, // Sending address
      replyTo: email,              // User's email for replies
      to: process.env.MAIL_TO,     // Client's receiving address
      subject: emailSubject,
      text: emailText,             // Plain text version
      html: emailHtml,             // HTML version
    });

    res.status(200).json({ message: 'Mail sent successfully!' });
  } catch (err) {
    console.error("Error sending email:", err); // Log the detailed error
    res.status(500).json({ error: 'Failed to send mail' });
  }
}
