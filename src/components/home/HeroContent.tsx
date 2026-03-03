"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex-1 max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight"
      >
        Clarity in <br />
        <span className="text-gradient">Psychiatric Diagnosis</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 text-xl md:text-2xl text-slate-600 font-body leading-relaxed max-w-xl"
      >
        PsyAIde transforms fragmented clinical notes into structured, longitudinal
        diagnostic insight. We help clinicians see patterns across time, think more
        clearly, and deliver higher quality mental healthcare.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-5"
      >
        <Link
          href="/pilot"
          className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-10 rounded-full bg-primary text-primary-foreground font-bold transition-all hover:shadow hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 gap-3"
        >
          Join the Pilot
          <ArrowRight size={20} />
        </Link>

        <Link
          href="#product"
          className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-10 rounded-full border text-slate-700 font-semibold transition-all hover:bg-white gap-2"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroContent;
