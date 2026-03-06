// src\components\forms\PilotForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { submitPilotForm } from "@/app/actions/pilot";
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

const pilotSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address").max(255),
    practiceName: z.string().min(1, "Practice name is required").max(200),
    note: z.string().max(1000).optional(),
});

type PilotFormValues = z.infer<typeof pilotSchema>;

export function PilotForm() {
    const [loading, setLoading] = useState(false);

    const form = useForm<PilotFormValues>({
        resolver: zodResolver(pilotSchema),
        defaultValues: {
            name: "",
            email: "",
            practiceName: "",
            note: "",
        },
    });

    async function onSubmit(data: PilotFormValues) {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("practiceName", data.practiceName);
            formData.append("note", data.note || "");

            const result = await submitPilotForm(formData);

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
                                Full Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your full name"
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
                                Professional Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="you@practice.com"
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
                    name="practiceName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium font-body text-foreground mb-1.5">
                                Practice Name
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g., Central Psychiatry Group"
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
                    name="note"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="block text-sm font-medium font-body text-foreground mb-1.5">
                                Additional Notes
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your practice or specific interests..."
                                    rows={4}
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
                    {loading ? "Submitting Application..." : "Request Pilot Access"}
                    <Send size={14} />
                </button>
            </form>
        </Form>
    );
}
