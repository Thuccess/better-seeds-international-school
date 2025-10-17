// This file sets up a simple Express server to handle the API request.
// To run this, you would need Node.js, TypeScript, and the necessary packages installed.
// e.g., npm install express nodemailer cors @types/express @types/cors @types/nodemailer
// You would then run it with a tool like ts-node: `ts-node api/server.ts`
// Make sure to create a .env file for your email credentials.

import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001; // Port for the API server

// --- Middleware ---
app.use(cors()); // Enable CORS for all routes, can be configured for specific origins in production
app.use(express.json()); // Middleware to parse JSON bodies

// Basic email validation regex
const isEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// --- API Route ---
app.post('/api/contact', async (req: Request, res: Response) => {
    const { name, email, phone, inquiryType, message } = req.body;

    // --- Server-side validation ---
    if (!name || !email || !inquiryType || !message) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    if (!isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email address.' });
    }

    // --- Nodemailer setup ---
    // IMPORTANT: Use environment variables for sensitive data.
    // In a real application, these would be set in your deployment environment.
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS, // Your email password or app-specific password
        },
    });

    // Sanitize message content to prevent HTML injection in the email
    const sanitizedMessage = message
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/\n/g, '<br>');


    const emailHtml = `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #1a3a69;">New Inquiry from Better Seeds Website</h2>
            <p>You have received a new message from the contact form.</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <h3 style="color: #1a3a69;">Details:</h3>
            <ul style="list-style-type: none; padding: 0;">
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
                <li><strong>Inquiry Type:</strong> ${inquiryType}</li>
            </ul>
            <h3 style="color: #1a3a69;">Message:</h3>
            <p style="background-color: #f7f7f7; padding: 15px; border-radius: 5px;">${sanitizedMessage}</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 0.8em; color: #777;">This email was sent from the Better Seeds International School website contact form.</p>
        </div>
    `;

    const mailOptions = {
        from: `"Better Seeds Website" <${process.env.EMAIL_USER}>`,
        to: 'ruotmaliah654@gmail.com',
        subject: `New Inquiry: ${inquiryType} from ${name}`,
        html: emailHtml,
    };

    // --- Send email ---
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
        console.error('Nodemailer error:', error);
        return res.status(500).json({ message: 'Failed to send the email. Please try again later.' });
    }
});

// --- Start Server ---
app.listen(port, () => {
    console.log(`API server listening at http://localhost:${port}`);
});
