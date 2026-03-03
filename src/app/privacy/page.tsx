import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
    title: "Privacy Policy | PsyAIde",
    description: "Privacy is fundamental to PsyAIde. Learn how we handle information securely.",
};

export default function Privacy() {
    return (
        <>
            <section className="hero-gradient py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <AnimatedSection>
                        <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">Legal</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                            Your privacy is fundamental to our mission. This policy describes how PsyAIde handles information.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl prose prose-sm font-body text-muted-foreground">
                    <AnimatedSection>
                        <h2 className="text-xl font-heading font-bold text-foreground">1. Information We Collect</h2>
                        <p>We collect information you provide directly, such as your name, email address, and messages submitted through our contact form. We do not collect clinical patient data through our marketing website.</p>

                        <h2 className="text-xl font-heading font-bold text-foreground mt-8">2. How We Use Information</h2>
                        <p>Information collected is used solely for responding to inquiries, communicating about our services, and improving our website experience.</p>

                        <h2 className="text-xl font-heading font-bold text-foreground mt-8">3. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information. Our product platform is designed with privacy-first architecture and responsible AI principles.</p>

                        <h2 className="text-xl font-heading font-bold text-foreground mt-8">4. Third-Party Sharing</h2>
                        <p>We do not sell, trade, or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

                        <h2 className="text-xl font-heading font-bold text-foreground mt-8">5. Your Rights</h2>
                        <p>You may request access to, correction of, or deletion of your personal data at any time by contacting us at hello@psyaide.ai.</p>

                        <h2 className="text-xl font-heading font-bold text-foreground mt-8">6. Contact</h2>
                        <p>For privacy-related questions, please contact us at <a href="mailto:hello@psyaide.ai" className="text-primary hover:underline">hello@psyaide.ai</a>.</p>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
