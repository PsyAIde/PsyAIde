"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address").max(255),
    message: z.string().min(1, "Message is required").max(1000),
});

export async function submitContactForm(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const validatedData = contactSchema.parse(rawData);

        // 1. Save to Database (MongoDB via Prisma)
        const newMessage = await prisma.contactMessage.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                message: validatedData.message,
            },
        });

        // 2. Send Email if API Key is configured
        if (resend) {
            try {
                await resend.emails.send({
                    from: "PsyAIde Website <onboarding@resend.dev>",
                    to: "hello@psyaide.ai",
                    subject: `New Contact Form Submission: ${validatedData.name}`,
                    html: `
            <h3>New Contact Message</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br/>")}</p>
            <hr/>
            <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
          `,
                });
            } catch (emailError) {
                // Log email error but don't fail the entire request since data is saved
                console.error("Failed to send email:", emailError);
            }
        } else {
            console.warn("RESEND_API_KEY not found. Email notification skipped.");
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
