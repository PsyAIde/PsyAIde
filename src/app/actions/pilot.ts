"use server";

import clientPromise from "@/lib/db";
import { z } from "zod";
import {
    sendEmail,
    generatePilotConfirmationEmailHTML,
    generatePilotNotificationEmailHTML
} from "@/lib/mail";

const pilotSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address").max(255),
    practiceName: z.string().min(1, "Practice name is required").max(200),
    note: z.string().max(1000).optional(),
});

export async function submitPilotForm(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            practiceName: formData.get("practiceName") as string,
            note: formData.get("note") as string,
        };

        const validatedData = pilotSchema.parse(rawData);

        // 1. Save to Database (MongoDB directly)
        const client = await clientPromise;
        const db = client.db();
        await db.collection("PilotSubmission").insertOne({
            name: validatedData.name,
            email: validatedData.email,
            practiceName: validatedData.practiceName,
            note: validatedData.note,
            createdAt: new Date(),
        });

        // 2. Send Emails via Nodemailer
        try {
            // Send confirmation to the user
            await sendEmail({
                to: validatedData.email,
                subject: "Joining the PsyAIde Pilot Program",
                html: generatePilotConfirmationEmailHTML(validatedData.name),
            });

            // Send notification to the admin
            const adminEmail = process.env.APP_EMAIL;
            if (adminEmail) {
                await sendEmail({
                    to: adminEmail,
                    subject: `New Pilot Application: ${validatedData.name}`,
                    html: generatePilotNotificationEmailHTML(
                        validatedData.name,
                        validatedData.email,
                        validatedData.practiceName,
                        validatedData.note || "No note provided"
                    ),
                });
            }
        } catch (emailError) {
            console.error("Failed to send pilot email:", emailError);
        }

        return {
            success: true,
            message: "Thank you for joining the pilot! We'll review your application and get back to you soon."
        };
    } catch (error) {
        console.error("Pilot Form Error:", error);
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors[0].message };
        }
        return {
            success: false,
            error: "We're having trouble receiving your application. Please try again or email us directly at hello@psyaide.ai."
        };
    }
}
