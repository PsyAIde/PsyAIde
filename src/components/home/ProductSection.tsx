"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Search, LineChart, Target, Workflow, XCircle } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="product" className="py-24 lg:py-36 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
            What PsyAIde Does
          </h2>
          <p className="mt-8 text-xl text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
            PsyAIde uses advanced natural language processing to extract clinically meaningful signals from psychiatric documentation, including:
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-24">
          <AnimatedSection className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50">
            <Search className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4 text-slate-900">Clinically Meaningful Signals</h3>
            <ul className="space-y-3 text-slate-500 font-body text-sm leading-relaxed">
              <li>• Core symptom domains</li>
              <li>• Supporting symptom clusters</li>
              <li>• Duration and severity modifiers</li>
              <li>• Functional impairment indicators</li>
              <li>• Differential diagnostic considerations</li>
            </ul>
            <p className="mt-6 text-slate-600 font-body text-sm leading-relaxed">
              These signals are mapped into a structured framework designed specifically for longitudinal psychiatric reasoning. Over time, this creates a dynamic diagnostic map rather than static documentation.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50">
            <LineChart className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4 text-slate-900">Longitudinal Diagnostic Tracking</h3>
            <p className="text-slate-600 font-body text-sm leading-relaxed">
              Psychiatric clarity emerges over multiple visits. PsyAIde tracks evolving symptom patterns, shifts in severity, and diagnostic hypotheses across time. Clinicians can visualize continuity and change without manually reconstructing past notes.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50">
            <Target className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4 text-slate-900">Differential Awareness</h3>
            <p className="text-slate-600 font-body text-sm leading-relaxed">
              Mental health diagnoses often overlap. PsyAIde supports awareness of competing or co-occurring conditions by organizing diagnostic signals into structured domains. This supports more deliberate and transparent clinical reasoning.
            </p>
          </AnimatedSection>

          <AnimatedSection className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50">
            <Workflow className="h-10 w-10 text-primary mb-6" />
            <h3 className="text-xl font-heading font-bold mb-4 text-slate-900">Workflow Integration</h3>
            <p className="text-slate-600 font-body text-sm leading-relaxed">
              PsyAIde is designed to fit into existing clinical workflows. It does not replace note writing or billing systems. It supports the thinking layer behind care delivery.
            </p>
          </AnimatedSection>

          <AnimatedSection className="navy-gradient p-10 rounded-[2rem] shadow-xl shadow-sky-900/20 border border-sky-500/10 text-white lg:col-span-2 relative overflow-hidden">
            {/* Subtle glow effect behind the card */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-10 items-center h-full relative z-10">
              <div className="flex-1">
                <XCircle className="h-12 w-12 text-sky-400 mb-6" />
                <h3 className="text-2xl font-heading font-bold mb-4">What We Are Not</h3>
                <ul className="space-y-4 text-slate-300 font-body text-lg font-medium">
                  <li>• Not a documentation scribe</li>
                  <li>• Not a billing optimization tool</li>
                  <li>• Not replacing clinical judgment</li>
                </ul>
              </div>
              <div className="w-full md:w-[1px] h-[1px] md:h-full bg-white/10" />
              <div className="flex-1 text-center">
                <h4 className="text-3xl font-heading font-bold text-white mb-2 underline decoration-sky-400 underline-offset-8 decoration-4">Our Mission</h4>
                <p className="text-xl text-slate-400 font-body">We are building reasoning infrastructure.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
