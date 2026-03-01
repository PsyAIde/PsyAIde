import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FoundersSection from "@/components/home/FoundersSection";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "About | PsyAIde",
    description: "PsyAIde merges lived psychiatric workflow insight with advanced AI systems training to rebuild how diagnoses are structured and understood.",
};

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section - Tightened and Refined */}
            <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <AnimatedSection className="text-center">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                                Rebuilding <span className="text-primary italic font-serif">Clinical</span> Intelligence.
                            </h1>
                            <div className="max-w-4xl mx-auto space-y-6">
                                <p className="text-lg md:text-xl text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
                                    We started PsyAIde because we saw how much <span className="text-slate-900 font-semibold underline decoration-primary/20 underline-offset-4">diagnostic reasoning</span> happens silently in clinicians’ minds. That reasoning is rarely structured, rarely tracked, and rarely supported over time.
                                </p>
                                <p className="text-lg md:text-xl text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
                                    Psychiatry is longitudinal by nature. Yet its infrastructure remains static. We are merging lived clinical workflow insight with advanced AI systems to rebuild how the mind is understood.
                                </p>

                                <div className="pt-10 flex flex-col items-center">
                                    <div className="w-12 h-0.5 bg-slate-100 rounded-full mb-6" />
                                    <p className="text-xl md:text-2xl font-heading font-bold text-slate-800 italic max-w-2xl">
                                        "We are not building a feature. We are building foundational infrastructure."
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <FoundersSection />

            {/* Subtle separator */}
            <div className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] opacity-80">
                        Built at the intersection of clinical excellence and technical rigor.
                    </p>
                </div>
            </div>
        </div>
    );
}
