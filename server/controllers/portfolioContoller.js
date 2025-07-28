// const nodemailer = require("nodemailer");
// const sendGridTransport = require("nodemailer-sendgrid-transport");

// // Note: Create transporter outside the controller to avoid recreating it on every request
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: process.env.API_SENDGRID,
//     },
//   })
// );

// const sendEmailController = async (req, res) => {
//   // <-- Make the function async
//   try {
//     const { name, email, msg } = req.body;

//     // validation
//     if (!name || !email || !msg) {
//       return res.status(500).send({
//         success: false,
//         message: "Please Provide All Fields",
//       });
//     }

//     // email matter
//     await transporter.sendMail({
//       // <-- Await the async call
//       to: "yashgandhi156@gmail.com",
//       from: "yashgandhi156@gmail.com",
//       subject: "Regarding Mern Portfolio App",
//       html: `
//         <h5>Detail Information</h5>
//         <ul>
//           <li><p>Name : ${name}</p></li>
//           <li><p>Email : ${email}</p></li>
//           <li><p>Message : ${msg}</p></li>
//         </ul>
//       `,
//     });

//     // This code will only execute if transporter.sendMail succeeds
//     return res.status(200).send({
//       success: true,
//       message: "Your Message Sent Successfully",
//     });
//   } catch (error) {
//     console.error("Error in sendEmailController:", error); // <-- Use console.error for clarity
//     return res.status(500).send({
//       success: false,
//       message: "An error occurred while sending the email",
//       error: error.message, // <-- Send back a specific error message
//     });
//   }
// };

// module.exports = { sendEmailController };

// Import the Resend SDK
const { Resend } = require("resend");
// Ensure dotenv is configured at the very top of your main server file (e.g., server.js or app.js)
// require('dotenv').config();

// Initialize Resend with your API key from environment variables
// It's crucial that process.env.RESEND_API_KEY is available here.
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation: Check if all required fields are provided
    if (!name || !email || !msg) {
      return res.status(400).send({
        // Changed status to 400 for bad request (missing fields)
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Send the email using Resend's API
    // The 'from' email address must be a verified domain or email in your Resend account.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // IMPORTANT: Use a verified domain or 'onboarding@resend.dev' for testing
      to: "yashgandhi156@gmail.com", // Your receiving email address
      subject: `Portfolio Inquiry from ${name}`, // Dynamic subject line
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    });

    // Check for errors from Resend API
    if (error) {
      console.error("Error sending email with Resend:", error);
      return res.status(500).send({
        success: false,
        message: "Failed to send email via Resend.",
        error: error.message || "Unknown Resend error",
      });
    }

    // If email sent successfully
    console.log("Email sent successfully with Resend:", data);
    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully!",
    });
  } catch (error) {
    // Catch any unexpected errors during the process
    console.error("Unexpected error in sendEmailController:", error);
    return res.status(500).send({
      success: false,
      message: "An unexpected error occurred while processing your request.",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
