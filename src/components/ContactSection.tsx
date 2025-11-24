"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-6 py-20 md:py-24 relative font-brand overflow-hidden"
      style={{
        backgroundImage: "url('/lightning.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Ambient particles (subtle) */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-2"
      >
        {/* Animated Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight -mb-4"
        >
          Stop scrolling Ideas.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 leading-tight tracking-tight mb-6"
        >
          Start creating them.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#D2D2D2] text-base md:text-lg lg:text-xl font-semibold max-w-3xl mx-auto leading-tight whitespace-pre-line"
        >
          {`Your seat at the 2025 New Year's stage is waiting.\nJoin thousands of creators turning chaos into content.`}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {[
            { text: "Join Whatsapp Channel", icon: "/globe.svg" },
            { text: "📸 Follow on Instagram", icon: null },
          ].map((btn, i) => (
            <motion.button
              key={i}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="relative w-fit bg-linear-to-r from-yellow-400 to-yellow-500 text-black text-lg font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2.5 overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 group cursor-pointer"
            >
              {/* Shine overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent" />

              {/* Hover background shift */}
              <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <span className="relative z-10 flex items-center gap-1.5">
                {btn.icon && (
                  <Image src={btn.icon} alt="" width={20} height={20} />
                )}
                {btn.text}
              </span>
              <span className="relative z-10 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                →
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Secondary Upload CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 w-full flex justify-center"
        >
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-fit bg-linear-to-r from-yellow-400 to-orange-400 text-black text-lg font-bold px-8 py-3 rounded-full flex items-center justify-center gap-3 overflow-hidden shadow-lg hover:shadow-orange-400/40 transition-all duration-300 group cursor-pointer"
          >
            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/25 to-transparent" />
            {/* Hover bg */}
            <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Text */}
            <span className="relative z-10">
              ⬆️ Upload your work with #Kreative
            </span>
            <span className="relative z-10 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              →
            </span>
          </motion.button>
        </motion.div>

        {/* Bottom Accent Pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-full backdrop-blur-sm group"
        >
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm md:text-base font-medium group-hover:text-yellow-400 transition-colors">
            Seats are limited. Chaos is infinite.
          </span>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
