import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_USER, // Your email address
    pass: process.env.NODE_MAILER_PASSWORD, // Your email password
  },
});

// Function to send email
const sendMail = async (name, email, message) => {
  try {
    var mailOptions = {
      from: process.env.NODE_MAILER_USER, // Sender's email address
      to: "developersuresh07@gmail.com", // Your email address
      replyTo: email,
      subject: `New message from ${name}`,
      text: `${message} and Message From ${email}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log("Email Send Succeesfully", mailOptions);
    });
  } catch (error) {
    console.log(error.message);
    throw new Error("Error Sending Verification Email ", `${error}`);
  }
};

export default sendMail;
