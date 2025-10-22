// pages/api/sendMail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please fill all fields' });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // GoDaddy SMTP host (Office365)
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.MAIL_TO,
        subject: `New message from ${name}`,
        text: message,
        html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
      });

      res.status(200).json({ message: 'Mail sent successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to send mail' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
