"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Shield, Eye, Users, Stethoscope } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Privacy-First Architecture", description: "Built with data protection and security at the foundation." },
  { icon: Users, title: "Human-in-the-Loop", description: "Clinicians remain in control of all diagnostic decisions." },
  { icon: Eye, title: "Transparent Reasoning", description: "Clear, explainable AI that supports clinical confidence." },
  { icon: Stethoscope, title: "Clinical Alignment", description: "Designed with and for psychiatric professionals." },
];

const ResponsibleAISection = () => {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
            Responsible AI
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Ethics at our core
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            Mental healthcare requires careful and ethical AI deployment. We are committed to responsible AI that enhances clinician expertise while respecting the complexity of mental health care.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-sm font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{p.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibleAISection;
