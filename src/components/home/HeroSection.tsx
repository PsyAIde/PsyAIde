"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <HeroContent />
        <HeroImage />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
