const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from frontend
    methods: ['POST', 'GET'],       // Allow requests from the frontend
}));
app.use(express.json());

// Setting up the Nodemailer transporter
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // use environment variables for security
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log("Error setting up email: ", error);
    } else {
        console.log("Email setup successful. Ready to send emails.");
    }
});

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const mailOptions = {
        from: `${firstName} ${lastName} <${email}>`,
        to: 'sunnysingh03sd@gmail.com',  // Your email
        subject: "Contact Form Submission - Portfolio",
        html: `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    contactEmail.sendMail(mailOptions, (error) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ code: 500, message: 'Error sending email. Try again later.' });
        } else {
            res.status(200).json({ code: 200, message: 'Message sent successfully' });
        }
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
