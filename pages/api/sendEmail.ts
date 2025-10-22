import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, description } = req.body;

  // create transporter (GoDaddy SMTP)
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: subject || "New Contact Form Message",
      html: `
        <h3>New Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
    });

    console.log("✅ Mail sent successfully!");
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ Error sending mail:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
