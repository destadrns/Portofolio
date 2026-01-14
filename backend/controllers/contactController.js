import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

export const submitContact = async (req, res) => {
    try {
        console.log('--- Incoming Contact Request ---');
        console.log('Body:', req.body);
        const { name, email, message } = req.body;

        // Save to Database (Optional: Don't fail the whole request if DB is down)
        try {
            const newContact = new Contact({ name, email, message });
            await newContact.save();
            console.log('Saved to MongoDB successfully');
        } catch (dbError) {
            console.error('MongoDB Save Error (Non-fatal):', dbError.message);
        }

        // Send Email via Nodemailer
        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS?.trim();

        if (!emailUser || !emailPass) {
            console.error('Missing Email Credentials');
            return res.status(500).json({ message: 'Server Configuration Error: Missing Credentials' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: emailUser,
                pass: emailPass
            }
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${emailUser}>`,
            to: emailUser,
            replyTo: email,
            subject: `New Contact from Portfolio: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully to:', emailUser);
            res.status(201).json({ message: 'Message sent successfully' });
        } catch (emailError) {
            console.error('Nodemailer Error:', emailError);
            res.status(500).json({ message: 'Failed to send email', error: emailError.message });
        }
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
