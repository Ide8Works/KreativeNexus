"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComparisonSection() {
  return (
    <section className="relative w-full bg-black text-white py-10 md:py-20 px-6 md:px-0 max-w-6xl mx-auto font-brand">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.3, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="hidden md:block absolute inset-0 z-20 top-64 h-[700px] bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: "url('/lightning.png')",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto text-center mb-20"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Where Chaos Becomes{" "}
          <motion.span
            className="text-yellow-400 inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px rgba(255, 215, 0, 0.6)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Creation
          </motion.span>
        </motion.h2>
        <motion.p
          className="text-[#D2D2D2] font-bold text-xl mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Watch the magic happen when misfits collaborate
        </motion.p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-40 z-0">
        {/* Before Chaos */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4 text-center"
            whileHover={{ scale: 1.05, color: "#FFD000" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Before Chaos
          </motion.h3>

          <motion.div
            className="rounded-3xl border border-white overflow-hidden shadow-xl bg-white/5 backdrop-blur-md h-[400px] group cursor-pointer"
            whileHover={{
              scale: 1.02,
              borderColor: "#FFD000",
              boxShadow: "0 0 30px rgba(255, 208, 0, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <Image
                src="/before-chaos.png"
                alt="before chaos"
                width={500}
                height={500}
                className="w-full h-auto bg-cover scale-125"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h4
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Everyone's grinding... <br />
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                the collab is loading 🔄
              </motion.span>
            </motion.h4>
            <motion.p
              className="text-[#D2D2D2] text-md md:text-lg leading-relaxed font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              In a studio buzzing with untamed ideas, every creator is lost in
              their own world — the writer chasing rhymes, the singer chasing
              notes, the dancer chasing rhythm, the videographer chasing the
              perfect shot, and the editor chasing perfection.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* After Chaos */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h3
            className="text-3xl font-bold mb-4 text-center"
            whileHover={{ scale: 1.05, color: "#FFD000" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            After Chaos
          </motion.h3>

          <motion.div
            className="rounded-3xl border border-white overflow-hidden shadow-xl bg-white/5 backdrop-blur-md h-[400px] group cursor-pointer relative"
            whileHover={{
              scale: 1.02,
              borderColor: "#FFD000",
              boxShadow: "0 0 40px rgba(255, 208, 0, 0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="absolute inset-0 bg-linear-to-t from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
            <video
              src="/chaos.mp4"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            ></video>
          </motion.div>

          <motion.div
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.h4
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255, 208, 0, 0)",
                    "0 0 20px rgba(255, 208, 0, 0.5)",
                    "0 0 0px rgba(255, 208, 0, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Where Misfits Collab and Turn Chaos Into Content
              </motion.span>
            </motion.h4>
            <motion.p
              className="text-[#D2D2D2] text-md md:text-lg leading-relaxed font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              The only place where your incomplete ideas find their perfect
              match. Where lyricists meet producers, singers find songwriters,
              and creators build something impossibly awesome together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="relative flex justify-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.button
          className="flex items-center justify-center gap-3 bg-[#FFB700] cursor-pointer text-black px-8 py-3 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:bg-yellow-300 transition font-bold text-lg relative overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className="text-xs md:text-lg text-black relative z-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/1A1A1A/globe--v1.png"
              alt="globe--v1"
            />
          </motion.span>
          <span className="relative z-10">Join Whatsapp Channel</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
