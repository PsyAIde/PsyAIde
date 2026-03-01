"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Brain, Clock, UserCheck } from "lucide-react";

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
    <section id="solution" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            The AI infrastructure layer for psychiatric diagnostic reasoning
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            Our platform transforms narrative clinical language into structured diagnostic insight. Instead of generating notes, PsyAIde builds a living diagnostic intelligence layer that evolves across visits.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card rounded-xl p-8 text-center h-full group hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {p.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
