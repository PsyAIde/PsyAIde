"use server";

import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

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

        await prisma.contactMessage.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                message: validatedData.message,
            },
        });

        return { success: true, message: "Message sent successfully!" };
    } catch (error) {
        console.error("Contact Form Error:", error);
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors[0].message };
        }
        return { success: false, error: "An unexpected error occurred. Please try again later." };
    }
}
