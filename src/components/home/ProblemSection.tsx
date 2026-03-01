"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";
import problemImg from "@/assets/problem_data.png";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Visual Evidence */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <AnimatedSection className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-white border-2">
                <Image
                  src={problemImg}
                  alt="Problem of fragmented medical data"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Content */}
          <div className="flex-1 order-1 lg:order-2">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-10">
                The Problem
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-slate-600 font-body leading-relaxed">
                <p>
                  Psychiatric diagnosis unfolds over time. It depends on recognizing patterns across visits, symptom evolution, and subtle changes in functioning.
                </p>
                <p>
                  Yet most of this information lives inside disconnected, unstructured notes. Clinicians must manually reconstruct diagnostic reasoning across providers and time, often under significant pressure. Important signals can be difficult to track. Continuity relies on memory rather than infrastructure.
                </p>
                <p>
                  Most AI tools in mental health focus on documentation efficiency. None address the core problem: structured, longitudinal diagnostic reasoning.
                </p>
                <p className="font-bold text-slate-900">
                  Mental healthcare deserves better systems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
