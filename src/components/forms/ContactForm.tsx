"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address").max(255),
    message: z.string().min(1, "Message is required").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("message", data.message);

            const result = await submitContactForm(formData);

            if (result.success) {
                toast.success(result.message);
                form.reset();
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium font-body text-foreground mb-1.5">
                                Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your name"
                                    {...field}
                                    className="w-full h-11 px-4 rounded-lg border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium font-body text-foreground mb-1.5">
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    {...field}
                                    className="w-full h-11 px-4 rounded-lg border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium font-body text-foreground mb-1.5">
                                Message
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your interest..."
                                    rows={5}
                                    {...field}
                                    className="w-full px-4 py-3 rounded-lg border bg-card text-foreground font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-primary-foreground font-medium font-body text-sm transition-all hover:opacity-90 gap-2 disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={14} />
                </button>
            </form>
        </Form>
    );
}
