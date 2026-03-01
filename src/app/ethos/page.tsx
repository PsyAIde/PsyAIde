import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Shield, Eye, Users, Stethoscope, Heart } from "lucide-react";

export const metadata: Metadata = {
    title: "Responsible AI & Ethos | PsyAIde",
    description: "Mental healthcare requires careful and ethical AI deployment. PsyAIde is committed to responsible AI that enhances clinician expertise.",
};

const principles = [
    { icon: Shield, title: "Privacy-First Architecture", description: "Built with data protection and security at the foundation of every design decision." },
    { icon: Users, title: "Human-in-the-Loop Oversight", description: "Clinicians remain the decision-makers. AI supports, never overrides." },
    { icon: Eye, title: "Transparent Reasoning Support", description: "Every insight is traceable and explainable, building clinical confidence." },
    { icon: Stethoscope, title: "Clinical Alignment from Inception", description: "Designed in partnership with psychiatric professionals who understand the complexity." },
    { icon: Heart, title: "Respect for Complexity", description: "Mental health is nuanced. Our technology honors that nuance rather than oversimplifying it." },
];

export default function Ethos() {
    return (
        <>
            <section className="hero-gradient py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <AnimatedSection>
                        <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">Ethos</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                            Responsible AI for Mental Health
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                            Mental healthcare requires careful and ethical AI deployment. We are committed to responsible AI that enhances clinician expertise while respecting the complexity of mental health care.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <div className="space-y-6">
                        {principles.map((p, i) => (
                            <AnimatedSection key={i} delay={i * 0.1}>
                                <div className="flex items-start gap-6 p-6 rounded-xl border bg-card hover:border-primary/20 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                                        <p.icon size={22} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
