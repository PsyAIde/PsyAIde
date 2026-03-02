"use server";

import clientPromise from "@/lib/db";
import { z } from "zod";
import {
    sendEmail,
    generateContactConfirmationEmailHTML,
    generateContactNotificationEmailHTML
} from "@/lib/mail";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address").max(255),
    message: z.string().min(1, "Message is required").max(1000),
});

export async function submitContactForm(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        const validatedData = contactSchema.parse(rawData);

        // 1. Save to Database (MongoDB directly)
        const client = await clientPromise;
        const db = client.db();
        await db.collection("ContactMessage").insertOne({
            name: validatedData.name,
            email: validatedData.email,
            message: validatedData.message,
            createdAt: new Date(),
        });

        // 2. Send Emails via Nodemailer
        try {
            // Send confirmation to the user
            await sendEmail({
                to: validatedData.email,
                subject: "We've received your message - PsyAIde",
                html: generateContactConfirmationEmailHTML(validatedData.name, validatedData.message),
            });

            // Send notification to the admin (using APP_EMAIL as the destination)
            const adminEmail = process.env.APP_EMAIL;
            if (adminEmail) {
                await sendEmail({
                    to: adminEmail,
                    subject: `New Contact Form Submission: ${validatedData.name}`,
                    html: generateContactNotificationEmailHTML(
                        validatedData.name,
                        validatedData.email,
                        validatedData.message
                    ),
                });
            }
        } catch (emailError) {
            // Log email error but don't fail the entire request since data is saved
            console.error("Failed to send email:", emailError);
        }

        return {
            success: true,
            message: "Your message has been received. We'll get back to you soon!"
        };
    } catch (error) {
        console.error("Contact Form Error:", error);
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors[0].message };
        }
        return {
            success: false,
            error: "We're having trouble saving your message. Please try again or email us directly at hello@psyaide.ai."
        };
    }
}
