import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us | PsyAIde",
    description: "Get in touch with PsyAIde. Whether you're a clinician, investor, or healthcare operator, we'd love to hear from you.",
};

export default function Contact() {
    return (
        <>
            <section className="hero-gradient py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <AnimatedSection>
                        <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                            Get <span className="text-gradient">in Touch</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                            Whether you're a clinician, investor, or healthcare operator — we'd love to hear from you.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
                    <AnimatedSection>
                        <ContactForm />
                    </AnimatedSection>

                </div>
            </section>
        </>
    );
}
