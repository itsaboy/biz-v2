import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });
import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: `
      You have received a new message from ${firstName} ${lastName} (${email}):
      
      Phone Number: ${phoneNumber}
      
      Message:
      ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json("Message sent: " + info.response);
  } catch (error) {
    res.status(500).json(error);
  }
};
