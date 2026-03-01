import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhyNowSection from "@/components/home/WhyNowSection";
import ResponsibleAISection from "@/components/home/ResponsibleAISection";

export const metadata: Metadata = {
    title: "Ethos | PsyAIde",
    description: "Our philosophy on building responsible and structured AI infrastructure for psychiatric care.",
};

export default function EthosPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
                    <AnimatedSection>
                        <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-8">
                            Ethos & Vision
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 font-body leading-relaxed max-w-2xl mx-auto">
                            Building psychiatric infrastructure requires a deep commitment to clinical alignment, ethical reasoning, and long-term diagnostic tracking.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
            <WhyNowSection />
            <ResponsibleAISection />
        </div>
    );
}
