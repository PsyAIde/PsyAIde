import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Story | PsyAIde",
    description: "PsyAIde merges lived psychiatric workflow insight with advanced AI systems training to rebuild how diagnoses are structured and understood.",
};

export default function About() {
    return (
        <>
            <section className="hero-gradient py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
                    <AnimatedSection>
                        <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">About</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight">
                            Our Story
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                            We started PsyAIde because we saw how much diagnostic reasoning happens silently in clinicians' minds. That reasoning is rarely structured, rarely tracked, and rarely supported over time.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-12">
                    <AnimatedSection>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">The Vision</h2>
                        <p className="text-muted-foreground font-body leading-relaxed">
                            Psychiatry is complex, nuanced, and longitudinal by nature. Yet its infrastructure does not reflect that complexity. We are merging lived psychiatric workflow insight with advanced AI systems training to rebuild how diagnoses are structured and understood.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Why We Are Positioned to Win</h2>
                        <div className="space-y-4">
                            {[
                                "Deep training in AI systems and data science",
                                "Direct clinical experience in psychiatric settings",
                                "Rare intersection of clinical domain expertise and technical execution",
                                "Privacy-first, clinician-centered approach from inception",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                    <p className="text-muted-foreground font-body leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <div className="rounded-xl border bg-secondary/50 p-8 text-center">
                            <p className="text-lg font-heading font-semibold text-foreground mb-2">
                                This intersection is rare. It is our advantage.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-sm font-body font-medium text-primary mt-4 hover:underline"
                            >
                                Get in touch <ArrowRight size={14} />
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
