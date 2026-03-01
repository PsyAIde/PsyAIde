"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is PsyAIde a documentation tool?",
    answer: "No. PsyAIde does not automate note writing. It structures diagnostic reasoning across time.",
  },
  {
    question: "Does PsyAIde replace clinicians?",
    answer: "No. PsyAIde augments clinical judgment. It does not automate or override it.",
  },
  {
    question: "How is data handled?",
    answer: "We are designing PsyAIde with privacy-first architecture and responsible AI principles at its core.",
  },
  {
    question: "Who is PsyAIde for?",
    answer: "Forward-thinking psychiatric practices and mental health organizations seeking deeper diagnostic clarity and longitudinal insight.",
  },
  {
    question: "What stage are you in?",
    answer: "We are completing our MVP and onboarding early pilot partners.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 lg:py-36 bg-slate-50 overflow-hidden relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
            FAQ section
          </h2>
        </AnimatedSection>

        <AnimatedSection className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/50">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0 border-slate-100">
                <AccordionTrigger className="text-xl font-heading font-bold text-slate-900 text-left hover:no-underline hover:text-primary transition-colors py-8">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-slate-500 font-body leading-relaxed pb-8">
                  {faq.answer}
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
