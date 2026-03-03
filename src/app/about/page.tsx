import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FoundersSection from "@/components/home/FoundersSection";

export const metadata: Metadata = {
    title: "About | PsyAIde",
    description: "PsyAIde merges lived psychiatric workflow insight with advanced AI systems training to rebuild how diagnoses are structured and understood.",
};

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Unified Clinical Narrative Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
                    <AnimatedSection delay={0.1}>
                        {/* <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">Mission</p> */}
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                            Rebuilding <span className="text-gradient">Clinical Intelligence</span>
                        </h1>

                        {/* Narrative Paragraphs */}
                        <div className="space-y-8 max-w-3xl">
                            <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                                We started PsyAIde because we saw how much <span className="text-slate-900 font-bold">diagnostic reasoning</span> happens silently in clinicians’ minds. That reasoning is rarely structured, rarely tracked, and rarely supported over time.
                            </p>
                            <p className="mt-6 text-lg text-muted-foreground font-body leading-relaxed">
                                Psychiatry is longitudinal by nature, yet its infrastructure remains static. We are merging lived clinical workflow insight with advanced AI systems to rebuild how the mind is understood.
                            </p>
                        </div>

                        {/* Quote Section */}
                        <div className="mt-12 pt-10 border-t border-slate-100">
                            <div className="flex items-stretch gap-10">
                                {/* Vertical Accent Bar */}
                                {/* <div className="w-[1px] bg-clinical-blue" /> */}

                                {/* <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-slate-800 leading-relaxed tracking-tight max-w-4xl"> */}
                                <p className="mt-8 text-xl text-slate-500 font-body leading-relaxed italic border-l-4 border-primary pl-6">
                                    "We are not building a feature. We are building foundational infrastructure."
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <FoundersSection />

            {/* Footer Separator */}
            <div className="py-20 bg-slate-50 border-t border-slate-200/50">
                <div className="container mx-auto px-4 text-center">
                    <AnimatedSection delay={0.3}>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em] opacity-80">
                            Built at the intersection of clinical excellence and technical rigor.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
