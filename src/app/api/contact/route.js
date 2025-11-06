import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const message = formData.get("message");

    if (!name || !email || !tel || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message From vertex website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tel:</strong> ${tel}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
