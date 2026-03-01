"use client";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, Target, Rocket, Building2 } from "lucide-react";

const InvestorsSection = () => {
  return (
    <section className="py-20 lg:py-28 navy-gradient text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium font-body uppercase tracking-widest opacity-70 mb-4">
            Investors & Pilots
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
            Building the future of psychiatric intelligence
          </h2>
          <p className="mt-6 opacity-70 font-body leading-relaxed">
            PsyAIde is founder-funded and currently completing MVP development. We are raising $1M in pre-seed funding.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { icon: Target, title: "Near Term", items: ["MVP completion", "Pilot deployments", "Early revenue validation"] },
            { icon: Rocket, title: "Long Term", items: ["Structured psychiatric intelligence layer", "Longitudinal diagnostic datasets", "Infrastructure-level defensibility"] },
            { icon: Building2, title: "Seeking", items: ["Clinical pilot partners", "Healthcare operators & advisors", "Early-stage investors"] },
          ].map((col, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="rounded-xl border border-primary-foreground/10 p-6 h-full">
                <col.icon size={22} className="opacity-70 mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-sm opacity-70 font-body flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-clinical-blue shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary-foreground text-navy font-medium font-body transition-all hover:opacity-90 gap-2"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InvestorsSection;
