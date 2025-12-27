
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, productName } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_PORT === '465', // true for 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                // Required for many cPanel setups on 587
                ciphers: 'SSLv3',
                rejectUnauthorized: false
            },
            debug: true,
            logger: true
        });

        // Email Content
        const subject = productName
            ? `New Quote Request for: ${productName}`
            : `New Contact Form Submission from ${name}`;

        const htmlContent = `
            <h2>New Inquiry from Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            ${productName ? `<p><strong>Product Interest:</strong> ${productName}</p>` : ''}
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // Send Email
        await transporter.sendMail({
            from: `"Pearl Machine Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL, // Where you want to receive inquiries
            replyTo: email, // So you can hit "Reply" and email the customer directly
            subject: subject,
            html: htmlContent,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
