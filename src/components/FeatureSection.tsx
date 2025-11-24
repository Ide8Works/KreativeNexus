"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const cards = [
    { title: "Writer", image: "/mic.png", hashtag: "#KreativeWords", delay: 0 },
    {
      title: "Singer",
      image: "/cat.png",
      hashtag: "#KreativeVoice",
      delay: 0.1,
    },
    {
      title: "Dancer",
      image: "/duck.png",
      hashtag: "#KreativeMoves",
      delay: 0.2,
    },
    {
      title: "Videographer",
      image: "/monkey.png",
      hashtag: "#KreativeVision",
      delay: 0.3,
    },
    {
      title: "Editor",
      image: "/lizard.png",
      hashtag: "#KreativeCuts",
      delay: 0.4,
    },
    {
      title: "Innovators",
      image: "/innovation.png",
      hashtag: "#KreativeMinds",
      delay: 0.5,
    },
  ];

  return (
    <section className="relative w-full text-white py-10 md:py-20 px-6 overflow-hidden z-0 font-brand font-bold">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto text-center mb-20"
      >
        <motion.h2
          className="text-4xl md:text-5xl mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Struggle is Real (and Relatable)
        </motion.h2>
        <motion.p
          className="text-[#D2D2D2]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="text-md md:text-xl">
            Everyone's got talent. No one's got a team.
          </span>
          <br />
          <motion.span
            className="text-md"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Use these #hastags to showcase yours
          </motion.span>
        </motion.p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {cards.slice(0, 3).map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center group cursor-pointer"
          >
            <motion.div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <motion.div
              className="absolute top-5 w-full text-center z-20 text-3xl"
              whileHover={{ scale: 1.1, color: "#FFD000" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {card.title}
            </motion.div>

            <motion.div
              className="relative w-full h-80 md:h-[380px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={card.image}
                alt={card.title.toLowerCase()}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20"
              whileHover={{
                scale: 1.1,
                opacity: 1,
                color: "#FFD000",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {card.hashtag}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-14">
        {cards.slice(3, 6).map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: card.delay, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -10,
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="relative bg-white/5 rounded-3xl border border-white overflow-hidden shadow-lg text-center group cursor-pointer"
          >
            <motion.div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <motion.div
              className="absolute top-5 w-full text-center z-20 text-3xl"
              whileHover={{ scale: 1.1, color: "#FFD000" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {card.title}
            </motion.div>

            <motion.div
              className="relative w-full h-80 md:h-[380px] overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={card.image}
                alt={card.title.toLowerCase()}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-5 w-full text-center text-white text-sm md:text-2xl opacity-90 z-20"
              whileHover={{
                scale: 1.1,
                opacity: 1,
                color: "#FFD000",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {card.hashtag}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
        whileInView={{ opacity: 1, rotate: -30, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          rotate: -25,
          scale: 1.1,
          transition: { type: "spring", stiffness: 300 },
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src="/camera.png"
          className="hidden md:block absolute top-0 right-0 -rotate-30 h-30 w-30"
          alt="camera decoration"
        />
      </motion.div>
    </section>
  );
}
