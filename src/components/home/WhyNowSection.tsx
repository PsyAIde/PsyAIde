"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrendingUp, Cpu, Lightbulb, ArrowUpRight } from "lucide-react";

const WhyNowSection = () => {
  return (
    <section id="why-now" className="py-24 lg:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-balance mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-slate-900 tracking-tight leading-[1.1]">
                Why Now?
              </h2>
              <p className="mt-8 text-xl text-slate-500 font-body leading-relaxed italic border-l-4 border-primary pl-6">
                "Psychiatric diagnostic infrastructure has not meaningfully evolved in decades. We are at a critical inflection point."
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Card 1: Rising Demand */}
          <AnimatedSection className="md:col-span-4 h-full">
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm mb-10">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Rising Demand</h3>
              <p className="text-lg text-slate-500 font-body leading-relaxed">
                Global demand for mental healthcare continues to rise. Clinicians face increasing complexity, caseload pressure, and continuity challenges.
              </p>
              <div className="mt-auto pt-10">
                <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  Market Context <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: AI Adoption Core Layer */}
          <AnimatedSection className="md:col-span-4 h-full" delay={0.2}>
            <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm mb-10">
                <Cpu size={28} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">AI Core Layer</h3>
              <p className="text-lg text-slate-500 font-body leading-relaxed">
                Most AI healthcare apps focus on transcription. Few address the deeper cognitive layer of medicine: diagnostic reasoning across time.
              </p>
              <div className="mt-auto pt-10">
                <div className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  Technical Void <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3: Our Thesis (The Highlight) */}
          <AnimatedSection className="md:col-span-4" delay={0.4}>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col h-full relative overflow-hidden shadow-xl shadow-slate-200/50">
              <div className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
                <Lightbulb size={16} fill="currentColor" />
                The PsyAIde Thesis
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-slate-900 leading-[1.2] mb-10">
                Foundational Reasoning &gt; Documentation Scribes.
              </p>
              <p className="text-lg text-slate-600 font-body leading-relaxed">
                In the future, psychiatric diagnostic reasoning will not live solely inside static notes. It will live inside structured, longitudinal intelligence systems.
              </p>
              <div className="mt-auto pt-10 border-t border-slate-100 w-full mt-10">
                <p className="text-lg text-slate-900 font-heading font-bold">
                  PsyAIde is building that foundation today.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
