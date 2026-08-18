"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function RakhiCeremony({ onNext }) {
  const [isTied, setIsTied] = useState(false);

  const handleTieRakhi = () => {
    if (isTied) return;

    setIsTied(true);

    setTimeout(() => {
      onNext();
    }, 2600);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-5 py-16">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[8%] w-40 h-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[15%] right-[8%] w-48 h-48 rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-3xl flex flex-col items-center text-center">

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <p className="text-yellow-300/80 text-xs sm:text-sm tracking-[0.3em] uppercase">
            A Little Tradition
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif text-white leading-tight"
        >
          A Lifetime of Love
          <br />
          <span className="text-yellow-300">
            For Jaanu ❤️
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed"
        >
          Tap the Rakhi below to begin our little celebration.
        </motion.p>

        {/* Rakhi Area */}
        <div className="relative mt-10 sm:mt-12 h-64 sm:h-72 w-full flex items-center justify-center">

          {/* Decorative Ring */}
          <motion.div
            animate={{
              scale: isTied ? [1, 1.25, 1] : [1, 1.05, 1],
              opacity: isTied ? [0.4, 0.9, 0.4] : [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: isTied ? 1.2 : 2.5,
              repeat: isTied ? 0 : Infinity,
            }}
            className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-yellow-400/30"
          />

          {/* Rakhi */}
          <motion.button
            type="button"
            onClick={handleTieRakhi}
            disabled={isTied}
            aria-label="Tie the Rakhi"
            whileHover={!isTied ? { scale: 1.08 } : {}}
            whileTap={!isTied ? { scale: 0.94 } : {}}
            animate={
              isTied
                ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, -5, 5, 0],
                  }
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: isTied ? 1 : 2.2,
              repeat: isTied ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="relative z-30 w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 border-4 border-yellow-200/70 shadow-[0_0_45px_rgba(251,191,36,0.45)] cursor-pointer disabled:cursor-default"
          >
            {/* Inner Circle */}
            <div className="absolute inset-3 rounded-full border-2 border-white/40" />

            {/* Rakhi Design */}
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl">🎀</span>

              <span className="mt-1 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white">
                RAKHI
              </span>
            </div>
          </motion.button>

          {/* Floating Particles */}
          {[...Array(8)].map((_, index) => (
            <motion.span
              key={index}
              className="absolute text-yellow-300 text-sm pointer-events-none"
              style={{
                transform: `rotate(${index * 45}deg) translateY(-${110 + (index % 3) * 15}px)`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2 + index * 0.15,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            >
              ✦
            </motion.span>
          ))}
        </div>

        {/* Instruction */}
        <AnimatePresence mode="wait">
          {!isTied ? (
            <motion.div
              key="instruction"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex flex-col items-center"
            >
              <p className="text-white/70 text-sm sm:text-base">
                Tie the Rakhi, Jaanu
              </p>

              <p className="mt-1 text-xs text-white/40">
                Tap the Rakhi ❤️
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center"
            >
              <motion.p
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: 2,
                }}
                className="text-xl sm:text-2xl font-serif text-yellow-300"
              >
                ✨ Rakhi Tied Successfully ✨
              </motion.p>

              <p className="mt-2 text-sm text-white/60">
                A bond that lasts forever ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        {!isTied && (
          <motion.button
            type="button"
            onClick={handleTieRakhi}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 px-7 py-3 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(249,115,22,0.3)] border border-yellow-300/30"
          >
            Tie the Rakhi ❤️
          </motion.button>
        )}
      </div>
    </section>
  );
}