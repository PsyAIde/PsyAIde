"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Mail, ArrowRight, ShieldCheck, Flag, CheckCircle2 } from "lucide-react";

const InvestorsSection = () => {
  return (
    <section id="investors" className="py-24 lg:py-36 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
            Investors & Pilots
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection className="flex flex-col gap-12 bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl shadow-sky-500/10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-sky-400">
                <Flag size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">Current Stage</span>
              </div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-[1.2]">
                PsyAIde is founder funded and currently completing MVP development.
              </p>
              <p className="text-lg text-slate-400 font-body leading-relaxed mb-6 italic border-l-2 border-sky-500 pl-6">
                We are raising $1,000,000 in pre seed funding to:
              </p>
              <ul className="space-y-4 text-slate-300 font-body text-md font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-sky-500" />
                  Complete product development
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-sky-500" />
                  Launch structured clinician pilots
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-sky-500" />
                  Validate workflow integration
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-sky-500" />
                  Begin building our proprietary longitudinal diagnostic dataset
                </li>
              </ul>
              <p className="mt-8 text-xl font-bold font-heading text-sky-400">
                This round provides approximately 18 months of runway through pilot traction and early revenue validation.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-16">
            <AnimatedSection className="flex flex-col gap-8">
              <div className="flex items-center gap-4 text-sky-400">
                <ShieldCheck size={24} />
                <span className="text-xs font-bold uppercase tracking-widest">What We Are Building Toward</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <h4 className="text-xl font-heading font-bold mb-4 text-white">Near Term</h4>
                  <ul className="space-y-3 text-sm text-slate-400 font-body tracking-wide font-medium">
                    <li>• MVP completion</li>
                    <li>• Pilot deployments with forward thinking psychiatric practices</li>
                    <li>• Early revenue validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-heading font-bold mb-4 text-white">Long Term</h4>
                  <ul className="space-y-3 text-sm text-slate-400 font-body tracking-wide font-medium">
                    <li>• Structured psychiatric intelligence layer</li>
                    <li>• Longitudinal diagnostic datasets</li>
                    <li>• Infrastructure-level defensibility in mental health AI</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-col gap-10 bg-primary/20 p-12 rounded-[3.5rem] border border-primary text-center">
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-heading font-bold text-white">Join Us</h3>
                <p className="text-lg text-slate-400 font-body font-medium leading-[1.2] mb-10">
                  We are actively seeking: Clinical pilot partners, Healthcare operators and advisors, Early stage investors aligned with long-term infrastructure building.
                </p>
                <a
                  href="mailto:hello@psyaide.ai"
                  className="inline-flex items-center justify-center h-16 w-full px-8 rounded-full bg-primary text-primary-foreground font-bold text-xl transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 gap-3"
                >
                  <Mail size={24} />
                  hello@psyaide.ai
                  <ArrowRight size={24} />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
