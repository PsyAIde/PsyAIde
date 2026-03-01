"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium font-body mb-6">
            <AlertTriangle size={14} />
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Psychiatric diagnosis is broken by design
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              text: "Psychiatric diagnosis unfolds over time. It depends on recognizing patterns across visits, symptom evolution, and subtle changes in functioning.",
            },
            {
              text: "Yet most of this information lives inside disconnected, unstructured notes. Clinicians must manually reconstruct diagnostic reasoning across providers and time.",
            },
            {
              text: "Important signals can be difficult to track. Continuity relies on memory rather than infrastructure.",
            },
            {
              text: "Most AI tools in mental health focus on documentation efficiency. None address the core problem: structured, longitudinal diagnostic reasoning.",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full">
                <p className="text-muted-foreground font-body leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="text-lg font-heading font-semibold text-primary">
            Mental healthcare deserves better systems.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSection;
