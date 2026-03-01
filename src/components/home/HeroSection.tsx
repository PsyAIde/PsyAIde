"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroClinical from "@/assets/hero-clinical.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative outline-none overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(210 100% 30%) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto justify-center px-4 lg:px-8 py-24 lg:py-36 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="flex-1 max-w-2xl">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-body mb-6"
            >
              <Sparkles size={14} />
              AI-Powered Clinical Reasoning Support
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight tracking-tight"
            >
              Clarity in Psychiatric{" "}
              <span className="text-gradient">Diagnosis</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground font-body leading-relaxed"
            >
              PsyAIde transforms fragmented clinical notes into structured, longitudinal diagnostic insight. We help clinicians see patterns across time, think more clearly, and deliver higher quality mental healthcare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-primary text-primary-foreground font-medium font-body transition-all hover:opacity-90 gap-2"
              >
                Join the Pilot
                <ArrowRight size={16} />
              </Link>
              <a
                href="#solution"
                className="inline-flex items-center justify-center h-12 px-6 rounded-lg border bg-card text-foreground font-medium font-body transition-all hover:bg-muted gap-2"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/50 aspect-[4/3]">
              <Image
                src={heroClinical}
                alt="Clinician using AI-powered diagnostic tools to analyze brain imaging data"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
