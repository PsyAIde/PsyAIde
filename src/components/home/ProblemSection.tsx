"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import problemImg from "@/assets/problem_disconnected.png";

const ProblemSection = () => {
    return (
        <section id="problem" className="py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] items-center gap-16 lg:gap-24 overflow-visible">

                    {/* Left: Visual Evidence (approx 30-40% space) */}
                    <div className="w-full">
                        <AnimatedSection delay={0.1}>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-white border-[6px]">
                                <Image
                                    src={problemImg}
                                    alt="Problem of fragmented medical data"
                                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent pointer-events-none" />
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right: Content (approx 60-70% space) */}
                    <div className="max-w-3xl">
                        <AnimatedSection delay={0.2}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-8">
                                The Problem
                            </h2>
                            <div className="space-y-8 text-[18px] text-slate-500 font-body leading-relaxed">
                                <p>
                                    Psychiatric diagnosis unfolds over time. It depends on recognizing patterns across visits, symptom evolution, and subtle changes in functioning.
                                </p>
                                <p>
                                    Yet most of this information lives inside disconnected, unstructured notes. Clinicians must manually reconstruct diagnostic reasoning across providers and time, often under significant pressure. Important signals can be difficult to track. Continuity relies on memory rather than infrastructure.
                                </p>
                                <p>
                                    Most AI tools in mental health focus on documentation efficiency. None address the core problem: structured, longitudinal diagnostic reasoning.
                                </p>
                                <div className="pt-4">
                                    <p className="inline-block text-2xl font-bold text-slate-900 border-b-2 border-primary/20 pb-1">
                                        Mental healthcare deserves better systems.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
