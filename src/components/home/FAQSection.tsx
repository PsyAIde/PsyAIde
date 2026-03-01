"use client";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is PsyAIde a documentation tool?",
    a: "No. PsyAIde does not automate note writing. It structures diagnostic reasoning across time.",
  },
  {
    q: "Does PsyAIde replace clinicians?",
    a: "No. PsyAIde augments clinical judgment. It does not automate or override it.",
  },
  {
    q: "How is data handled?",
    a: "We are designing PsyAIde with privacy-first architecture and responsible AI principles at its core.",
  },
  {
    q: "Who is PsyAIde for?",
    a: "Forward-thinking psychiatric practices and mental health organizations seeking deeper diagnostic clarity and longitudinal insight.",
  },
  {
    q: "What stage are you in?",
    a: "We are completing our MVP and onboarding early pilot partners.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium font-body uppercase tracking-widest text-primary mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-body font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-body text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
