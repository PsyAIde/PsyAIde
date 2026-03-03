"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroBrain from "@/assets/hero-brain.png";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex-1 max-w-[616px] mx-auto relative group"
    >
      <div className="relative z-10">
        {/* Floating Neural Graphic */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-[8px] border-white/80 aspect-square max-w-[520px] mx-auto backdrop-blur-sm transition-transform duration-1000 group-hover:scale-[1.02]">
          <Image
            src={heroBrain}
            alt="PsyAIde Neural Intelligence Network"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Background Decorative Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-sky-100 rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sky-50 rounded-full -z-10" />
    </motion.div>
  );
};

export default HeroImage;
