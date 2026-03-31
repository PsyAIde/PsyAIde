"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const PitchVideoSection = () => {
  return (
    <section id="pitch" className="py-24 lg:py-36 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy leading-tight mb-6">
            See PsyAIde in Action
          </h2>
          <p className="text-lg text-slate-500 font-body">
            Watch our pitch to learn how PsyAIde transforms psychiatric care.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="max-w-4xl mx-auto">
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
            <video
              src="/pitch.mp4"
              controls
              className="w-full"
              playsInline
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PitchVideoSection;
