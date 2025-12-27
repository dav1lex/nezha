
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, message, productName, company_tax_id } = body;

        // Honeypot check: If the hidden field is filled, it's a bot.
        if (company_tax_id) {
            console.warn('Bot detected via honeypot');
            return NextResponse.json({ success: true }); // Return success to fool the bot
        }

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
            }
        });

        // Email Content for Sales
        const subjectForSales = productName
            ? `New Quote Request for: ${productName}`
            : `New Contact Form Submission from ${name}`;

        const htmlContentForSales = `
            <h2>New Inquiry from Website</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            ${productName ? `<p><strong>Product Interest:</strong> ${productName}</p>` : ''}
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `;

        // 1. Send main notification to Sales
        await transporter.sendMail({
            from: `"Pearl Machine Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL, // sales@pearlmachine.com
            replyTo: email,
            subject: subjectForSales,
            html: htmlContentForSales,
        });

        // 2. Send "Thank You" Auto-Responder to the User
        // Wrapped in a separate try-catch so if the user's email is invalid, 
        // the main process doesn't fail.
        try {
            await transporter.sendMail({
                from: `"Pearl Machine Sales" <${process.env.SMTP_USER}>`,
                to: email,
                subject: productName
                    ? `Quick Update: Your Quote for ${productName}`
                    : "Message Received - Pearl Machine Sales",
                html: `
                    <div style="font-family: sans-serif; padding: 20px; color: #333;">
                        <h2 style="color: #000;">Hello ${name},</h2>
                        <p>Thank you for reaching out to <strong>Pearl Machine</strong>.</p>
                        <p>We have received your inquiry${productName ? ` regarding the <strong>${productName}</strong>` : ''} and our sales team will get back to you as soon as possible.</p>
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p style="font-size: 0.9em; color: #666;">This is an automated message, please do not reply directly to this email.</p>
                        <p style="font-size: 0.9em; color: #666;"><strong>Website:</strong> <a href="https://pearlmachine.com">pearlmachine.com</a></p>
                    </div>
                `,
            });
        } catch (autoResponderError) {
            // Log it but don't stop the main success response
            console.error('Auto-responder failed (invalid email?):', autoResponderError);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
