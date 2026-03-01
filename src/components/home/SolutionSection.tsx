"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Brain, Clock, UserCheck } from "lucide-react";
import Image from "next/image";
import solutionImg from "@/assets/solution_intelligence.png";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Right Content */}
          <div className="flex-1 max-w-2xl">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-8">
                The Solution
              </h2>
              <div className="space-y-6 text-xl text-slate-400 font-body leading-relaxed mb-12">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                {principles.map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 border border-sky-500/20">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Immersive Visual */}
          <div className="flex-1 w-full">
            <AnimatedSection className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(14,165,233,0.15)] border border-white/10 group">
                <Image
                  src={solutionImg}
                  alt="Futuristic clinical diagnostic intelligence"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
