import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PilotForm } from "@/components/forms/PilotForm";
import { Shield, Brain, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Join the Pilot | PsyAIde",
    description: "Exclusive pilot program for psychiatrists. Experience the future of clinical diagnostic reasoning.",
};

export default function Pilot() {
    return (
        <>
            <section className="hero-gradient py-24 lg:py-32">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <AnimatedSection>
                            <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">Psychiatrist Exclusive</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                                Join the <span className="text-gradient">Pilot Program</span>
                            </h1>
                            <p className="mt-8 text-xl text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
                                We are inviting a select group of psychiatrists to help shape the future of diagnostic reasoning infrastructure.
                            </p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 items-start max-w-6xl mx-auto">
                        {/* Left Side: Info */}
                        <div className="lg:w-1/2">
                            <AnimatedSection>
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
                                    Why join the PsyAIde pilot?
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Brain size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Early Access</h3>
                                            <p className="text-slate-600 font-body leading-relaxed">
                                                Be among the first to use our structured intelligence layer in your clinical practice.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                            <Sparkles size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Product Impact</h3>
                                            <p className="text-slate-600 font-body leading-relaxed">
                                                Directly influence the development of features tailored specifically to psychiatric diagnostic logic.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">Concierge Support</h3>
                                            <p className="text-slate-600 font-body leading-relaxed">
                                                Receive direct technical and clinical onboarding support from our founding team.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5">
                                    <p className="text-sm text-slate-600 font-body italic">
                                        "Our goal is to build tools that think the way psychiatrists think—longitudinally, complexly, and with deep clinical insight."
                                    </p>
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Right Side: Form */}
                        <div className="lg:w-1/2 w-full">
                            <AnimatedSection delay={0.2}>
                                <div className="bg-card p-8 rounded-3xl border shadow-xl shadow-slate-200/50">
                                    <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
                                        Apply for Access
                                    </h2>
                                    <PilotForm />
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
