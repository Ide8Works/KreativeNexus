"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-40 pt-28 md:pt-32 pb-12 md:pb-20 bg-black font-brand overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        whileHover={{
          opacity: 0.4,
          scale: 1.1,
          rotate: 5,
        }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="hidden md:block absolute left-10 bottom-10 z-20 cursor-pointer"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image src="/lyrics.png" alt="music" width={120} height={120} />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{
          scale: 1.05,
          rotate: -12,
          boxShadow: "0 8px 24px rgba(255, 255, 255, 0.15)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="hidden md:block absolute top-36 right-[30%] md:right-[60%] translate-x-[20%] -rotate-8 bg-white/10 border border-white/20 text-[#D2D2D2] px-4 py-1 rounded-full backdrop-blur-sm text-xs md:text-lg z-20 cursor-default"
      >
        <motion.span
          animate={{
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Doggo wrote a banger rap but can't sing
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{
          scale: 1.08,
          rotate: 12,
          boxShadow: "0 8px 24px rgba(255, 255, 255, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="hidden md:block absolute bottom-20 md:right-[55%] rotate-[8deg] bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm text-xs md:text-sm z-20 font-bold cursor-default"
      >
        <motion.span
          animate={{
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          Kitty can sing, but only knows meow-meow.
        </motion.span>
      </motion.div>

      <div className="flex flex-col gap-10 md:flex-row justify-between items-center w-full max-w-6xl relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <motion.h1
            className="text-4xl md:text-7xl font-bold uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#FFD000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              The War Against
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.05, color: "#FFD000" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AI Begins Now
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-white text-sm md:text-xl leading-tight"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              4 stages, 4 cities. Unlock them by Dec 15.
            </motion.span>
            <br />
            Will you fight for your art?
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-6 md:mt-10"
          >
            <motion.button
              className="flex items-center gap-2 bg-[#FFD000] text-black px-6 py-3.5 rounded-2xl text-base md:text-lg font-bold shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#F8D146] active:shadow-[0_2px_6px_rgba(0,0,0,0.3)] transition-all duration-200 cursor-pointer relative overflow-hidden group"
              whileHover={{
                boxShadow: "0 8px 24px rgba(255, 208, 0, 0.4)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image src="/globe.svg" alt="globe" width={20} height={20} />
              </motion.div>
              <span className="relative z-10">Join Whatsapp Channel</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.02,
            rotate: [0, 1, -1, 0],
          }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="relative z-30 mt-8 md:mt-0"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/heroimg2.png"
              alt="Hero visual"
              width={500}
              height={500}
              className="opacity-100 max-w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
        style={{ backgroundImage: "url('/bg-gradient.jpg')" }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
