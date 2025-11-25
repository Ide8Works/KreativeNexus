"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      icon: "/upload.png",
      title: "Drop In (Like a Meme)",
      description:
        "Join our WhatsApp community — no gatekeeping, just good vibes.",
      color: "from-yellow-500/20 to-orange-500/20",
      glowColor: "rgba(255, 180, 0, 0.3)",
    },
    {
      number: "02",
      icon: "/search.png",
      title: "Find Your Missing Piece",
      description:
        "Match with others in your genre — singers, dancers, editors, all under one roof.",
      color: "from-purple-500/20 to-pink-500/20",
      glowColor: "rgba(168, 85, 247, 0.3)",
    },
    {
      number: "03",
      icon: "/community.png",
      title: "Make Stuff Together",
      description:
        "Upload your work, build teams, and create magic for the world to see",
      color: "from-blue-500/20 to-cyan-500/20",
      glowColor: "rgba(59, 130, 246, 0.3)",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-10 md:py-20 px-6 md:px-0 max-w-6xl mx-auto font-brand relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          3 Steps to Go From{" "}
          <motion.span
            className="text-yellow-400 inline-block"
            whileHover={{
              scale: 1.1,
              rotate: [-2, 2, -2, 0],
              textShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
            }}
            transition={{
              rotate: { duration: 0.5 },
              scale: { type: "spring", stiffness: 300 },
            }}
          >
            Meme
          </motion.span>{" "}
          to Masterpiece
        </motion.h2>
        <motion.p
          className="text-[#D2D2D2] mt-3 font-bold text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Your creative journey starts here
        </motion.p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Connecting lines */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
          <motion.div
            className="h-full bg-linear-to-r from-yellow-500/50 via-purple-500/50 to-blue-500/50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="relative group"
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ background: step.glowColor }}
              />

              {/* Main card */}
              <div
                className={`relative rounded-2xl border border-white/20 bg-linear-to-br ${step.color} backdrop-blur-sm px-8 py-16 text-center overflow-hidden`}
              >
                {/* Animated gradient overlay */}
                <motion.div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number badge */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-4xl font-black text-black drop-shadow-lg">
                    {step.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="absolute top-5 left-5 bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={step.icon}
                    alt="Step Icon"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>

                <div className="flex flex-col items-center justify-center h-full relative z-10 mt-6">
                  <motion.h3
                    className="text-6xl font-extrabold tracking-tight bg-linear-to-br from-white to-gray-400 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {step.number}
                  </motion.h3>

                  <motion.p
                    className="text-2xl sm:text-3xl mt-6 font-bold"
                    whileHover={{
                      scale: 1.05,
                      color: "#FFD000",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {step.title}
                  </motion.p>

                  <motion.p
                    className="text-[#D2D2D2] font-bold mt-4 leading-relaxed max-w-[300px] text-sm sm:text-lg sm:leading-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Animated arrow indicator */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2"
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Particle effects on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
