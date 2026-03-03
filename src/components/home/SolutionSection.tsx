"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Brain, Clock, UserCheck } from "lucide-react";
import Image from "next/image";
import solutionTimeline from "@/assets/solution_timeline.png";

const principles = [
  {
    icon: Brain,
    title: "Structured Intelligence",
    description: "We convert unstructured language into machine-readable diagnostic signals.",
  },
  {
    icon: Clock,
    title: "Longitudinal Awareness",
    description: "We track patterns across time, not just within a single encounter.",
  },
  {
    icon: UserCheck,
    title: "Clinician-Centered",
    description: "We augment clinical reasoning. We do not replace it.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 lg:py-36 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-center gap-16 lg:gap-24">

          {/* Left Content (60-70% space) */}
          <div className="space-y-12 flex flex-col justify-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8 text-balance">
                The Solution
              </h2>

              <div className="space-y-6 text-[18px] text-slate-400 font-body leading-relaxed max-w-2xl mb-12">
                <p>
                  PsyAIde is building the AI infrastructure layer for psychiatric diagnostic reasoning.
                </p>
                <p>
                  Our platform transforms narrative clinical language into structured diagnostic insight. Instead of generating notes, PsyAIde builds a living diagnostic intelligence layer that evolves across visits.
                </p>
                <p>
                  We support clearer thinking, better continuity, and stronger clinical confidence.
                </p>
              </div>

              {/* Principles List (Vertical) */}
              <div className="space-y-8 max-w-2xl">
                {principles.map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 transition-all duration-300 group-hover:bg-slate-800 group-hover:border-sky-500/30">
                      <item.icon size={22} strokeWidth={2} />
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <h3 className="text-[20px] font-serif font-bold text-white transition-colors group-hover:text-sky-400">
                        {item.title}
                      </h3>
                      <p className="text-[16px] text-slate-400 leading-relaxed font-body">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual (30-40% space) */}
          <div className="w-full h-full">
            <AnimatedSection delay={0.2} className="h-full">
              <div className="relative h-full rounded-[3.5rem] p-4 bg-white/5 border border-white/10 shadow-[0_0_80px_rgba(14,165,233,0.15)] overflow-hidden">
                <div className="relative h-full rounded-[2.5rem] overflow-hidden group">
                  <Image
                    src={solutionTimeline}
                    alt="PsyAIde Diagnostic Intelligence Timeline"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  {/* Subtle glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
