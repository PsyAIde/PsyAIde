"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Activity, GitBranch, Layers, Settings, XCircle } from "lucide-react";

const features = [
  { icon: Activity, text: "Core symptom domains & supporting clusters" },
  { icon: Layers, text: "Duration and severity modifiers" },
  { icon: GitBranch, text: "Differential diagnostic considerations" },
  { icon: Settings, text: "Workflow integration without replacing note writing" },
];

const notItems = [
  "Not a documentation scribe",
  "Not a billing optimization tool",
  "Not replacing clinical judgment",
];

const ProductSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            What PsyAIde Does
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            PsyAIde uses advanced natural language processing to extract clinically meaningful signals from psychiatric documentation, creating a dynamic diagnostic map rather than static documentation.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-xl border bg-card hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <f.icon size={18} className="text-primary" />
                </div>
                <p className="text-sm text-foreground font-body leading-relaxed pt-2">
                  {f.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* What We Are Not */}
        <AnimatedSection className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-5 text-center">
              What We Are Not
            </h3>
            <div className="space-y-3">
              {notItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <XCircle size={16} className="text-destructive shrink-0" />
                  <p className="text-sm font-body text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-heading font-semibold text-primary text-center">
              We are building reasoning infrastructure.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductSection;
