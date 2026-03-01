"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TrendingUp, Cpu, Lightbulb } from "lucide-react";

const items = [
  {
    icon: TrendingUp,
    title: "Rising Demand in Mental Health",
    description: "Global demand for mental healthcare continues to rise. Clinicians face increasing complexity, caseload pressure, and continuity challenges.",
  },
  {
    icon: Cpu,
    title: "AI Adoption in Healthcare",
    description: "Most AI applications focus on efficiency, automation, or transcription. Few address the deeper cognitive layer: diagnostic reasoning across time.",
  },
  {
    icon: Lightbulb,
    title: "Our Thesis",
    description: "In the future, psychiatric diagnostic reasoning will live inside structured, longitudinal intelligence systems. PsyAIde is building that foundation today.",
  },
];

const WhyNowSection = () => {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
            Why Now
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            The convergence is happening
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="glass-card rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
