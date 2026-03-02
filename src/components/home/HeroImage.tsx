"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroClinical from "@/assets/hero-clinical.jpg";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex-1 max-w-[616px] mx-auto relative"
    >
      <div className="relative z-10">
        {/* square frame, slightly smaller with thinner border */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-[6px] border-white aspect-square max-w-[504px] mx-auto">
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
  );
};

export default HeroImage;
