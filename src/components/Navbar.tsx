"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-5 left-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between w-[95%] max-w-[1400px] bg-white/90 backdrop-blur-md rounded-full border-[3px] border-[#D4AF37] py-2.5 px-4 md:px-6 shadow-[0_4px_25px_rgba(212,175,55,0.25)] pointer-events-auto"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="Kreative Nexus"
              width={32}
              height={32}
              className="md:w-10 md:h-10"
            />
          </motion.div>

          <div className="flex flex-col font-climate">
            <span className="text-black font-bold tracking-wider text-[10px] md:text-sm lg:text-base">
              KREATIVE
            </span>
            <span className="text-black font-bold tracking-wider text-[10px] md:text-sm lg:text-base">
              NEXUS
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative flex items-center gap-2 md:gap-2.5 bg-linear-to-r from-[#FFB700] to-[#FFD000] text-black px-3 md:px-5 py-2 rounded-2xl shadow-[0_2px_10px_rgba(255,208,0,0.3)] font-brand font-bold text-xs md:text-base lg:text-lg overflow-hidden cursor-pointer"
        >
          {/* Shine overlay */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/40 to-transparent" />

          {/* Icon */}
          <img
            src="https://img.icons8.com/ios/50/1A1A1A/globe--v1.png"
            alt="globe"
            width={18}
            height={18}
            className="md:w-5 md:h-5"
          />

          <span className="relative z-10 tracking-wider">Community</span>
        </motion.button>
      </motion.div>
    </header>
  );
}
