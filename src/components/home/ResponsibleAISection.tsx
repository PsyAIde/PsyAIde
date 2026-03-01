"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { ShieldAlert, Lock, Users, Eye, Activity, Heart } from "lucide-react";

const principles = [
  {
    icon: Lock,
    title: "Privacy-First",
    text: "Secure-by-design architecture ensuring clinical data remains confidential and protected with enterprise-grade security standards."
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    text: "Clinician oversight at every step; our AI supports, but NEVER replaces, the nuanced judgment of a mental health professional."
  },
  {
    icon: Eye,
    title: "Transparent Reasoning",
    text: "Explainable signals help clinicians understand the 'why' behind pattern recognition, fostering trust and deliberate reasoning."
  },
  {
    icon: Activity,
    title: "Clinically Aligned",
    text: "Built from within the psychiatric workflow, designed to reflect the complexity and longitudinal nature of mental health care."
  },
];

const ResponsibleAISection = () => {
  return (
    <section id="regulatory" className="py-24 lg:py-36 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-20 text-balance">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-10">
            <ShieldAlert size={14} />
            Ethical Alignment
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-8">
            Mental healthcare requires careful and ethical AI deployment.
          </h2>
          <p className="text-xl text-slate-500 font-body leading-relaxed max-w-2xl mx-auto">
            PsyAIde is building safety-critical infrastructure. We prioritize clinician oversight, data privacy, and explainable intelligence in every line of code.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {principles.map((p, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className="bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-8">
                <p.icon size={24} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-slate-900 leading-snug">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-body">
                {p.text}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="max-w-4xl mx-auto text-center bg-slate-900 p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-slate-900/20 text-white">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8">
              <Heart size={32} className="text-primary fill-primary/20 animate-pulse" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-bold italic leading-relaxed text-slate-100">
              "We are committed to responsible AI that enhances clinician expertise while respecting the complexity of mental health care."
            </p>
            <div className="mt-8 h-px bg-slate-800 w-24" />
            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-400">Our Core Commitment</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResponsibleAISection;
