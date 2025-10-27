import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send", async (req, res) => {
  const { fullName, email, message, subject } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.TOEMAIL,
      subject:` ${subject || "New Message from Portfolio Contact Form"}`,
      text: `
      Name: ${fullName}
      Email: ${email}
      Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "❌ Failed to send email." });
  }
});

app.listen(5000, () => console.log("Server is running on port 5000"));
