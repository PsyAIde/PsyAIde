"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroClinical from "@/assets/hero-clinical.jpg";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-sky-200/30 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
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
              PsyAIde transforms fragmented clinical notes into structured, longitudinal diagnostic insight. We help clinicians see patterns across time, think more clearly, and deliver higher quality mental healthcare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row items-center gap-5"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold text-lg transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:scale-95 gap-3"
              >
                Join the Pilot
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#product"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 rounded-full glass text-slate-700 font-semibold text-lg transition-all hover:bg-white hover:shadow-lg gap-2"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Right: Immersive Image Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full relative"
          >
            <div className="relative z-10">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[8px] border-white aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src={heroClinical}
                  alt="Modern psychiatric clinical interface"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Background Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-sky-100 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sky-50 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
